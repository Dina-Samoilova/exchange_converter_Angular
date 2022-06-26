import { Component, OnInit, Input } from '@angular/core';
import { faDollarSign, faEuroSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import { CURRENCY } from '../../mock-currency';
import { ConvertService } from '../../services/convert.service';
import { Convert } from '../../Convert';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  @Input() rateUSD!: string;
  currencys = CURRENCY;

  sum1: number = 1;
  sum2!: number;
  choosedCurrency1: string = this.currencys[0];
  choosedCurrency2: string = this.currencys[2];
  valid1 = true;
  valid2 = true;

  faDollar = faDollarSign;
  faEuro = faEuroSign;
  faHryvnia = faHryvnia;

  isUAH1!: boolean;
  isUSD1: boolean = true;
  isEUR1!: boolean;
  isUAH2: boolean = true;
  isUSD2!: boolean;
  isEUR2!: boolean;

  convert1!: Convert;
  convert2!: Convert;

  constructor(private convertService: ConvertService) { }

  ngOnInit(): void {
    this.sum2 = +this.rateUSD;
  }

  changeCurrency1(e: any) {
    this.choosedCurrency1 = e.target.value;

    this.isUAH1 = this.choosedCurrency1 === 'UAH';
    this.isUSD1 = this.choosedCurrency1 === 'USD';
    this.isEUR1 = this.choosedCurrency1 === 'EUR';

    this.convertService
      .getConverted(this.choosedCurrency1, this.choosedCurrency2, String(this.sum1))
      .subscribe((result) => this.sum2 = result.result);
  }

  changeAmount1(e: any) {
    const reg = /^\d*\.?\d*$/;
    const sum: string = e.target.value;

    if (reg.test(sum) && +sum < 1000000000) {
      this.valid1 = true;
    } else {
      this.valid1 = false;
    }

    this.convertService
      .getConverted(this.choosedCurrency1, this.choosedCurrency2, sum)
      .subscribe((result) => this.sum2 = result.result);
  }

  changeCurrency2(e: any) {
    this.choosedCurrency2 = e.target.value;

    this.isUAH2 = this.choosedCurrency2 === 'UAH';
    this.isUSD2 = this.choosedCurrency2 === 'USD';
    this.isEUR2 = this.choosedCurrency2 === 'EUR';

    this.convertService
      .getConverted(this.choosedCurrency2, this.choosedCurrency1, String(this.sum1))
      .subscribe((result) => this.sum2 = result.result);
  }

  changeAmount2(e: any) {
    const reg = /^\d*\.?\d*$/;
    const sum: string = e.target.value;

    if (reg.test(sum) && +sum < 1000000000) {
      this.valid2 = true;
    } else {
      this.valid2 = false;
    }

    this.convertService
      .getConverted(this.choosedCurrency2, this.choosedCurrency1, sum)
      .subscribe((result) => this.sum1 = result.result);
  }
}

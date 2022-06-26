import { Component, OnInit } from '@angular/core';
import { CURRENCY } from '../../mock-currency';
import { RatesService } from '../../services/rates.service';
import { Rate } from '../../Rate';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent implements OnInit {
  title: string = 'Currency Converter';
  usd = CURRENCY[0];
  eur = CURRENCY[1];
  usdUah!: Rate;
  eurUah!: Rate;

  constructor(private ratesService: RatesService) {}

  ngOnInit(): void {
    this.ratesService
      .getRates(this.usd)
      .subscribe((rate) => this.usdUah = rate);
    this.ratesService
      .getRates(this.eur)
      .subscribe((rate) => this.eurUah = rate);
  }
}

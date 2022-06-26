import { Component, OnInit, Input } from '@angular/core';
import { CURRENCY } from '../../mock-currency';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() currency!: string;
  @Input() rate!: string;
  uah = CURRENCY[2];

  constructor() {}

  ngOnInit(): void {}

}

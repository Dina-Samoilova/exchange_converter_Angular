import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() usd!: string;
  @Input() eur!: string;
  @Input() rateUSD!: string;
  @Input() rateEUR!: string;

  constructor() {}

  ngOnInit(): void {
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() rate!: string;
  timestamp!: string;
  date!: string;

  constructor() { }

  ngOnInit(): void {
    this.timestamp = this.rate;
    this.date = new Date(+this.timestamp * 1000).toUTCString();
  }

}

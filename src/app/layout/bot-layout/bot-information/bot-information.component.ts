import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-bot-information',
  templateUrl: './bot-information.component.html',
  styleUrls: ['./bot-information.component.scss']
})
export class BotInformationComponent implements OnInit {

  myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  constructor() {

  }

  ngOnInit(): void {
  }

}

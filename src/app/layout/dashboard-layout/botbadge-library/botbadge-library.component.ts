import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botbadge-library',
  templateUrl: './botbadge-library.component.html',
  styleUrls: ['./botbadge-library.component.scss']
})
export class BotbadgeLibraryComponent implements OnInit {

  @Input() botId: string;
  @Input() botName: string;
  @Input() botDescription: string;
  @Input() botPeople: number;
  @Input() botAuthor: string;
  @Input() botRating: number;

  constructor() { }

  ngOnInit(): void {
  }

}

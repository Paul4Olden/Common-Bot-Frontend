import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-botbadge',
  templateUrl: './botbadge.component.html',
  styleUrls: ['./botbadge.component.scss'],
})
export class BotbadgeComponent {
  
  @Input() botId: number;
  @Input() botName: string;
  @Input() botDescription: string;
  @Input() botPosts: number;
  @Input() botPublishedPosts: number;
  @Input() botChannels: number;

  postPercents = 0
  ngOnInit(): void {
    this.postPercents = this.botPublishedPosts/this.botPosts*100
  }
  
}

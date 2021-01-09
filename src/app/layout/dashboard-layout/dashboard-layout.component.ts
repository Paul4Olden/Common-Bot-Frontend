import { Component, OnInit } from '@angular/core';

interface Bot {
  botId: string;
  botName: string;
  botDescription: string;
  botPosts: number,
  botPublishedPosts: number,
  botChannels: Object;
}

interface LibraryBot {
  botId: string;
  botName: string;
  botDescription: string;
  botPeople: number;
  botAuthor: string;
  botRating: number;
}

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  myBots: Bot[] = [
    {
      botId: 'andrew',
      botName: 'Андрюша',
      botDescription: 'Анализирует данные, принимает заказы, ведет запись на прием',
      botPosts: 7,
      botPublishedPosts: 3,
      botChannels: 4,
    },
    {
      botId: 'buisness',
      botName: 'BusinessBot',
      botDescription: 'Рассказывает чудесные истории, а также может общаться с пользователями',
      botPosts: 7,
      botPublishedPosts: 3,
      botChannels: 8,
    },
    {
      botId: 'kino01',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPosts: 7,
      botPublishedPosts: 3,
      botChannels: 3,
    },
    {
      botId: 'kino02',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPosts: 10,
      botPublishedPosts: 3,
      botChannels: 3,
    }
  ];

  allBots: LibraryBot[] = [
    {
      botId: 'kino03',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPeople: 1245,
      botAuthor: 'Горячев В.',
      botRating: 3.0,
    },
    {
      botId: 'kino04',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPeople: 3050,
      botAuthor: 'Горячев В.',
      botRating: 3,
    },
    {
      botId: 'kino05',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPeople: 6923,
      botAuthor: 'Горячев В.',
      botRating: 3,
    },
    {
      botId: 'kino06',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPeople: 1423,
      botAuthor: 'Горячев В.',
      botRating: 3,
    },
    {
      botId: 'kino07',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPeople: 4612,
      botAuthor: 'Горячев В.',
      botRating: 3,
    },
    {
      botId: 'kino08',
      botName: 'Киноман 2.0',
      botDescription: 'Ищет фильмы и сериалы, советует рандмоные картины для просмотра',
      botPeople: 4624,
      botAuthor: 'Горячев В.',
      botRating: 3,
    },
  ];

  ngOnInit(): void {}

}

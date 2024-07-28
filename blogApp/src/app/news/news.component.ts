import { Component, OnInit } from '@angular/core';

interface Post {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  posts: Post[] = [];

  ngOnInit(): void {
    this.posts = JSON.parse(localStorage.getItem('posts') || '[]');
  }
}

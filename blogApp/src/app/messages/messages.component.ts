import { Component, OnInit } from '@angular/core';

interface Message {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  ngOnInit() {
    this.messages = JSON.parse(localStorage.getItem('messages') || '[]');
  }
}

import { Component } from '@angular/core';
import { MessagingService } from '../services/messaging.service'
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-PWA-Noti';
  message: any;
  constructor(public messagingService: MessagingService) { }


  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

  copyToken(){

    navigator.clipboard.writeText(this.messagingService.tokenShare);

  }
}

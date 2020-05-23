import { Component } from '@angular/core';
import {LocalStorageService} from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssr-lessons';

  constructor(private localStorage: LocalStorageService) {
    localStorage.setItem('foo', '123');
    console.log('constructor', localStorage.getItem('foo'));
  }
}

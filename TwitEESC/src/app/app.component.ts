import { Component } from '@angular/core';
import { ToolbarControlService } from './toolbar-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedOut: boolean = false;
  constructor() {

  }

}



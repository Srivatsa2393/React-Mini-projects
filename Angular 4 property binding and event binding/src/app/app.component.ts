import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appComponentStartGame(event){
    console.log(event.value);
  }

  appComponentStopGame(event){
    console.log(event.value)
  }
}

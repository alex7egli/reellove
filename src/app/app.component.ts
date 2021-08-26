import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reellove';

  userSelect(userSelected: string) {
    alert(`user selected ${userSelected}`);
  }
}

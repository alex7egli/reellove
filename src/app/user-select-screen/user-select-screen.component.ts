import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-select-screen',
  templateUrl: './user-select-screen.component.html',
  styles: ['']
})
export class UserSelectScreenComponent {
  constructor(private router: Router) {}

  userSelect(userSelected: string) {
    alert(`user selected ${userSelected}`);
    this.router.navigate(['movie-swipe']);
  }
}
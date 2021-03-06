import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'user-select-screen',
  templateUrl: './user-select-screen.component.html',
  styles: ['']
})
export class UserSelectScreenComponent {
  constructor(private router: Router,
    private dataService: DataService) {}

  userSelect(userIndex: number) {
    this.dataService.selectedUser = this.dataService.users[userIndex];
    this.router.navigate(['movie-swipe']);
  }
}
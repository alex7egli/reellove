import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'movie-swipe-screen',
  templateUrl: './movie-swipe-screen.component.html',
  styles: ['']
})
export class MovieSwipeScreenComponent {
  selectedUser?: string;

  constructor(private dataService: DataService) {
    this.selectedUser = this.dataService.selectedUser;
  }
}
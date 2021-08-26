import { Component } from '@angular/core';
import { DataService, IUser } from '../services/data.service';

@Component({
  selector: 'favorite-screen',
  templateUrl: './favorite-screen.component.html',
  styles: ['']
})
export class FavoriteScreenComponent {
  selectedUser: IUser = this.dataService.users[0];
  likedMovies: Array<string> = [];

  constructor(private dataService: DataService) {
    this.selectedUser = this.dataService.selectedUser;

    for(let movieName in this.dataService.likedMoviesByUserId['user1']) {
      if (this.dataService.likedMoviesByUserId['user2'][movieName]) {
        this.likedMovies.push(movieName);
      }
    }
  }
}
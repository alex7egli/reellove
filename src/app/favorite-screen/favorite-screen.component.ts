import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'favorite-screen',
  templateUrl: './favorite-screen.component.html',
  styles: ['']
})
export class FavoriteScreenComponent {
  likedMovies: Array<string> = [];

  constructor(private dataService: DataService) {
    for(let movieName in this.dataService.likedMoviesByUserId['user1']) {
      if (this.dataService.likedMoviesByUserId['user2'][movieName]) {
        this.likedMovies.push(movieName);
      }
    }
  }
}
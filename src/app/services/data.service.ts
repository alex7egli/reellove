import { Injectable } from '@angular/core';
import * as movies from "../../assets/allMoviesOut.json";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedUser: string = 'user1';
  moviesList: Array<any> = movies;
  randomIndices: Array<number> = [];

  likedMoviesByUserId: any = {
    'user1': {},
    'user2': {}
  };

  constructor() {
    // todo: shuffle here, assign randomIndices
  }
}
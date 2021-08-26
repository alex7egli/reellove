import { Injectable } from '@angular/core';
import * as movies from "../../assets/allMoviesOut.json";

export declare interface IUser {
  name: string;
  id: string;
  indexInMovieList: number;
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: Array<IUser> = [
    { name: 'User 1', id: 'user1', indexInMovieList: 0 },
    { name: 'User 2', id: 'user2', indexInMovieList: 0 }
  ];
  selectedUser: IUser = this.users[0];
  moviesList: Array<any> = movies;
  randomIndices: Array<number> = [];

  likedMoviesByUserId: any = {
    'user1': {},
    'user2': {}
  };

  constructor() {
    // create an empty array with length equal to movie list length
    const N = this.moviesList.length;
    const array = Array.from({length: N}, (_, index) => index);    // Shuffle the array
    var currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    this.randomIndices = array;
  }

  incrementRandomInt(user: IUser) {
    user.indexInMovieList++;
    if (user.indexInMovieList >= this.moviesList.length) {
      user.indexInMovieList = 0;
    }
  }
}
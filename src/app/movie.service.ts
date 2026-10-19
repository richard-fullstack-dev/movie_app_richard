import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = []

  constructor() {
    this.read()
    
  }
  read(): void{
  
    let jsonArray = JSON.parse(localStorage.getItem("movies_DataBase") ?? "[]")
    this.movies = Object.values(jsonArray).map(x => Object.assign(new Movie(), x))
  }

  save(){
    localStorage.setItem("movies_DataBase", JSON.stringify(this.movies))
  }

  create(movie: Movie): void {
    this.movies.push(movie)
  }

  delete(): void {
    // TODO
  }

  seed(): void {
    let m: Movie = new Movie()
    m.title = "Kommissar Rex"
    m.year = 1994
    m.watched = true
    m.rating = 5
    m.imgUrl = "https://images.thalia.media/-/BF2000-2000/819de1e13cc54d51ba9c59067ed00960/kommissar-rex-die-komplette-1-staffel-3-dvds-fernsehjuwelen-dvd-tobias-moretti.jpeg"

    this.movies.push(m)

    m = new Movie()
    m.title = "Columbo"
    m.year = 1968
    m.watched = true
    m.rating = 5
    m.imgUrl = "https://m.media-amazon.com/images/M/MV5BMTc1NzU5NTY3MF5BMl5BanBnXkFtZTcwNTEyMzYyMQ@@._V1_.jpg"

    this.movies.push(m)

    m = new Movie()
    m.title = "Der Bergdoktor"
    m.year = 2008
    m.watched = false
    m.rating = 4
    m.imgUrl = "https://cdn.moviepilot.de/files/956b34a16e7f6a2dbb71f8c486bea8c0d4f9f3c1bb62e2d853fcfd747923/copyright/Der-Bergdoktor-1.jpg"

    this.movies.push(m)

    m = new Movie()
    m.title = "Medicopter 117"
    m.year = 1998
    m.watched = true
    m.rating = 5
    m.imgUrl = "https://image.pmgstatic.com/cache/resized/w960h634/files/images/film/soundtracks/covers/162/103/162103508_fb14b5.jpg"

    this.movies.push(m)
}
}

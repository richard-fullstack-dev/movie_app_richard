import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(public service: MovieService) { }

  delete(movie: Movie): void {
    // TODO: implement delete logic here
    this.service.delete()
  }
}

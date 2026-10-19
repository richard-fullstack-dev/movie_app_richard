import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  movie: Movie = new Movie()

  constructor(private router: Router, private service: MovieService) {}

  create(): void {
    this.service.create(this.movie)
    this.service.save()
    this.router.navigateByUrl("/list")
  }
}

import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/model/serie';
import {Genere} from "src/app/model/genere"

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  serie: Array<Serie> = [];

  constructor() { }

  ngOnInit(): void {
    this.serie.push(
      {title: 'Game of Thrones', year: 2011, numseason: 8, genere: Genere.Fantasy, season: [
        {num: 1, title: '1 stagione', year: 2001, episodes: 10 },
        {num: 2, title: '2 stagione', year: 2001, episodes: 20 },
        {num: 3, title: '3 stagione', year: 2001, episodes: 30 },
        {num: 4, title: '4 stagione', year: 2001, episodes: 40 }
      ]},
      {title: 'Breaking Bad', year: 2008, numseason: 5, genere: Genere.Thriller, season: [
        {num: 1, title: '1 stagione', year: 2001, episodes: 10 },
        {num: 2, title: '2 stagione', year: 2001, episodes: 20 },
        {num: 3, title: '3 stagione', year: 2001, episodes: 30 },
        {num: 4, title: '4 stagione', year: 2001, episodes: 40 },
        {num: 5, title: '5 stagione', year: 2001, episodes: 50 }
      ]},
      {title: 'Prison Break', year: 2005, numseason: 5, genere: Genere.Azione, season: [
        {num: 1, title: '1 stagione', year: 2001, episodes: 10 },
        {num: 2, title: '2 stagione', year: 2001, episodes: 20 },
        {num: 3, title: '3 stagione', year: 2001, episodes: 30 },
        {num: 4, title: '4 stagione', year: 2001, episodes: 40 },
        {num: 5, title: '5 stagione', year: 2001, episodes: 50 }
      ]},
      {title: 'Peaky Blinders', year: 2013, numseason: 5, genere: Genere.Gangstar, season: [
        {num: 1, title: '1 stagione', year: 2001, episodes: 10 },
        {num: 2, title: '2 stagione', year: 2001, episodes: 20 },
        {num: 3, title: '3 stagione', year: 2001, episodes: 30 },
        {num: 4, title: '4 stagione', year: 2001, episodes: 40 },
        {num: 5, title: '5 stagione', year: 2001, episodes: 50 }
      ]},
      {title: 'Californication', year: 2007, numseason: 7, genere: Genere.Commedia, season: [
        {num: 1, title: '1 stagione', year: 2001, episodes: 10 },
        {num: 2, title: '2 stagione', year: 2001, episodes: 20 },
        {num: 3, title: '3 stagione', year: 2001, episodes: 30 },
        {num: 4, title: '4 stagione', year: 2001, episodes: 40 },
        {num: 5, title: '5 stagione', year: 2001, episodes: 50 }
      ]},
      {title: 'The Following', year: 2013, numseason: 3, genere: Genere.Giallo, season: [
        {num: 1, title: '1 stagione', year: 2001, episodes: 10 },
        {num: 2, title: '2 stagione', year: 2001, episodes: 20 },
        {num: 3, title: '3 stagione', year: 2001, episodes: 30 },
        {num: 4, title: '4 stagione', year: 2001, episodes: 40 },
        {num: 5, title: '5 stagione', year: 2001, episodes: 50 }
      ]},
      {title: 'Suburra', year: 2017, numseason: 3, genere: Genere.Gangstar, season: [
        {num: 1, title: '1 stagione', year: 2001, episodes: 10 }
      ]}
    )

  }

  getGenreValue(index: number): string {
    return Genere[index];
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss']
})
export class AnimePageComponent {

  public animes: any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });

  constructor(private animeService: AnimeService) {
    //this.animeService.searchAnime('naruto').subscribe(console.log)

    this.searchControl.valueChanges
    .pipe(
      debounceTime(1000),
      //map(() => 'valor')
    )
    .subscribe((value) => {
      //console.log(value)
      value && this.animeService.searchAnime(value).subscribe(console.log);
    })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetPageComponent } from './street-page/street-page.component';
import { AnimePageComponent } from './anime-page/anime-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StreetPageComponent,
    AnimePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[
    StreetPageComponent,
    AnimePageComponent
  ]
})
export class PagesModule { }

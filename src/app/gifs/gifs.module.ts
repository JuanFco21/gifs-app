import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardList } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    CardList,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }

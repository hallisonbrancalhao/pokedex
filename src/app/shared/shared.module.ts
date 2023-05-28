import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';

@NgModule({
  declarations: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  imports: [CommonModule, RouterModule],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
})
export class SharedModule {}

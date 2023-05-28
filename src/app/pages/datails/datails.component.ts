import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.scss'],
})
export class DatailsComponent {
  #urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  #urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(
      `${this.#urlPokemon}/${id}`
    );
    const name = this.pokeApiService.apiGetPokemons(`${this.#urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: (res: any) => {
        (this.pokemon = res), (this.isLoading = true);
      },
      error: (err: any) => {
        this.apiError = true;
      },
    });
  }
}

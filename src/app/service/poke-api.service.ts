import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  #url: string = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  constructor(private http: HttpClient) {}

  get apiListAllPokemon(): Observable<any> {
    return this.http.get<any>(this.#url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res: any) => res));
  }
}

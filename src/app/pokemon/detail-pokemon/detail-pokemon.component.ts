import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";
@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonsList: Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService,
    private routa: Router
  ) {}
  ngOnInit(): void {
    
    const pokemonId: number = +this.router.snapshot.paramMap.get("id");
    this.pokemon = this.pokemonService.getPokemonbyId(+pokemonId);
  }
  goBack() {
    this.routa.navigate(["pokemons"]);
  }
}

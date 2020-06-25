import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/service'
import { Artist } from '../../models/Artist'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  response: Artist[]
  constructor(private spotifyservice: SpotifyService) { }

  ngOnInit(): void {
  }
  searchMusic() {
    this.spotifyservice.searchMusic(this.searchStr, 'artist').subscribe(res => {
      console.log();
    })
    // console.log(this.searchStr)
  }
}

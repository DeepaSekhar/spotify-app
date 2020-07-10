import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/service'
import { Artist } from '../../models/Artist'
import { observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  response: Artist[]
  oAuthToken: string;

  constructor(private spotifyservice: SpotifyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //acessing oAuth token
    this.oAuthToken = this.route.snapshot.fragment
    console.log("snapshot", this.oAuthToken);
  }
  searchMusic() {
    this.spotifyservice.searchMusic(this.searchStr, 'artist').subscribe(res => {
      console.log();
    })
    // console.log(this.searchStr)
  }
}

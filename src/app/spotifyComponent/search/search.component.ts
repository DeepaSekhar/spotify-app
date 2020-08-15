import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/service'
import { Item } from '../../models/Items'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchResponse$: Observable<Item[]>
  oAuthToken: string;


  constructor(private spotifyservice: SpotifyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //acessing oAuth token
    this.oAuthToken = this.route.snapshot.fragment
    //oAth token contain the word "acess token=" so slice that word from token using replace
    if (this.oAuthToken) {
      let oAuthSlice = this.oAuthToken.replace("access_token=", "");
      console.log("slice", oAuthSlice)

      console.log("snapshot", this.oAuthToken);
      this.spotifyservice.getAuthToken(oAuthSlice);
    }

  }
  searchMusicByArtist() {
    console.log("the function been called")
    this.searchResponse$ = this.spotifyservice.searchByArtist(this.searchStr)


  }


}

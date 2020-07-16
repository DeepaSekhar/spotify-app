import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/service';
import { Router, ActivatedRoute } from '@angular/router'
import { Artists } from '../../models/Artist'
import { Item } from '../../models/Items'
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string;
  constructor(private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap => {
      this.id = parameterMap.get('id')
      console.log("id from the artist", this.id)
    })
    // this.id = this.route.snapshot.fragment
    // console.log("from snap shot", this.id)
    // this.spotifyService.serarchArtistById(this.id);

  }

}

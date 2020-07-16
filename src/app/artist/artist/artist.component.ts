import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/service';
import { Router, ActivatedRoute } from '@angular/router'
import { Artists } from '../../models/Artist'
import { Item } from '../../models/Items'
import { ArtistsAlbums } from '../../models/ArtistsAlbums'
import { Observable } from 'rxjs';
import { AlbumItem } from 'src/app/models/AlbumItem';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string;
  artistsAlbums$: Observable<AlbumItem[]>
  constructor(private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap => {
      this.id = parameterMap.get('id')
      console.log("id from the artist", this.id)
      // this.spotifyService.serarchArtistsAlbmById(this.id);
      this.artistsAlbums$ = this.spotifyService.serarchArtistsAlbmById(this.id);
    })
  }

}

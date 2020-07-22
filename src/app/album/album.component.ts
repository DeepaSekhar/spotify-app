import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/service'
import { Observable } from 'rxjs'
import { Router, ActivatedRoute } from '@angular/router'
import { AlbumDetails } from '../models/album/AlbumDetails'
import { AlbumDetailItem } from '../models/album/AlbumDetail-Item'
import { Location } from '@angular/common';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id: string;
  artistOfAlbums$: Observable<AlbumDetails>
  albumsOfArist$: Observable<AlbumDetailItem[]>
  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap => {
      this.id = parameterMap.get('id');
      console.log("id of an album", this.id);
      this.artistOfAlbums$ = this.spotifyService.searchAlbumsArtistById(this.id);
      this.albumsOfArist$ = this.spotifyService.searchAlbumsOfArtist(this.id);
    })
  }

  goBack(): void {
    this.location.back();
  }

}

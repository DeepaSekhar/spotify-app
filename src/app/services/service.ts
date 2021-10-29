import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artists } from '../models/Artist';
import { Item } from '../models/Items';
import { ArtistsAlbums } from '../models/ArtistsAlbums';
import { AlbumItem } from '../models/AlbumItem';
import { AlbumDetails } from '../models/album/AlbumDetails';
import { AlbumDetailItem } from '../models/album/AlbumDetail-Item';
import { SearchByResponse } from '../models/SearchByResponse';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  searchUrl: string;
  searchArtistsAlbum: string;
  searchArtisOfAlbums: string;
  searchAlbumOfArtist: string;
  authorise: string;
  oAuthToken: string;
  //oAuth url for authorise and login
  readonly oAuthUrl =
    'https://accounts.spotify.com/authorize?client_id=912a79b35603492291b382ebd0733970&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsearch%2F&scope=user-read-private%20user-read-email&response_type=token&state=123';
  constructor(private http: HttpClient) {}
  getAuthToken(oAuthToken: string) {
    this.oAuthToken = oAuthToken;
    // console.log("oAuthToken", this.oAuthToken);
  }
  //search music(search component)

  searchByArtist(searchString: string): Observable<Item[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.oAuthToken}`,
    });

    this.searchUrl = `/api/search?q=${searchString}&type=artist&offset=0&limit=5`;

    return this.http
      .get<SearchByResponse>(this.searchUrl, { headers: headers })

      .pipe(
        tap((result) =>
          console.log('result from service', result.artists.items)
        ),
        map((res) => res.artists.items)
      );
  }
  serarchArtistsAlbmById(artistId: string): Observable<AlbumItem[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.oAuthToken}`,
    });

    this.searchArtistsAlbum = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    console.log('seachArtistAlbum', this.searchArtistsAlbum);
    return this.http
      .get<ArtistsAlbums>(this.searchArtistsAlbum, { headers: headers })
      .pipe(
        tap((res) => console.log('result from searchArtist from Album', res)),
        map((res) => res.items)
      );
  }
  //album component
  //function to get the artist to view

  searchAlbumsArtistById(albumId: string): Observable<AlbumDetails> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.oAuthToken}`,
    });
    this.searchArtisOfAlbums = `https://api.spotify.com/v1/albums/${albumId}`;
    console.log('seach Album', this.searchArtisOfAlbums);
    return this.http
      .get<AlbumDetails>(this.searchArtisOfAlbums, { headers: headers })
      .pipe(tap((res) => console.log('result from detailed album', res)));
  }

  //function to return album of a paticular artist

  searchAlbumsOfArtist(albumId: string): Observable<AlbumDetailItem[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.oAuthToken}`,
    });
    this.searchAlbumOfArtist = `https://api.spotify.com/v1/albums/${albumId}`;
    console.log('search Album', this.searchAlbumOfArtist);
    return this.http
      .get<AlbumDetails>(this.searchAlbumOfArtist, { headers: headers })
      .pipe(
        tap((res) => console.log('****result *****', res.tracks.items)),
        map((res) => res.tracks.items)
      );
  }
}

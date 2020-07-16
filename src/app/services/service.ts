import { Injectable, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artists } from '../models/Artist'
import { Item } from '../models/Items'

import { SearchByResponse } from '../models/SearchByResponse'

@Injectable({
    providedIn: 'root'
}
)

export class SpotifyService {
    searchUrl: string;
    authorise: string;
    oAuthToken: string;
    //oAuth url for authorise and login 
    readonly oAuthUrl = "https://accounts.spotify.com/authorize?client_id=912a79b35603492291b382ebd0733970&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsearch%2F&scope=user-read-private%20user-read-email&response_type=token&state=123";
    constructor(private http: HttpClient) {
    }
    getAuthToken(oAuthToken: string) {
        this.oAuthToken = oAuthToken;
        console.log("oAuthToken", this.oAuthToken);

    }
    //search music(search component)

    searchByArtist(searchString: string): Observable<Item[]> {
        console.log("service been called", searchString);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.oAuthToken}`,
            // 'q': `${searchString}`,
            // 'type': 'artist'
        })
        console.log("headers", headers);
        // this.searchUrl = 'https://api.spotify.com/v1/search&offset=0&limit=5'
        this.searchUrl = `/api/search?q=${searchString}&type=artist&offset=0&limit=5`
        console.log("search-url", this.searchUrl);

        return this.http.get<SearchByResponse>(this.searchUrl, { headers: headers })
            .pipe(
                tap(result => console.log("result from service", result.artists.items)
                )
                , map(res => res.artists.items)
            );



    }
    serarchArtistById(id: string) {
        console.log("id from service", id);
    }
}
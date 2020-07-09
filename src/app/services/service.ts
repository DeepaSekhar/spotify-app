import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/Artist'

@Injectable({
    providedIn: 'root'
}
)

export class SpotifyService {
    private clientId: string = environment.clientId;
    private clientSecret: string = environment.clientSecret;
    private redirectUri: string = environment.redirectUri;
    searchUrl$: string;
    artists: Artist[];
    authorise: string;
    readonly oAuthUrl = "https://accounts.spotify.com/authorize?client_id=912a79b35603492291b382ebd0733970&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsearch%2F&scope=user-read-private%20user-read-email&response_type=token&state=123";


    constructor(private http: HttpClient) {

    }
    // getAuth(): Observable<any[]> {
    //     return this.http.get<any[]>(this.oAuthUrl).pipe(
    //         tap(res => console.log("response from oAuth", res))
    //     )
    // }

    searchMusic(str: string, type: 'artist'): Observable<Artist[]> {
        this.searchUrl$ = 'https://api.spotify.com/v1/search?q=' + str + ' &type=' + type + ''

        return this.http.get<Artist[]>(this.searchUrl$)
            .pipe(
                tap(result => console.log("result from service", result)))


    }
}
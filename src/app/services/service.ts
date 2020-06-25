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
    searchUrl$: string;
    artists: Artist[];
    constructor(private http: HttpClient) {

    }

    searchMusic(str: string, type: 'artist'): Observable<Artist[]> {
        this.searchUrl$ = 'https://api.spotify.com/v1/search?q=' + str + ' &type=' + type + ''

        return this.http.get<Artist[]>(this.searchUrl$)
            .pipe(
                tap(result => console.log("result from service", result)))


    }
}
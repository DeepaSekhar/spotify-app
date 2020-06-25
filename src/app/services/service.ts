import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class spotifyService {
    searchUrl$: string;
    constructor(private http: HttpClient) {

    }

    searchMusic(str: string, type: 'artist'): Observable<any[]> {
        this.searchUrl$ = 'https://api.spotify.com/v1/search?q=' + str + ' &type=' + type + ''

        return this.http.get<any[]>(this.searchUrl$);

    }
}
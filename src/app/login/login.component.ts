import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // oAuthres$: Observable<any[]>
  spotifyoAuthUrl: string;

  constructor(private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  //authorisation
  ngOnInit(): void {
    this.spotifyoAuthUrl = this.spotifyService.oAuthUrl;

  }

}

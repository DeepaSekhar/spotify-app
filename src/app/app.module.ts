import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SearchComponent } from './spotifyComponent/search/search.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

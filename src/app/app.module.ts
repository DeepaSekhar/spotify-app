import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SearchComponent } from './spotifyComponent/search/search.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

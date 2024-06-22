import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/views/home/home.component';
import { NotfoundComponent } from './core/views/notfound/notfound.component';
import { ApiService } from '@services/api.service';
import { FormsModule } from '@angular/forms';
import { GameService } from '@services/game-service.service';
import { GamePictureComponent } from './core/layouts/game-picture/game-picture.component';
import { GameOptionsComponent } from './core/layouts/game-options/game-options.component';
import { PlayFieldComponent } from '@views/play-field/play-field.component';
import { OptionComponent } from './core/components/option/option.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    PlayFieldComponent,
    GamePictureComponent,
    GameOptionsComponent,
    OptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

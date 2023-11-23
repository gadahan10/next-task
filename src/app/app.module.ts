import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextMoviesFooterComponent } from './modules/shared/next-movies-footer/next-movies-footer.component';
import { NextMoviesHeaderComponent } from './modules/shared/next-movies-header/next-movies-header.component';
import { HttpClientService } from './services/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from './services/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NextMoviesFooterComponent,
    NextMoviesHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    HttpClientService,
    DialogService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

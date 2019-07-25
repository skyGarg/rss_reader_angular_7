import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChannelsComponent } from './channels/channels.component';
import { TrimPipe } from './shared/pipes/trim.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Rss2jsonService } from './shared/services/rss2json.service';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChannelsComponent,
    TrimPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    Rss2jsonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

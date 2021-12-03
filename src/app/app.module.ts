import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './components/menu/menu.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
// For MDB Angular Free
import { ButtonsModule,CardsModule, CarouselModule, ModalModule, WavesModule, MDBBootstrapModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MDBBootstrapModule.forRoot(),
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ButtonsModule, WavesModule, CardsModule,  CarouselModule, ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

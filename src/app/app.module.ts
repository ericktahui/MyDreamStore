import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


// Features
import { MaterialModule } from 'src/features/material/material.module';
import { CustomModule } from '../features/custom/custom.module';
import { RainbowModule } from '../features/rainbow/rainbow.module';
// Routes
import AppRoutes from './app.routes';
// Services
import { DatabaseService } from './services/db.service';
import { ConfigService } from './services/config.service';
import { ApiService } from './services/api.service';
// Components
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { ErrorComponent } from './views/error/error.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './views/search/search.component';
import { MiniSearchComponent } from './views/search/mini-search.component';
import { GeneradorComponent } from './views/generador/generador.component';
import { Genera2Component } from './views/genera2/genera2.component';
import { DinamicoComponent } from './views/dinamico/dinamico.component';
import { EstructuralComponent } from './views/estructural/estructural.component';
import { PropagacionDirective } from './views/estructural/propagacion/propagacion.directive';
import { ExamenComponent } from './views/examen/examen.component';
import { CrudService } from './services/crud.service';
import { ColorDirective } from './views/examen/color.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ErrorComponent,
    SearchComponent,
    MiniSearchComponent,
    GeneradorComponent,
    Genera2Component,
    DinamicoComponent,
    EstructuralComponent,
    PropagacionDirective,
    ExamenComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    CustomModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RainbowModule,
    AppRoutes,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DatabaseService, ConfigService,ApiService,CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

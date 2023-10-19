import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroListComponent } from './registro-list/registro-list.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';

const routes: Routes = [
  { path: '', component: RegistroFormComponent },
  { path: 'registro-form', component: RegistroFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroListComponent,
    RegistroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

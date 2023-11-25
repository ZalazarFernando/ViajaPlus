import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { routes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    // otros componentes aquí
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    // otros módulos aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

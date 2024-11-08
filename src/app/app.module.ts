import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppComponent // Importar el componente standalone
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt_reginaldo from '@angular/common/locales/pt';
// no import pode-se criar uma variavel direto no caso poder ser uma constante ou um objeto..
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

import { CamelCasePipe } from './camel-case.pipe';

registerLocaleData(localePt_reginaldo, 'port');

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'port'//'pt-BR'
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

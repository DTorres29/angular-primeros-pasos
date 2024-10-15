import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({//se debe añadir aqui los nuevos componentes
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//COMANDOS GIT
// 1-- git add . --> PREPARAR ScriptProcessorNode

// 2-- git commit -m "nombreAPoner" --> Añadir script

// 3-- git push --> subirlo a github

// git remote add origin https://github.com/DTorres29/angular-bases.git

// git branch -M main

// git push -u origin main

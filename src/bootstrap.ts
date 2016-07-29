import 'reflect-metadata';
import 'zone.js/dist/zone';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';


import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';

import { HTTP_PROVIDERS } from '@angular/http';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS])
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

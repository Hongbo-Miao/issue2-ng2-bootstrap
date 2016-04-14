import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';
import 'bootstrap4-webpack-package';

// import {Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap/ng2-bootstrap';
// Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [Alert]
})
class Socially {}
bootstrap(Socially);

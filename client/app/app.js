import angular from 'angular';
import angularMocks from 'angular-mocks';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import config from '../mock/config';

angular.module('app', [
    uiRouter,
    Components,
    'ngMockE2E'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .run(config)
  .component('app', AppComponent);

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', {
  restrict: 'E',
  bindings: {},
  template,
  controller
})

.name;

export default homeModule;

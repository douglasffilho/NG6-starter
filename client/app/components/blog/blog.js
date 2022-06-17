import angular from 'angular';
import uiRouter from 'angular-ui-router';
import blogComponent from './blog.component';

let blogModule = angular.module('blog', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('blog', {
      url: '/blog',
      component: 'blog'
    });
})

.component('blog', blogComponent)

.name;

export default blogModule;

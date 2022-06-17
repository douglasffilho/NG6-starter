import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import blogModule from './blog/blog';

let componentModule = angular.module('app.components', [
  Home,
  About,
  blogModule
])

.name;

export default componentModule;

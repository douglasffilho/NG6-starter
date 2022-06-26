import angular from 'angular';
import template from './footer.html';
import './footer.scss';

let footerModule = angular.module('footer', []).directive('footer', () => {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.imgsrc = attrs.imgsrc;
      scope.imgalt = attrs.imgalt;
    },
    template
  }
})

.name;

export default footerModule;

import angular from 'angular';
import template from './locationheader.html';
import './locationheader.scss';

let locationHeaderModule = angular.module('locationheader', [])
.directive('locationheader', () => {
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

export default locationHeaderModule;

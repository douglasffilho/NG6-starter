import angular from 'angular';

import template from './pages.html';
import './pages.scss';

import restaurantes from "./controllers/restaurantes";
import delegacias from "./controllers/delegacias";
import turismo from "./controllers/turismo";
import praias from "./controllers/praias";
import hoteis from "./controllers/hoteis";
import eventos from "./controllers/eventos";
import banheiros from "./controllers/banheiros";

const controllers = [
  restaurantes,
  delegacias,
  turismo,
  praias,
  hoteis,
  eventos,
  banheiros
];

const modules = controllers.map(controller => {
  controller.$inject = ['$http', '$scope'];

  return angular.module(controller.ref, [])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state(controller.ref, {
        url: `/${controller.ref}`,
        component: controller.ref
      });
  })
  .component(controller.ref, {
    restrict: 'E',
    bindings: {},
    template,
    controller
  })
  .name;
});

export default modules;

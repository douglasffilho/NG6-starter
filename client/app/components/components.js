import angular from "angular";
import uiRouter from 'angular-ui-router';
import Home from "./home/home";
import Templates from "./templates/templates";
import Pages from "./pages/pages";

const modules = angular.module("app.components", [
  uiRouter,
  Home,
  ...Templates,
  ...Pages
]).name;

export default modules;

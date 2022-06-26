import angular from "angular";
import template from "./locations.html";
import "./locations.scss";

let locationsModule = angular
  .module("locations", [])
  .directive("locations", () => {
    return {
      restrict: "E",
      link: (scope, elem, attrs) => {
        if (scope.request) {
          scope.request.then((data) => {
            elem[0].querySelector("ul").innerHTML = data
              .map(
                (location) =>
                  `<li><a href="#" onclick="goToLocation('${location.geoResult ? JSON.stringify(location.geoResult.point, null, 0) : ''}')">${location.name}</a></li>`
              )
              .join("");
          });
        }
        scope.title = attrs.title;
      },
      template,
    };
  }).name;

export default locationsModule;

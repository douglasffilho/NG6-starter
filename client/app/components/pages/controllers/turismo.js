class TurismoController {
  constructor($http, $scope) {
    this.name = "Turismo";
    this.icon = "assets/pontosturisticos.png";

    $scope.request = $http
      .get("/api/locations/pontosTuristicos")
      .then((response) => response.data);
  }
}

TurismoController.ref = "turismo";

export default TurismoController;

class PraiasController {
  constructor($http, $scope) {
    this.name = "Praias";
    this.icon = "assets/praias.png";

    $scope.request = $http
      .get("/api/locations/praias")
      .then((response) => response.data);
  }
}

PraiasController.ref = "praias";

export default PraiasController;

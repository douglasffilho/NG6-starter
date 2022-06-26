class DelegaciasController {
  constructor($http, $scope) {
    this.name = "Delegacias";
    this.icon = "assets/policial.png";

    $scope.request = $http
      .get("/api/locations/delegacias")
      .then((response) => response.data);
  }
}

DelegaciasController.ref = "delegacias";

export default DelegaciasController;

class BanheirosController {
  constructor($http, $scope) {
    this.name = "Banheiros";
    this.icon = "assets/banheiros.png";
    $scope.request = $http
      .get("/api/locations/banheiros")
      .then((response) => response.data);
  }
}

BanheirosController.ref = "banheiros";

export default BanheirosController;

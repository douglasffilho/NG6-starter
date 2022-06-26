class HoteisController {
  constructor($http, $scope) {
    this.name = "Hoteis";
    this.icon = "assets/hoteis.png";

    $scope.request = $http
      .get("/api/locations/hoteis")
      .then((response) => response.data);
  }
}

HoteisController.ref = "hoteis";

export default HoteisController;

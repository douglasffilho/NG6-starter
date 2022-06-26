class RestaurantesController {
  constructor($http, $scope) {
    $scope.request = $http
      .get("/api/locations/restaurantes")
      .then((response) => response.data);

    this.name = "Restaurantes";
    this.icon = "assets/restaurantes.png";
  }
}

RestaurantesController.ref = "restaurantes";

export default RestaurantesController;

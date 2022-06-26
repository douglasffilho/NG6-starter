class EventosController {
  constructor($http, $scope) {
    this.name = "Eventos";
    this.icon = "assets/eventos.png";

    $scope.request = $http
      .get("/api/locations/postosDeSaude")
      .then((response) => response.data);
  }
}

EventosController.ref = "eventos";

export default EventosController;

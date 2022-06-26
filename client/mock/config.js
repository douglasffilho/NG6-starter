import restaurantes from './locations/restaurantes';
import delegacias from './locations/delegacias';
import praias from './locations/praias';
import hoteis from './locations/hoteis';
import postosDeSaude from './locations/postos-saude';
import pontosTuristicos from './locations/pontos-turisticos';
import banheiros from './locations/banheiros';

const mockData = {
  restaurantes,
  delegacias,
  praias,
  hoteis,
  postosDeSaude,
  pontosTuristicos,
  banheiros
};

const Mock = ($httpBackend, $log) => {
  $httpBackend.when('GET', /^\/api\/locations\/.*/).respond( (method, url, data, headers) => {
    $log.log('Chamada Mockada:', method, url, data, headers);
    const response = mockData[url.split('/')[3]];
    return [200, response];
  });

}

Mock.$inject = ['$httpBackend','$log'];

export default Mock;

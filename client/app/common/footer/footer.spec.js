import footerModule from './footer'
import FooterController from './footer.controller';
import footerComponent from './footer.component';
import footerTemplate from './footer.html';

describe('footer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(footerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FooterController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(footerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = footerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(footerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(footerController);
      });
  });
});

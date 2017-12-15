import { NgSharedModuleRoutingApplicationPage } from './app.po';

describe('ng-shared-module-routing-application App', () => {
  let page: NgSharedModuleRoutingApplicationPage;

  beforeEach(() => {
    page = new NgSharedModuleRoutingApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

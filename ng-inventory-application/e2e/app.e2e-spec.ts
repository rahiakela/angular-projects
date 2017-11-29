import { AngularInventoryApplicationPage } from './app.po';

describe('angular-inventory-application App', () => {
  let page: AngularInventoryApplicationPage;

  beforeEach(() => {
    page = new AngularInventoryApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

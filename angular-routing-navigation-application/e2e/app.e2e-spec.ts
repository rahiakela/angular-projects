import { AngularCrudApplicationPage } from './app.po';

describe('angular-crud-application App', () => {
  let page: AngularCrudApplicationPage;

  beforeEach(() => {
    page = new AngularCrudApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

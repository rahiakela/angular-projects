import { AngularTestingApplicationPage } from './app.po';

describe('angular-testing-application App', () => {
  let page: AngularTestingApplicationPage;

  beforeEach(() => {
    page = new AngularTestingApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { AngularSocialLoginExamplePage } from './app.po';

describe('angular-social-login-example App', () => {
  let page: AngularSocialLoginExamplePage;

  beforeEach(() => {
    page = new AngularSocialLoginExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

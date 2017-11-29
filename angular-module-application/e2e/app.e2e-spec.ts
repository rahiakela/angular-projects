import { AngularPipeApplicationPage } from './app.po';

describe('angular-pipe-application App', () => {
  let page: AngularPipeApplicationPage;

  beforeEach(() => {
    page = new AngularPipeApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

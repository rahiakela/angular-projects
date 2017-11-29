import { AngularRedditApplicationPage } from './app.po';

describe('angular-reddit-application App', () => {
  let page: AngularRedditApplicationPage;

  beforeEach(() => {
    page = new AngularRedditApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

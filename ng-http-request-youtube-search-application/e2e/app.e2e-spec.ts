import { NgHttpRequestYoutubeSearchApplicationPage } from './app.po';

describe('ng-http-request-youtube-search-application App', () => {
  let page: NgHttpRequestYoutubeSearchApplicationPage;

  beforeEach(() => {
    page = new NgHttpRequestYoutubeSearchApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

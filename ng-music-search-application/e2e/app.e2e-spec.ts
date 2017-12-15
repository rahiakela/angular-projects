import { NgMusicSearchApplicationPage } from './app.po';

describe('ng-music-search-application App', () => {
  let page: NgMusicSearchApplicationPage;

  beforeEach(() => {
    page = new NgMusicSearchApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

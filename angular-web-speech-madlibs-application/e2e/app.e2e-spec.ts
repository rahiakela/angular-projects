import { AngularWebSpeechMadlibsApplicationPage } from './app.po';

describe('angular-web-speech-madlibs-application App', () => {
  let page: AngularWebSpeechMadlibsApplicationPage;

  beforeEach(() => {
    page = new AngularWebSpeechMadlibsApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

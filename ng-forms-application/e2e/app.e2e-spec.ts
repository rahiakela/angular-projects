import { NgFormsApplicationPage } from './app.po';

describe('ng-forms-application App', () => {
  let page: NgFormsApplicationPage;

  beforeEach(() => {
    page = new NgFormsApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

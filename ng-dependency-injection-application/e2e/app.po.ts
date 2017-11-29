import { browser, by, element } from 'protractor';

export class NgDependencyInjectionApplicationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

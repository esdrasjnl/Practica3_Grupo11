import { browser, by, element } from 'protractor';

export class AppPage {


  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToLogin() {
    return browser.get(browser.baseUrl + 'login') as Promise<any>;
  }

  navigateToPrincipal() {
    return browser.get(browser.baseUrl + 'principal') as Promise<any>;
  }

 

  //OBTENER TITULOS
  
  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

}
import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^El usuario desea utilizar la aplicación$/, {timeout:60 * 8000}, async () => {
  await page.navigateTo();
});

When(/^Ingreso a la pagina de login$/, {timeout:60 * 8000}, async () => {
    await page.navigateToLogin();
});

When(/^Ingreso mi usuario$/, {timeout:60 * 8000}, async () => {
    const ingreso = element(by.name("cajac"));
    await ingreso.sendKeys('us');
});

When(/^Ingreso mi contraseña$/, {timeout:60 * 8000}, async () => {
    const ingreso = element(by.name("cajap"));
    await ingreso.sendKeys('123');
});

When(/^Doy click en el boton de ingreso$/, {timeout:60 * 8000}, async () => {
    const ingreso = element(by.id("Ingresar"));
    await ingreso.click();
});

Then(/^Me dirige a la pagina principal$/, {timeout:60 * 8000}, async () => {
  await page.navigateToPrincipal();
});
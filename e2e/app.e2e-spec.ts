import { NgWebPage } from './app.po';

describe('ng-web App', () => {
  let page: NgWebPage;

  beforeEach(() => {
    page = new NgWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

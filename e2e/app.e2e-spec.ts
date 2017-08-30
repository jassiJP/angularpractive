import { CrickappPage } from './app.po';

describe('crickapp App', () => {
  let page: CrickappPage;

  beforeEach(() => {
    page = new CrickappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { DIPage } from './app.po';

describe('di App', function() {
  let page: DIPage;

  beforeEach(() => {
    page = new DIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

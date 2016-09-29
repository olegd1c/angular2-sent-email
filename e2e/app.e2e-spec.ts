import { Angular2SentEmailPage } from './app.po';

describe('angular2-sent-email App', function() {
  let page: Angular2SentEmailPage;

  beforeEach(() => {
    page = new Angular2SentEmailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

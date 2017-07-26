import { AmkTestPage } from './app.po';

describe('amk-test App', () => {
  let page: AmkTestPage;

  beforeEach(() => {
    page = new AmkTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

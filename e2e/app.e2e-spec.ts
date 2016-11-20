import { HW3FormsPage } from './app.po';

describe('hw3-forms App', function() {
  let page: HW3FormsPage;

  beforeEach(() => {
    page = new HW3FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

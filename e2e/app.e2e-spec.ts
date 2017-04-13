import { AngularTraining13DecPage } from './app.po';

describe('angular-training-13-dec App', function() {
  let page: AngularTraining13DecPage;

  beforeEach(() => {
    page = new AngularTraining13DecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

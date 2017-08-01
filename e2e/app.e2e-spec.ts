import { StudentRegistrationSystemPage } from './app.po';

describe('student-registration-system App', () => {
  let page: StudentRegistrationSystemPage;

  beforeEach(() => {
    page = new StudentRegistrationSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

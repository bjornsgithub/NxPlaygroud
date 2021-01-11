describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&knob-primary=false&knob-backgroundColor&knob-size=medium&knob-label=Button'));

  it('should render the component', () => {
    cy.get('nxplayground-button').should('exist');
  });
});

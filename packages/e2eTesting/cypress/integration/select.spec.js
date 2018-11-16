const runTests = versionNumber => {
  beforeEach(() => {
    const version = Cypress.env('version') || versionNumber;
    cy.visit(`/react_${version}.html`);
  });

  it('Opens select, shows options, then closes select', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    cy.get('#basicSelectId')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith('opened');
      });
    cy.get('div[role="option"]')
      .should('have.length', 3)
      .and('contain', 'Red')
      .and('contain', 'Blue')
      .and('contain', 'Green');

    cy.get('#basicSelectId')
      .click()
      .then(() => {
        expect(alertStub.getCall(1)).to.be.calledWith('closed');
      });
    cy.get('div[role="option"]').should('have.length', 0);
  });

  it('Changes the select value', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    cy.get('#changeSelectId').click();
    cy.get('div[role="option"]:first')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith('changed');
      });
    cy.get('input[name="change"]').should('have.value', 'red');
  });
};

describe('React 15 Select', () => {
  runTests('15');
});

describe('React 16.0 Select', () => {
  runTests('16_0');
});

describe('React 16.5 Select', () => {
  runTests('16_5');
});
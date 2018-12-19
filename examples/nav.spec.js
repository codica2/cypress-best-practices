import { inputFields } from '../constants/BuyingProfile';

describe('Navigation', () => {
    
  it(`unfinished steps`, () => {
    cy.visit('/');
    cy.get('.navigation-controls-wrapper')
      .contains('Continue')
      .click();
    
    cy.get('.ant-steps')
      .children()
      .eq(i)
      .should('have.class', 'ant-steps-item-error');
  });

});

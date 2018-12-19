import faker from 'faker';

import {
  transactionType,
  checkboxFields,
  euroFields
} from '../constants/Profile';

describe("Byuing profile", () => {
  before(() => {
    cy.visit('/');
  });

  context('Currency fields', () => {
    euroFields.forEach(field => {
      const { name, fake, required, validation } = field;
      const text = faker.fake(fake);
  
      it(`Test ${name} euro input`, () => {
        cy.get(`[data-cy="Profile.${name}"]`).as('input')
          .type(text)
          .should('have.value', `€ ${text.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
          .clear();

        cy.get('.ant-form-explain')
          .contains(required)
          .should('exist')
          .and('be.visible');
        
        cy.get('@input')
          .type(text);
      });
    });
  })

  context('Checkboxes', () => {
    it('Test transactionType checkbox group', () => {

      cy.get('[type=checkbox]')
        .check(transactionType)
        .should('be.checked')
        .uncheck()
        .should('not.be.checked');
  
      cy.get('.ant-form-explain')
        .contains('At least one transaction type is required!')
        .should('exist');
  
      cy.get('[type=checkbox]')
        .check(transactionType[0])
        .should('be.checked');
    });

    checkboxFields.forEach(checkbox => {
      it(`Test ${checkbox} checkbox`, () => {

        cy.get(`[data-cy="Profile.${checkbox}"]`)
          .check()
          .should('be.checked');
      });
    });
  })

});

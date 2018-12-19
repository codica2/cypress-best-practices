/// <reference types="Cypress" />

const checkedNode = 'ant-tree-treenode-checkbox-checked';
const indeterminate = 'ant-tree-treenode-checkbox-indeterminate';

describe('Locations', () => {
  before(() => {
    cy.visit('/locations');
  });

  it('Checks Austria', () => {

    cy.get('[role="treeitem"]')
      .contains('span', 'Western Europe')
      .closest('li')
      .find('.ant-tree-switcher')
      .click()
    
    cy.get('[role="treeitem"]')
      .contains('span', 'Austria')
      .as('Austria')
      .click()

      .closest('li')
      .should('have.class', checkedNode)
  });

  it('Have required error message', () => {
    cy.get('.ant-tree-checkbox-checked')
      .click();

    cy.contains('Please select at least one region!')
      .should('be.visible');
  })
});
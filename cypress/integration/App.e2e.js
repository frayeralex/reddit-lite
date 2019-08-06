describe('App E2E', () => {
  beforeEach(function () {
    cy.server()
    cy.route('https://www.reddit.com/r/*').as('getPosts')
  });

  it('should have a header with', () => {
    cy.visit('/');

    cy.get('.TopBar .title')
      .should('have.text', 'reactjs');
  });

  it('should visit on FrontPage', function () {
    cy.visit('/');

    cy.get('.FrontPage').should('exist');
  });

  it('should have search form and trigger serach when press enter', function () {
    cy.get('.search-container input')
      .should('have.value', 'reactjs')
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}')
      .type('news{enter}');
  });

  it('should show post List', function () {
    cy.visit('/');
    cy.wait('@getPosts');

    cy.get('.post-list').should('exist');
    cy.get('.Post').should('exist');
    cy.get('.Post .header-container').should('exist');
    cy.get('.Post .middle-container').should('exist');
    cy.get('.Post .footer-container').should('exist');
  });
});

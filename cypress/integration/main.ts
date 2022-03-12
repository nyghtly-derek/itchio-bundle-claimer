const secret_path = './secret.json'

describe('itchio-clicker', () => {
  it('downloads everything', () => {
    cy.visit('/login')
    cy.readFile(secret_path).then(($json) => {
      cy.get('[name=username]').type($json.username)
      cy.get('[name=password]').type($json.password)
      cy.task('log', `log in as ${$json.username}`)
    })
    cy.contains('button', 'Log in').click()
    cy.visit('/my-purchases/bundles')
    cy.contains('a', Cypress.env('bundleName')).click()
    cy.get('.pager_label a').eq(0).invoke('text').then(($page_count) => {
      for (let i = 2; i < Number($page_count); i++) {
        cy.task('log', `page ${i - 1} of ${$page_count}`)
        claim_all()
        cy.get('a.next_page').eq(0).click()
      }
    })
  })

  function claim_all() {
    cy.get('body').then(($body) => {
      if ($body.find('button[value=claim]').length > 0) {
        cy.get('button[value=claim]').eq(0).click()
        cy.go('back')
        claim_all()
      }
    })
  }
})

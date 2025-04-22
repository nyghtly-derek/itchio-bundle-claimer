import { TOTP } from 'totp-generator'

const secret_path = './secret.json'

describe('itch.io bundle claimer', () => {
  it('claims everything', () => {
    cy.visit('/login')
    cy.readFile(secret_path).then(($json) => {
      cy.get('[name=username]').type($json.username)
      cy.get('[name=password]').type($json.password)
      cy.log(`log in as ${$json.username}`)
    })
    cy.contains('button', 'Log in').click()
    cy.get('h2').then(($h2) => {
      if ($h2.text() === 'Two-factor authentication') {
        cy.readFile(secret_path).then(($json) => {
          const { otp } = TOTP.generate($json.totp)
          cy.get('[name=code]').type(otp)
        })
        cy.contains('button', 'Log in').click()
      }
    })
    cy.visit('/my-purchases/bundles')
    cy.contains('a', Cypress.env('bundleName')).click()
    cy.get('.pager_label a')
      .eq(0)
      .invoke('text')
      .then(($page_count) => {
        cy.log(`page 1 of ${$page_count}`)
        claim_all()
        for (let i = 1; i < Number($page_count); i++) {
          cy.get('a.next_page').eq(0).click()
          cy.log(`page ${i + 1} of ${$page_count}`)
          claim_all()
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

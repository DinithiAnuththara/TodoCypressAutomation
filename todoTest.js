describe('todoTestSuite', () =>
 {
  it('visit Todos',() => {
    cy.visit('http://todomvc.com/examples/react/#/active')
  })

  it('can add new todo items', () => {
    const newItem = 'Go to school'
    cy.get('[class=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
    .should('have.text', newItem)
  })

  it('can mark an item as completed', () => {
    cy.contains('Go to school')
     .parent()
     .find('input[type=checkbox]')
     .check()
 })
 
 it('can filter for uncompleted tasks', () => {
   cy.contains('Active').click()
   cy.contains('Go to school').should('not.exist')
 })

 it('can filter for completed tasks', () => {
   cy.contains('Completed').click()
   cy.get('.todo-list li')
     .should('have.text', 'Go to school')
 })

 it('can delete all completed tasks', () => {
   cy.contains('Clear completed').click()
 })
}) 


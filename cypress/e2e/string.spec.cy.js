describe("страница с алгоритмом строки работает корректно", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/recursion");
  });
  it("копка добавления недоступна при пустом инпуте", function () {
    if (cy.get("input").and("have.value", "")) {
      cy.get("[class*=text_type_button]").should("be.disabled");
    }
  });

  it('должна корректно поворачиваться строка', () => {  
    cy.get('input').type('heo');
    cy.get('button').contains('Развернуть').click();

    cy.get('[class*=circle_content]').first().as('firstElement');
    cy.get('[class*=circle_content]').eq(1).as('secondElement');
    cy.get('[class*=circle_content]').last().as('thirdElement');
    cy.get('@firstElement').contains('h');
    cy.get('@secondElement').contains('e');
    cy.get('@thirdElement').contains('o');
    cy.get('@firstElement').children('[class*=circle_changing]');
    cy.get('@thirdElement').children('[class*=circle_changing]');
    cy.get('@secondElement').children('[class*=circle_changing]');
    cy.get('@firstElement').children('[class*=circle_modified]');
    cy.get('@secondElement').children('[class*=circle_modified]');
    cy.get('@thirdElement').children('[class*=circle_modified]');
    cy.get('@firstElement').contains('o');
    cy.get('@thirdElement').contains('h');
});
});

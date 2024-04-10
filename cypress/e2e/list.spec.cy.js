describe("страница с алгоритмом связного списка работает корректно", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/list");
  });
  it("копка добавления недоступна при пустом инпуте", function () {
    if (cy.get("input").and("have.value", "")) {
      cy.contains("Добавить в head").should("be.disabled");
      cy.contains("Добавить в tail").should("be.disabled");
      cy.contains("Добавить по индексу").should("be.disabled");
    }
  });
  it("should add to head the new element correctly", () => {
    // cy.visit('http://localhost:3000/list');

    cy.get('input[name="MyInput"]').type("19");
    cy.get("button").contains("Добавить в head").click();

    cy.get("[class*=circle_content]").first().as("firstElement");
    cy.get("@firstElement").contains("19");
    cy.get("@firstElement").contains("top");
    cy.get("@firstElement").contains("0");
    cy.get("@firstElement").children("[class*=circle_modified]");
    cy.get("@firstElement").children("[class*=circle_default]");

    cy.get("[class*=circle_content]")
      .should("have.length", 5)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("19");
          cy.wrap($el).contains("top");
          cy.wrap($el).contains("0");
        }
        if (index === 5) {
          cy.wrap($el).contains("4");
          cy.wrap($el).contains("tail");
        }
      });
  });
  it("should add to tail the new element correctly", () => {
    // cy.visit('http://localhost:3000/list');

    cy.get('input[name="MyInput"]').type("19");
    cy.get("button").contains("Добавить в tail").click();

    cy.get("[class*=circle_content]").last().as("fifthElement");
    cy.get("@fifthElement").contains("19");
    cy.get("@fifthElement").contains("tail");
    cy.get("@fifthElement").contains("4");
    cy.get("@fifthElement").children("[class*=circle_modified]");
    cy.get("@fifthElement").children("[class*=circle_default]");

    cy.get("[class*=circle_content]")
      .should("have.length", 5)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("top");
          cy.wrap($el).contains("0");
        }
        if (index === 5) {
          cy.wrap($el).contains("19");
          cy.wrap($el).contains("4");
          cy.wrap($el).contains("tail");
        }
      });
  });
  it("should add by index the new element correctly", () => {
    // cy.visit('http://localhost:3000/list');

    cy.get('input[name="MyInput"]').type("19");
    cy.get('input[name="MyIndex"]').type("2");
    cy.get("button").contains("Добавить по индексу").click();

    cy.get("[class*=circle_content]")
      .eq(0)
      .children("[class*=circle_changing]");
    cy.get("[class*=circle_content]")
      .eq(1)
      .children("[class*=circle_changing]");
    cy.get("[class*=circle_content]")
      .eq(2)
      .children("[class*=circle_changing]");
    cy.get("[class*=circle_content]")
      .eq(2)
      .children("[class*=circle_modified]");
    cy.get("[class*=circle_content]").contains("19");
    cy.get("[class*=circle_content]").contains("2");
    cy.get("[class*=circle_content]")
      .should("have.length", 5)
      .each(($el, index) => {
        if (index === 2) {
          cy.wrap($el).contains("19");
          cy.wrap($el).contains("2");
        }
      });
  });
   it("should delete from head an element correctly", () => {
    // cy.visit('http://localhost:3000/list');


    cy.get("button").contains("Удалить из head").click();

    cy.get("[class*=circle_content]").first().as("firstElement");
    cy.get("@firstElement").should('have.value', '');
    cy.get("@firstElement").invoke("remove");

    cy.get("[class*=circle_content]")
      .should("have.length", 3)
  });

  it("should delete from tail an element correctly", () => {
    // cy.visit('http://localhost:3000/list');

    cy.get("button").contains("Удалить из tail").click();

    cy.get("[class*=circle_content]").eq(3).as("lastElement");
    cy.get("@lastElement").should('have.value', '');
    cy.get("@lastElement").invoke("remove");
    
    cy.get("[class*=circle_content]")
      .should("have.length", 3)
  });

  it("should delete by index an element correctly", () => {
    // cy.visit('http://localhost:3000/list');
    cy.get('input[name="MyIndex"]').type("2");
    cy.get("button").contains("Удалить по индексу").click();

    cy.get("[class*=circle_content]").eq(2).as("element");
    cy.get("@element").should('have.value', '');
    cy.get("@element").invoke("remove");
    
    cy.get("[class*=circle_content]")
      .should("have.length", 3)
  });
});

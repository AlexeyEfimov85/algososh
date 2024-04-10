describe("страница с очередью работает корректно", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/queue");
  });
  it("копка добавления недоступна при пустом инпуте", function () {
    if (cy.get("input").and("have.value", "")) {
      cy.get("[type*=submit]").should("be.disabled");
    }
  });

  it("should add the new element correctly", () => {
    // cy.visit('http://localhost:3000/queue');

    cy.get("input").type("19");
    cy.get("button").contains("Добавить").click();

    cy.get("[class*=circle_content]").first().as("firstElement");
    cy.get("@firstElement").contains("19");
    cy.get("@firstElement").contains("top");
    cy.get("@firstElement").contains("tail");
    cy.get("@firstElement").children("[class*=circle_changing]");
    cy.get("@firstElement").children("[class*=circle_default]");

    cy.get("input").type("12");
    cy.get("button").contains("Добавить").click();

    cy.get("[class*=circle_content]")
      .should("have.length", 7)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("19");
          cy.wrap($el).contains("top");
        }
        if (index === 1) {
          cy.wrap($el).contains("12");
          cy.wrap($el).contains("tail");
        }
      });
  });

  it("should delete elements correctly", () => {
    // cy.visit('http://localhost:3000/queue');

    cy.get("input").type("19");
    cy.get("button").contains("Добавить").click();

    cy.get("[class*=circle_content]").first().as("firstElement");
    cy.get("@firstElement").contains("19");
    cy.get("@firstElement").contains("top");
    cy.get("@firstElement").contains("tail");

    cy.get("input").type("12");
    cy.get("button").contains("Добавить").click();

    cy.get("[class*=circle_content]")
      .should("have.length", 7)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("19");
          cy.wrap($el).contains("top");
        }
        if (index === 1) {
          cy.wrap($el).contains("12");
          cy.wrap($el).contains("tail");
        }
      });

    cy.get("button").contains("Удалить").click();
    cy.get("@firstElement").children("[class*=circle_changing]");
    cy.get("@firstElement").children("[class*=circle_default]");
    cy.get("[class*=circle_content]")
      .should("have.length", 7)
      .each(($el, index) => {
        if (index === 1) {
          cy.wrap($el).contains("12");
          cy.wrap($el).contains("top");
          cy.wrap($el).contains("tail");
        }
      });
  });
  it("should clear elements correctly", () => {
    // cy.visit('http://localhost:3000/queue');

    cy.get("input").type("19");
    cy.get("button").contains("Добавить").click();

    cy.get("[class*=circle_content]").first().as("firstElement");
    cy.get("@firstElement").contains("19");
    cy.get("@firstElement").contains("top");
    cy.get("@firstElement").contains("tail");

    cy.get("input").type("12");
    cy.get("button").contains("Добавить").click();

    cy.get("[class*=circle_content]")
      .should("have.length", 7)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("19");
          cy.wrap($el).contains("top");
        }
        if (index === 1) {
          cy.wrap($el).contains("12");
          cy.wrap($el).contains("tail");
        }
      });

    cy.get("button").contains("Очистить").click();
    cy.get("[class*=circle_content]")
      .should("have.length", 7)
      .each(($el, index) => {
          cy.wrap($el)
            .children("[class*=circle_circle]")
            .children("[class*=circle_letter]")
            .should('have.value', '');
      });
  });
});

import { circle } from "./constants";

describe("страница со стеком работает корректно", function () {
  beforeEach(function () {
    cy.visit("/stack");
  });
  it("копка добавления недоступна при пустом инпуте", function () {
    if (cy.get("input").and("have.value", "")) {
      cy.get("[type*=submit]").should("be.disabled");
    }
  });

  it("алгоритм корректно добавляет числа в стек", () => {
    cy.get("input").type("3");
    cy.get("button").contains("Добавить").click();

    cy.get(circle).first().as("firstElement");
    cy.get("@firstElement").contains("3");
    cy.get("@firstElement").children("[class*=circle_changing]");
    cy.get("@firstElement").children("[class*=circle_default]");
    cy.get("@firstElement").contains("top");
    cy.get("@firstElement").contains("0");

    cy.get("input").type("5");
    cy.get("button").contains("Добавить").click();
    cy.get(circle).eq(1).as("secondElement");
    cy.get("@secondElement").children("[class*=circle_changing]");
    cy.get("@secondElement").children("[class*=circle_default]");

    cy.get(circle)
      .should("have.length", 2)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("3");
          cy.wrap($el).contains("0");
        }
        if (index === 1) {
          cy.wrap($el).contains("5");
          cy.get("@secondElement").contains("top");
          cy.get("@secondElement").contains("1");
        }
      });
  });

  it("алгоритм корректно удаляет элементы из стека", () => {
    cy.get("input").type("3");
    cy.get("button").contains("Добавить").click();
    cy.get("input").type("5");
    cy.get("button").contains("Добавить").click();
    cy.get(circle)
      .should("have.length", 2)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("3");
          cy.wrap($el).contains("0");
        }
        if (index === 1) {
          cy.wrap($el).contains("5");
          cy.wrap($el).contains("top");
          cy.wrap($el).contains("1");
        }
      });
    cy.get(circle).eq(1).as("secondElement");
    cy.get("@secondElement").children("[class*=circle_changing]");
    cy.get("button").contains("Удалить").click();
    cy.get("@secondElement").children("[class*=circle_changing]");
    cy.get(circle)
      .should("have.length", 1)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("3");
          cy.wrap($el).contains("0");
          cy.wrap($el).contains("top");
        }
        if (index === 1) {
          cy.wrap($el).invoke("remove");
        }
      });
  });
  it("алгоритм корректно удаляет все элементы из стека", () => {
    cy.get("input").type("3");
    cy.get("button").contains("Добавить").click();
    cy.get("input").type("5");
    cy.get("button").contains("Добавить").click();
    cy.get(circle)
      .should("have.length", 2)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).contains("3");
          cy.wrap($el).contains("0");
        }
        if (index === 1) {
          cy.wrap($el).contains("5");
          cy.wrap($el).contains("top");
          cy.wrap($el).contains("1");
        }
      });

    cy.get("button").contains("Очистить").click();
    cy.get(circle)
      .should("have.length", 0)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).invoke("remove");
        }
        if (index === 1) {
          cy.wrap($el).invoke("remove");
        }
      });
  });
});

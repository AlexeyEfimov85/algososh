describe("страница с алгоритмом фибоначчи работает корректно", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/fibonacci");
  });
  it("копка добавления недоступна при пустом инпуте", function () {
    if (cy.get("input").and("have.value", "")) {
      cy.get("[class*=text_type_button]").should("be.disabled");
    }
  });

  it("алгоритм корректно генерирует числа", () => {
    cy.get("input").type("3");
    cy.get("button").contains("Развернуть").click();

    cy.get("[class*=circle_content]").first().as("firstElement");
    cy.get("[class*=circle_content]").eq(1).as("secondElement");
    cy.get("[class*=circle_content]").last().as("thirdElement");
    cy.get("@firstElement").contains("1");
    cy.get("@secondElement").contains("1");
    cy.get("@thirdElement").contains("2");
    cy.get("@firstElement").children("[class*=circle_default]");
    cy.get("@secondElement").children("[class*=circle_default]");
    cy.get("@thirdElement").children("[class*=circle_default]");
  });
});

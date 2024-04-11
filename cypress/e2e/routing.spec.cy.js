describe('роутинг в приложении работает корректно', function() {
    beforeEach(function() {
      cy.visit('/');
    });
  
/*     it('открывает главную при клике к оглавлению', function() {
        cy.get('a[href*="/"]').click({ multiple: true });
        cy.contains('Вдохновлено школами, в которых не учили алгоритмам');
    }); */
  
    it('открывает страницу со строкой', function() {
        cy.get('a[href*="/recursion"]').click();
        cy.contains('Строка');
    });

    it('открывает страницу с фибоначчи', function() {
        cy.get('a[href*="/fibonacci"]').click();
        cy.contains('Фибоначчи');
    });
    
    it('открывает страницу с сортировкой массива', function() {
        cy.get('a[href*="/sorting"]').click();
        cy.contains('Сортировка');
    });

    it('открывает страницу со стеком', function() {
        cy.get('a[href*="/stack"]').click();
        cy.contains('Стек');
    });

    it('открывает страницу с очередью', function() {
        cy.get('a[href*="/queue"]').click();
        cy.contains('Очередь');
    });

    it('открывает страницу со связным списком', function() {
        cy.get('a[href*="/list"]').click();
        cy.contains('Связный');
    });
  
  }); 
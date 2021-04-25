describe('Quiz Test', () => {
    it('Takes the quiz four times and tests all content and scenarios', () => {
      cy.visit('http://127.0.0.1:5500/index.html');

      cy.contains('BICEP QUIZ GAME').click();
      cy.url().should('include', '/quiz.html');

      // Wait for page to fully load
      cy.wait(500);

      // Check content
      cy.contains('Quiz');
      cy.contains('Question 1 of 10');
      cy.contains('Quiz Score: 0');
      cy.contains('Test your knowledge on BICEP with a quiz, there are ten questions in total, good luck!');
      cy.contains('Timer(MM:SS)');
      cy.contains('Submit Answer');

      // Take quiz selecting b for every question
      cy.get("#progress-bar").should("have.text", "10%");
      cy.get("#test_status").should("have.text", "Question 1 of 10");
      cy.get('#submit_answer').click();
      cy.get('#error').should("have.text", "Please select one of the options");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "20%");
      cy.get("#test_status").should("have.text", "Question 2 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "30%");
      cy.get("#test_status").should("have.text", "Question 3 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "40%");
      cy.get("#test_status").should("have.text", "Question 4 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "50%");
      cy.get("#test_status").should("have.text", "Question 5 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "60%");
      cy.get("#test_status").should("have.text", "Question 6 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "70%");
      cy.get("#test_status").should("have.text", "Question 7 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "80%");
      cy.get("#test_status").should("have.text", "Question 8 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "90%");
      cy.get("#test_status").should("have.text", "Question 9 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#test_status").should("have.text", "Question 10 of 10");
      cy.get('[type="radio"]').check("b");
      cy.get('#submit_answer').click();

      // Check percentage and score/top score
      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#overall_result").should("have.text", "You got 2/10 correct");
      cy.get("#current_score").should("have.text", "Quiz Score: 2");

      // Take quiz selecting a for every question
      cy.visit('http://127.0.0.1:5500/quiz.html');
      cy.wait(500);

      cy.get("#progress-bar").should("have.text", "10%");
      cy.get("#test_status").should("have.text", "Question 1 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "20%");
      cy.get("#test_status").should("have.text", "Question 2 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "30%");
      cy.get("#test_status").should("have.text", "Question 3 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "40%");
      cy.get("#test_status").should("have.text", "Question 4 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "50%");
      cy.get("#test_status").should("have.text", "Question 5 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "60%");
      cy.get("#test_status").should("have.text", "Question 6 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "70%");
      cy.get("#test_status").should("have.text", "Question 7 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "80%");
      cy.get("#test_status").should("have.text", "Question 8 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "90%");
      cy.get("#test_status").should("have.text", "Question 9 of 10");
      cy.get('[type="radio"]').check("a");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "100%");
      cy.get('[type="radio"]').check("a");
      cy.get('[type="radio"]').first().check();
      cy.get('#submit_answer').click();

      // Check percentage and score/top score
      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#overall_result").should("have.text", "You got 3/10 correct");
      cy.get("#current_score").should("have.text", "Quiz Score: 3");
      cy.get("#top_score").should("have.text", "Top Score: 3");

      // Take quiz selecting c for every question
      cy.visit('http://127.0.0.1:5500/quiz.html');
      cy.wait(500);

      cy.get("#progress-bar").should("have.text", "10%");
      cy.get("#test_status").should("have.text", "Question 1 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "20%");
      cy.get("#test_status").should("have.text", "Question 2 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "30%");
      cy.get("#test_status").should("have.text", "Question 3 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "40%");
      cy.get("#test_status").should("have.text", "Question 4 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "50%");
      cy.get("#test_status").should("have.text", "Question 5 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "60%");
      cy.get("#test_status").should("have.text", "Question 6 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "70%");
      cy.get("#test_status").should("have.text", "Question 7 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "80%");
      cy.get("#test_status").should("have.text", "Question 8 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "90%");
      cy.get("#test_status").should("have.text", "Question 9 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#test_status").should("have.text", "Question 10 of 10");
      cy.get('[type="radio"]').check("c");
      cy.get('#submit_answer').click();

      // Check percentage and score/top score
      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#overall_result").should("have.text", "You got 3/10 correct");
      cy.get("#current_score").should("have.text", "Quiz Score: 3");
      cy.get("#top_score").should("have.text", "Top Score: 3");

      // Taek quiz, but answer d to all questions
      cy.visit('http://127.0.0.1:5500/quiz.html');
      cy.wait(500);

      cy.get("#progress-bar").should("have.text", "10%");
      cy.get("#test_status").should("have.text", "Question 1 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "20%");
      cy.get("#test_status").should("have.text", "Question 2 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "30%");
      cy.get("#test_status").should("have.text", "Question 3 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "40%");
      cy.get("#test_status").should("have.text", "Question 4 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "50%");
      cy.get("#test_status").should("have.text", "Question 5 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "60%");
      cy.get("#test_status").should("have.text", "Question 6 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "70%");
      cy.get("#test_status").should("have.text", "Question 7 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "80%");
      cy.get("#test_status").should("have.text", "Question 8 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "90%");
      cy.get("#test_status").should("have.text", "Question 9 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#test_status").should("have.text", "Question 10 of 10");
      cy.get('[type="radio"]').check("d");
      cy.get('#submit_answer').click();

      // Check percentage and score/top score
      cy.get("#progress-bar").should("have.text", "100%");
      cy.get("#overall_result").should("have.text", "You got 2/10 correct");
      cy.get("#current_score").should("have.text", "Quiz Score: 2");
      cy.get("#top_score").should("have.text", "Top Score: 3");
    })
})
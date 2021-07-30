const question = document.querySelectorAll(".accordion__question");

console.log("start");

question.forEach((question) => {
    question.addEventListener("click", () => {

        question.classList.toggle("accordion__question_active");
        
        question.nextElementSibling.classList.toggle("accordion__answer_active");
        
    });
  });
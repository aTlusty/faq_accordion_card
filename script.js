const questions = document.querySelectorAll(".question"); 
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

questions.forEach((question, index) => {
    question.addEventListener("click",() => {
        question.classList.toggle("bold");
        answers[index].classList.toggle("hidden");
        arrows[index].classList.toggle("rotate");
    })
})

arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        arrow.classList.toggle("active");
        questions[index].classList.toggle("bold");
        answers[index].classList.toggle("hidden");
        arrows[index].classList.toggle("rotate");
    })
})

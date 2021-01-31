const correctAnswers = ["B","B","B","B"];
const form = document.querySelector(".quiz-form")
const scoreBoard = document.querySelector(".result")
const scoreShow = document.querySelector("#scoreshow")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;
    let answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    
    answers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    scrollTo(0,0);
    
    scoreBoard.classList.remove("d-none");
    
    //score animation
    let output = 0;
    const timer = setInterval(() => {
        output++
        scoreBoard.querySelector("span").textContent = `${output}%`;
        if(output === score){
            clearInterval(timer)
        }
    }, 5)
});






function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  };


let answer;

document.querySelector("#new-game").addEventListener('click', function(){
    const number1 =  getRandomIntInclusive(0, 10);
    const number2 =  getRandomIntInclusive(0, 10);
    console.log(number1, number2);;

    let question = `What is ${number1} + ${number2}`;

    answer = number1 + number2;

    const questionText = document.querySelector("#question-text");
    questionText.innerText = question;

})


const form = document.querySelector("#answer-form")
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);

    let formInput = document.querySelector("#answer-input");
    const numberInput = Number(formInput.value);
    
    console.log(numberInput);
    
    
    const correct = document.querySelector("#response")
    if (numberInput === answer){ 
        response.classList.remove("response");
        response.classList.remove("bad")
        response.classList.add("good");
        
        correct.innerText = "Correct";
    }else{ 
        response.classList.remove("response")  ;
        response.classList.remove("good");
        response.classList.add("bad");
        
        correct.innerText = "InCorrect";
    };

});
















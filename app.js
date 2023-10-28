document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");
    //select form

    //when the submit button is pressed --> what happens? 

    //define constants 

    form.addEventListener("submit", function(event){
        event.preventDefault();
        //prevent page from refreshing

        const sex = document.getElementById("gender").value;
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const age = parseFloat(document.getElementById("age").value);

        //calculate BMR

        const displayBmr = document.getElementById("display");
        const finalBmr = calculateBmr(sex, weight, height, age);
        displayBmr.textContent = "Your BMR is: " + finalBmr.toFixed(2) + " Calories";

    });


    function calculateBmr(sex, weight, height, age) {
        if (sex === 'male') {
            return (66 + (6.23 * weight) + (12.7 * height) - (6.8 * age));
        } else {
            return (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
        }
    }

})





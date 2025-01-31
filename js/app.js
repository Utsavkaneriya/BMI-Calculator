const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
console.log(height.value);

const age = document.querySelector("#age");
const genderMale = document.querySelector("#male");
const genderFemale = document.querySelector("#female");
console.log(genderFemale);
const result = document.querySelector("#result");
const calculateButton = document.querySelector("#calculate");
const clear = document.querySelector("#clear");

calculateButton.addEventListener("click", () => {
    //   console.log("hello world!");
    const bmi = Number(weight.value) / (Number(height.value) / 100) ** 2;
    const roundedbmi = Math.round(bmi * 100) / 100;
    console.log(roundedbmi);
    let feedback = "";
    if (roundedbmi < 18.5) {
        feedback = `Underweight: BMI ${roundedbmi} 🟩 `;
    } else if (roundedbmi >= 18.5 && roundedbmi <= 24.9) {
        feedback = `Normal weight : BMI ${roundedbmi}  🟢`;
    } else if (roundedbmi >= 25 && roundedbmi <= 29.9) {
        feedback = `Overweight : BMI ${roundedbmi}  🟡`;
    } else if (roundedbmi >= 30) {
        feedback = `Obese: BMI ${roundedbmi} 🔴`;
    } else {
        feedback = "invalid input. Please check your height and weight";
    }
    result.innerHTML = feedback;
});

clear.addEventListener("click", () => {
    //   console.log("gwe");
    genderMale.checked = true;
    genderFemale.checked = false;
    age.value = 2;
    height.value = 180;
    weight.value = 65;
    result.innerHTML = "Result";
});
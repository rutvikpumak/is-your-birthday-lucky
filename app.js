const dateOfBirth = document.querySelector("#birth-date")
const luckyNo = document.querySelector("#lucky-no");
const submitBtn = document.querySelector(".submit");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");
const errorMsg = document.querySelector(".error");

submitBtn.addEventListener("click", () => {
    errorMsg.style.display = ""

    if (!parseInt(luckyNo.value) && dateOfBirth.value === "") {
        errorMsg.innerText = "Input not provided";
    } else if (!parseInt(luckyNo.value)) {
        errorMsg.innerText = "Please enter your lucky number"
    } else if (dateOfBirth.value === "") {
        errorMsg.innerText = "Please enter your Date of Birth"
    } else if(parseInt(luckyNo.value) < 1){
        errorMsg.innerText = "Lucky number should be greater than 0";
        luckyNo.value = "";
    }else {
        errorMsg.innerText = ""
        const date = dateOfBirth.value.replaceAll('-', '').split('');
        let sumOfDates = 0;

        for (let no of date) {
            sumOfDates += parseInt(no);
        }
        if (Math.floor(sumOfDates % luckyNo.value) === 0) {
            output.innerText = `${luckyNo.value} is Lucky Number ❤️`;

        } else {
            output.innerText =  `${luckyNo.value} is not that Lucky 😶`

        }
    }
})

resetBtn.addEventListener("click", () => {
    luckyNo.value = "";
    dateOfBirth.value = ""
    output.innerText = ""
    errorMsg.innerText = ""
})
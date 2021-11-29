const dateOfBirth = document.querySelector("#birth-date")
const luckyNo =  document.querySelector("#lucky-no");
const submitBtn = document.querySelector(".submit");
const output = document.querySelector(".output");

submitBtn.addEventListener("click",()=>{
    const date= dateOfBirth.value.replaceAll('-','').split('');
    let sumOfDates =0;

    for(let no of date){
        sumOfDates+= parseInt(no);
    }

    if(Math.floor(sumOfDates%luckyNo.value) === 0){
        output.innerText = "Lucky"
    }else{
        output.innerText = "Not Lucky"

    }
})
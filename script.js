document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.icon').addEventListener('click', function(event){
        event.preventDefault();
        inputValidation();
        ageCal();
    });
});

function inputValidation(){
    const inputs = document.querySelectorAll('.input');

    inputs.forEach(input => {
        const error = input.nextElementSibling;
        const name = input.previousElementSibling;

        if (input.value.trim() === '') {
            name.classList.add('show');
            error.classList.add('show');
            input.classList.add('show');
        } else {
            name.classList.remove('show');
            error.classList.remove('show');
            input.classList.remove('show');
        }
    });
}

function ageCal(){
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    let isValid = true;

    if (!day){
        document.getElementById('day-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('day-error').style.display = 'none';
    }

    if (!month){
        document.getElementById('month-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('month-error').style.display = 'none';
    }

    if (!year){
        document.getElementById('year-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('year-error').style.display = 'none';
    }

    if (!isValid) return;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.querySelector('.year-result').textContent = ageYears;
    document.querySelector('.month-result').textContent = ageMonths;
    document.querySelector('.day-result').textContent = ageDays;
}

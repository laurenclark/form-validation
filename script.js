const form = document.getElementById('form');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isValidEmail(email) {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase());
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        const trimmedInput = input.value.trim();
        if (trimmedInput === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return `${input.name.charAt(0).toUpperCase()}${input.name.slice(1)}`;
}

/*--------------------------------------------------------------
## Event Handlers
--------------------------------------------------------------*/
form.addEventListener('submit', function handleSubmit(e) {
    e.preventDefault();
    let formArray = [];
    for (let field of form.elements) {
        formArray.push(field);
    }
    checkRequired(formArray);
});

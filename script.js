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

function checkEmail(input) {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (check.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
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

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(inputPassword, inputCheck) {
    if (inputPassword.value !== inputCheck.value) {
        showError(inputCheck, "Passwords don't match");
    }
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
    checkLength(form.username, 3, 15);
    checkLength(form.password, 6, 25);
    checkLength(form.password2, 6, 25);
    checkEmail(form.email);
    checkPasswordsMatch(form.password, form.password2);
});

form.addEventListener('focusin', function handleFocus(e) {
    if (event.target.tagName == 'INPUT') {
        event.target.parentElement.classList.add('active');
        console.log('hi');
    }
});

form.addEventListener('focusout', function handleBlur(e) {
    if (event.target.tagName === 'INPUT') {
        if (event.target.value === '')
            event.target.parentElement.classList.remove('active');
    }
});

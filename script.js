const form = document.getElementById('form');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

function isValidEmail(email) {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase());
}

/*--------------------------------------------------------------
## Event Handlers
--------------------------------------------------------------*/
form.addEventListener('submit', function handleSubmit(e) {
    e.preventDefault();

    if (form.username.value === '') {
        showError(form.username, 'Username is required');
    } else {
        showSuccess(form.username);
    }

    if (form.email.value === '') {
        showError(form.email, 'An email is required');
    } else if (!isValidEmail(form.email.value)) {
        showError(form.email, 'Please enter a valid email');
    } else {
        showSuccess(form.email);
    }

    if (form.password.value === '') {
        showError(form.password, 'Password is required');
    } else {
        showSuccess(form.password);
    }
    if (form.password2.value === '') {
        showError(form.password2, 'Enter your password again');
    } else {
        showSuccess(form.password2);
    }
});

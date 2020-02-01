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
        showError(form.email, 'A valid email is required');
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

const signUpForm = document.querySelector('[name=signup]');

function signUpProcess(event) {
    event.preventDefault();
};

signUpForm.addEventListener('submit', (event) => {
    signUpProcess(event);
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.value);
});
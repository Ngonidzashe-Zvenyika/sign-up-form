// These event listeners check for changes made to the password input fields and compare them to determine whether they are equal;

const newPassword = document.querySelector("#new-password");
const confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener("input", () => {
        if (confirmPassword.value !== newPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
        } else if (confirmPassword.value === newPassword.value) {
            confirmPassword.setCustomValidity("");
        }
});

newPassword.addEventListener("input", () => {
    if (confirmPassword.value !== "") {
    if (confirmPassword.value !== newPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else if (confirmPassword.value === newPassword.value) {
        confirmPassword.setCustomValidity("");
    }
    }
});
// These event listeners check for changes made to the password input fields and compare them to determine whether they are equal;

const newPassword = document.querySelector("#new-password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordWarning = document.querySelector(".password-warning");

confirmPassword.addEventListener("input", () => {
        if (confirmPassword.value !== newPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
            passwordWarning.style.visibility = "visible";
        } else if (confirmPassword.value === newPassword.value) {
            confirmPassword.setCustomValidity("");
            passwordWarning.style.visibility = "hidden";
        }
});

newPassword.addEventListener("input", () => {
    if (confirmPassword !== "") {
    if (confirmPassword.value !== newPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        passwordWarning.style.visibility = "visible";
    } else if (confirmPassword.value === newPassword.value) {
        confirmPassword.setCustomValidity("");
        passwordWarning.style.visibility = "hidden";
    }
    }
});
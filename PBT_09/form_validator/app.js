const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const submitBtn = document.querySelector("#submitBtn");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmError = document.querySelector("#confirmError");
const phoneError = document.querySelector("#phoneError");

const strengthFill = document.querySelector("#strengthFill");

const modal = document.querySelector("#successModal");
const closeModal = document.querySelector("#closeModal");
const userInfo = document.querySelector("#userInfo");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

function checkFormValid() {
    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );
}

nameInput.addEventListener("input", () => {
    const value = nameInput.value.trim();

    if (value.length >= 2 && value.length <= 50) {
        nameError.textContent = "✅ Tên hợp lệ";
        nameError.className = "success";
        validName = true;
    } else {
        nameError.textContent = "❌ Tên phải 2-50 ký tự";
        nameError.className = "error";
        validName = false;
    }

    checkFormValid();
});

emailInput.addEventListener("input", () => {
    const value = emailInput.value.trim();

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
        emailError.textContent = "✅ Email hợp lệ";
        emailError.className = "success";
        validEmail = true;
    } else {
        emailError.textContent = "❌ Email không hợp lệ";
        emailError.className = "error";
        validEmail = false;
    }

    checkFormValid();
});

passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    const weak =
        value.length < 8;

    const medium =
        value.length >= 8 &&
        /[a-zA-Z]/.test(value) &&
        /\d/.test(value);

    const strong =
        value.length >= 8 &&
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value);

    if (weak) {
        passwordError.textContent = "Yếu";
        passwordError.className = "error";

        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";

        validPassword = false;
    } else if (strong) {
        passwordError.textContent = "Mạnh";
        passwordError.className = "success";

        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";

        validPassword = true;
    } else if (medium) {
        passwordError.textContent = "Trung bình";
        passwordError.className = "success";

        strengthFill.style.width = "66%";
        strengthFill.style.background = "orange";

        validPassword = true;
    }

    checkConfirmPassword();
    checkFormValid();
});

function checkConfirmPassword() {
    if (
        confirmInput.value &&
        confirmInput.value === passwordInput.value
    ) {
        confirmError.textContent = "✅ Password khớp";
        confirmError.className = "success";
        validConfirm = true;
    } else {
        confirmError.textContent = "❌ Password không khớp";
        confirmError.className = "error";
        validConfirm = false;
    }

    checkFormValid();
}

confirmInput.addEventListener(
    "input",
    checkConfirmPassword
);

phoneInput.addEventListener("input", () => {
    let numbers =
        phoneInput.value.replace(/\D/g, "");

    numbers = numbers.substring(0, 10);

    let formatted = numbers;

    if (numbers.length > 4) {
        formatted =
            numbers.substring(0, 4) +
            "-" +
            numbers.substring(4);
    }

    if (numbers.length > 7) {
        formatted =
            numbers.substring(0, 4) +
            "-" +
            numbers.substring(4, 7) +
            "-" +
            numbers.substring(7);
    }

    phoneInput.value = formatted;

    if (numbers.length === 10) {
        phoneError.textContent = "✅ Số điện thoại hợp lệ";
        phoneError.className = "success";
        validPhone = true;
    } else {
        phoneError.textContent = "❌ Phải đủ 10 số";
        phoneError.className = "error";
        validPhone = false;
    }

    checkFormValid();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    userInfo.innerHTML = `
        <p><strong>Tên:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Phone:</strong> ${phoneInput.value}</p>
    `;

    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});
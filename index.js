const modal = document.querySelector(".js-modal");
modal.addEventListener("click", closeModal);

const modalContainer = document.querySelector(".js-modal-container");
// Click outside of modal
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

const openModalBtn = document.querySelector(".js-open-modal");
openModalBtn.addEventListener("click", openModal);

const closeModalBtn = document.querySelector(".js-close-modal");
closeModalBtn.addEventListener("click", closeModal);

const genderOption = document.querySelector(".js-gender-option");

const lastNameWarning = document.querySelector(".js-last-name-warning");
const firstNameWarning = document.querySelector(".js-first-name-warning");
const phoneEmailWarning = document.querySelector(".js-phone-email-warning");
const passwordWarning = document.querySelector(".js-password-warning");
const birthdayWarning = document.querySelector(".js-birthday-warning");
const genderWarning = document.querySelector(".js-gender-warning");

const genders = document.querySelectorAll("#gender");

// Get value of input

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", getInput);

function openModal() {
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

function getInput() {
  // Validate name
  const lastName = document.querySelector("#last-name");
  const firstName = document.querySelector("#first-name");
  // validateName(firstName, lastName);
  if (!lastName.value) {
    document.querySelector("#last-name").style.border = "1px solid red";
    document.querySelector(".js-last-name-warning").classList.remove("hidden");
  } else {
    document.querySelector("#last-name").style.border = "1px solid #ccc;";
    document.querySelector(".js-last-name-warning").classList.add("hidden");
  }

  if (!firstName.value) {
    document.querySelector("#first-name").style.border = "1px solid red";
    document.querySelector(".js-first-name-warning").classList.remove("hidden");
  } else {
    document.querySelector("#first-name").style.border = "1px solid #ccc;";
    document.querySelector(".js-first-name-warning").classList.add("hidden");
  }

  // Validate phone and e-mail
  const phoneEmail = document.querySelector("#phone-email");
  validatePhoneEmail(phoneEmail);

  // Validate password
  const password = document.querySelector("#password");
  validatePassword(password);

  // Validate birthday
  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  validateBirthday(day.value, month.value, year.value);

  // Validate gender
  const gender = $("input[type='radio'][name='gender']:checked").val();
  validateGender(gender);
  let callName = document.querySelector("#gender-option");
  console.log(`Danh xung: ${callName.value}`);
  console.log(`Gender: ${gender}`);
  console.log(callName.value == 0);
  if (callName.value == 0 || !callName.value) {
    // Options
    console.log("Chon di");
    document.querySelector("#gender-option").style.border = "1px solid red";
  } else {
    document.querySelector("#gender-option").style.border = "1px solid #ccc";
  }

  // if (!validateBirthday(day.value, month.value, year.value)) {
  //   console.log("ko duoc");
  //   document.querySelector(".js-birthday-warning").classList.remove("hidden");
  // }
  // const gender = document.querySelector('input[name="gender"]:checked').value;
}

function validateName(firstName, lastName) {
  if (!lastName.value) {
    lastName.style.border = "1px solid red";
    document.querySelector(".js-last-name-warning").classList.remove("hidden");
  } else {
    lastName.style.border = "1px solid #ccc;";
    document.querySelector(".js-last-name-warning").classList.add("hidden");
  }

  if (!firstName.value) {
    firstName.style.border = "1px solid red";
    document.querySelector(".js-first-name-warning").classList.remove("hidden");
  } else {
    firstName.style.border = "1px solid #ccc;";
    document.querySelector(".js-first-name-warning").classList.add("hidden");
  }
}

function validatePhoneEmail(phoneEmail) {
  const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (phoneRegex.test(phoneEmail.value) || emailRegex.test(phoneEmail.value)) {
    phoneEmailWarning.classList.add("hidden");
    document.querySelector("#phone-email").style.border = "1px solid #ccc";
  } else {
    phoneEmailWarning.classList.remove("hidden");
    document.querySelector("#phone-email").style.border = "1px solid red";
  }
}

function validatePassword(password) {
  if (!password.value || password.value.length < 6) {
    document.querySelector("#password").style.border = "1px solid red";
    passwordWarning.classList.remove("hidden");
  } else {
    document.querySelector("#password").style.border = "1px solid #ccc";
    passwordWarning.classList.add("hidden");
  }
}

function isValidDate(date) {
  return date > 0;
}

function validateBirthday(day, month, year) {
  if (!isValidDate(day) || !isValidDate(month) || !isValidDate(year)) {
    document.querySelector("#year").style.border = "1px solid red";
    document.querySelector("#day").style.border = "1px solid red";
    document.querySelector("#month").style.border = "1px solid red";
    birthdayWarning.classList.remove("hidden");
  } else {
    document.querySelector("#year").style.border = "1px solid #ccc";
    document.querySelector("#day").style.border = "1px solid #ccc";
    document.querySelector("#month").style.border = "1px solid #ccc";
    birthdayWarning.classList.add("hidden");
  }
}

function notify(e) {
  if (e === 2) {
    genderOption.classList.remove("hidden");
  } else {
    genderOption.classList.add("hidden");
  }
}

function validateGender(gender) {
  if (!gender) {
    genderWarning.classList.remove("hidden");
    document.querySelector(".input-female").style.border = "1px solid red";
    document.querySelector(".input-male").style.border = "1px solid red";
    document.querySelector(".input-option").style.border = "1px solid red";
  } else {
    genderWarning.classList.add("hidden");
    document.querySelector(".input-female").style.border = "1px solid #ccc";
    document.querySelector(".input-male").style.border = "1px solid #ccc";
    document.querySelector(".input-option").style.border = "1px solid #ccc";
  }
}

function validateGenderOption() {
  const appellation = document.querySelector("#gender-option");
  console.log(`Danh xung: ${appellation}`);
}

function showWarning(input) {
  if (!input.value) {
    input.style.border = "1px solid red";
  }
}

function validateInput() {
  const document = document.querySelector(".js-");
}

// Pegando os ID do html

// Java scrip de validação de formulario

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

email.addEventListener("blur", () => {
  checkInputUserEmail();
});

username.addEventListener("blur", () => {
  checkInputUserName();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
});

// criando a função do nome de usuario

function checkInputUserName() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preencha o nome do usuário");
  } else {
    const formItem = username.parentElement;
    formItem.classname = "form-content";
  }
}

// criando a função do email
function checkInputUserEmail() {
  const emailValue = email.value;

  // validação do campo email.
  if (emailValue === "") {
    errorInput(email, "O email é obrigatório");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no minimo 8 caracteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatoria.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm() {
  checkInputUserName(); // mostra conteudo da funcção no form para ser chamado...
  checkInputUserEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItem = form.querySelectorAll(".form-content");
  const isValid = [...formItem].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
  } else {
    alert("PREENCHA OS CAMPOS CORRETAMENTE!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.className = "form-content error";
}

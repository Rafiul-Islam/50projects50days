document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.querySelector("#generator");
  const result = document.querySelector("#result");
  const lengthField = document.querySelector("#length");
  const includeLower = document.querySelector("#lowercase");
  const includeUpper = document.querySelector("#uppercase");
  const includeNumber = document.querySelector("#numbers");
  const includeSymbol = document.querySelector("#symbols");
  const copyButton = document.querySelector("#copyButton");

  let password = "";

  function generateRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }

  function generateRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  }

  function generateRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }

  function generateRandomSymbol() {
    const stymbols = "${*/-+}${!@#$%^&}${()[]{}}";
    return stymbols[Math.floor(Math.random() * stymbols.length)];
  }

  generateButton.addEventListener("click", () => {
    let passwordLength = +lengthField.value;
    passwordLength = passwordLength > 20 ? 20 : passwordLength;
    passwordLength = passwordLength < 4 ? 4 : passwordLength;
    lengthField.value = passwordLength;

    password = "";
    for (let i = 1; i <= passwordLength; i++) {
      if (includeLower.checked) password += generateRandomLower();
      if (includeUpper.checked) password += generateRandomUpper();
      if (includeNumber.checked) password += generateRandomNumber();
      if (includeSymbol.checked) password += generateRandomSymbol();
      if (password.length >= passwordLength) {
        password = password.slice(0, passwordLength);
        break;
      }
    }

    result.textContent = password;
  });

  copyButton.addEventListener("click", () => {
    if (!password) result;
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    alert("Password copied to clapboard!");
  });
});

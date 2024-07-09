document.addEventListener("DOMContentLoaded", function () {
  const checkoutForm = document.getElementById("checkout-form");
  const paymentForm = document.getElementById("payment-form");
  const paymentContainer = document.getElementById("payment-container");

  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateCheckoutForm()) {
      console.log("Checkout Form Data:");
      console.log("Nombre Completo:", checkoutForm["full-name"].value);
      console.log("Número de Teléfono:", checkoutForm["phone"].value);
      console.log("Dirección:", checkoutForm["address"].value);
      paymentContainer.style.display = "block";
      checkoutForm.style.display = "none";
    }
  });

  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validatePaymentForm()) {
      console.log("Payment Form Data:");
      console.log("Correo Electrónico:", paymentForm["email"].value);
      console.log("Nombre de la Tarjeta:", paymentForm["card-name"].value);
      console.log("Número de Tarjeta:", paymentForm["card-number"].value);
      console.log("Fecha de Caducidad:", paymentForm["expiration-date"].value);
      console.log("CVV:", paymentForm["cvv"].value);

    }
  });

  function validateCheckoutForm() {
    let valid = true;

    const fullName = checkoutForm["full-name"].value.trim();
    const phone = checkoutForm["phone"].value.trim();
    const address = checkoutForm["address"].value.trim();

    const fullNameValidation = document.getElementById("full-name-validation");
    const phoneValidation = document.getElementById("phone-validation");
    const addressValidation = document.getElementById("address-validation");

    fullNameValidation.textContent = "";
    phoneValidation.textContent = "";
    addressValidation.textContent = "";

    if (fullName === "") {
      fullNameValidation.textContent = "El nombre completo es obligatorio.";
      valid = false;
    }

    if (phone === "") {
      phoneValidation.textContent = "El número de teléfono es obligatorio.";
      valid = false;
    } else if (!/^\d+$/.test(phone)) {
      phoneValidation.textContent = "El número de teléfono debe ser numérico.";
      valid = false;
    }

    if (address === "") {
      addressValidation.textContent = "La dirección es obligatoria.";
      valid = false;
    }

    return valid;
  }

  window.validatePaymentForm = function() {
    let valid = true;

    const email = paymentForm["email"].value.trim();
    const cardName = paymentForm["card-name"].value.trim();
    const cardNumber = paymentForm["card-number"].value.trim();
    const expirationDate = paymentForm["expiration-date"].value.trim();
    const cvv = paymentForm["cvv"].value.trim();

    const emailValidation = document.getElementById("email-validation");
    const cardNameValidation = document.getElementById("card-name-validation");
    const cardNumberValidation = document.getElementById(
      "card-number-validation"
    );
    const expirationDateValidation = document.getElementById(
      "expiration-date-validation"
    );
    const cvvValidation = document.getElementById("cvv-validation");

    emailValidation.textContent = "";
    cardNameValidation.textContent = "";
    cardNumberValidation.textContent = "";
    expirationDateValidation.textContent = "";
    cvvValidation.textContent = "";

    const cardType = getCardType(cardNumber);

    if (email === "") {
      emailValidation.textContent = "El correo electrónico es obligatorio.";
      valid = false;
    }

    if (cardName === "") {
      cardNameValidation.textContent =
        "El nombre de la tarjeta es obligatorio.";
      valid = false;
    }

    if (cardNumber === "") {
      cardNumberValidation.textContent =
        "El número de tarjeta es obligatorio.";
      valid = false;
    } else if (!isValidCardNumber(cardNumber, cardType)) {
      cardNumberValidation.textContent =
        "El número de tarjeta no es válido.";
      valid = false;
    }

    if (expirationDate === "") {
      expirationDateValidation.textContent =
        "La fecha de caducidad es obligatoria.";
      valid = false;
    }

    if (cvv === "") {
      cvvValidation.textContent = "El CVV es obligatorio.";
      valid = false;
    } else if (!/^\d+$/.test(cvv)) {
      cvvValidation.textContent = "El CVV debe ser numérico.";
      valid = false;
    }

    return valid;
  }

  function getCardType(cardNumber) {
    // Definir patrones de tarjetas conocidas y sus rangos de números iniciales
    const cardPatterns = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
    };

    // Comprobar cada patrón y devolver el tipo de tarjeta correspondiente
    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(cardNumber)) {
        return cardType;
      }
    }

    return "unknown";
  }

  function isValidCardNumber(cardNumber, cardType) {
    switch (cardType) {
      case "visa":
        return /^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber);
      case "mastercard":
        return /^5[1-5][0-9]{14}$/.test(cardNumber);
      case "amex":
        return /^3[47][0-9]{13}$/.test(cardNumber);
      default:
        return false;
    }
  }
});




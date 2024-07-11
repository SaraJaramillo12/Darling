import { toggleMenu } from "../modules/menu.js";

async function setupPage() {
  await toggleMenu();
}

setupPage();

function getCardType(cardNumber) {
  const cardTypes = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/
  };

  if (cardTypes.visa.test(cardNumber)) {
    return 'visa';
  } else if (cardTypes.mastercard.test(cardNumber)) {
    return 'mastercard';
  } else {
    return 'unknown';
  }
}

// Función para cargar los datos del cliente desde el Local Storage y actualizar la página
function displayClientData() {
  // Obtener los datos del Local Storage
  const clientData = JSON.parse(localStorage.getItem('clientData'));
  const paymentData = JSON.parse(localStorage.getItem('paymentData'));

  // Verificar si hay datos disponibles
  if (clientData && paymentData) {
    // Actualizar el nombre del cliente
    document.getElementById('customer-name').textContent = clientData.fullName;

    // Determinar el tipo de tarjeta
    const cardType = getCardType(paymentData.cardNumber);

    // Actualizar el método de pago
    const paymentMethodSpan = document.getElementById('payment-method');
    if (cardType === 'visa') {
      paymentMethodSpan.innerHTML = '<img src="../assets/visa.svg" alt="Visa" />';
    } else if (cardType === 'mastercard') {
      paymentMethodSpan.innerHTML = '<img src="../assets/mastercard.svg" alt="Mastercard" />';
    } else {
      paymentMethodSpan.textContent = 'Unknown Card Type';
    }
  }
}

// Llamar a la función para cargar y mostrar los datos cuando la página se cargue
window.addEventListener('load', displayClientData);

function savePaymentData(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  const email = document.getElementById('email').value;
  const cardName = document.getElementById('card-name').value;
  const cardNumber = document.getElementById('card-number').value;
  const expirationDate = document.getElementById('expiration-date').value;
  const cvv = document.getElementById('cvv').value;

  // Crear un objeto con los datos de pago
  const paymentData = {
    email,
    cardName,
    cardNumber,
    expirationDate,
    cvv
  };

  // Guardar los datos en el Local Storage
  localStorage.setItem('paymentData', JSON.stringify(paymentData));

  // Redirigir a la página de recibo o realizar otra acción
  window.location.href = '../pages/payment-success.html'; // Cambia 'receipt.html' por la URL de tu página de recibo
}

// Asignar el evento de submit al formulario de pago
document.getElementById('payment-form').addEventListener('submit', savePaymentData);

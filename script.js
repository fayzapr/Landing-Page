// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  
  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status
  };
}

function isNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str.charAt(i))) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked;
}


function validateFormData(data) {
if (data === null) {
  return false;
}
if (isNaN(data.zipCode)) {
  return false;
}
if (!checkboxIsChecked('status')) {
  return false;
}
return true;
}

function submit() {
event.preventDefault(); // prevent the form from submitting and refreshing the page
if (!validateFormData(handleGetFormData())) {
  document.getElementById('warning').textContent = 'Periksa form anda sekali lagi';
} else {
  document.getElementById('warning').textContent = '';
  // submit the form or perform other actions
}
}

document.querySelector('form').addEventListener('submit', submit);

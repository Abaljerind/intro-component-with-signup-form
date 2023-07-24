/*

TODO: Logika pada bagian form;

? ketika semua input masih kosong dan button di klik maka akan menampilkan tanda eror dan juga keterangan eror nya.
? khusus pada email terdapat 2 buah jenis error;
    * a. ketika input pada email kosong. -> responnya Email cannot be empty.
    * b. ketika email yang dimasukkan tidak sesuai dengan jenis email. -> responnya Looks like this is not an email.
    
* Cara pembuatan:
    * buat variable untuk button claim nya, -> .button-claim
    * masing masing input berdasarkan id nya, -> #firstName, #lastName, #email, #password
    * masing masing tag p dengan nama class nya, -> .firstName, .lastName, .email, .password
    * masing masing tag div untuk bagian 'alert-[nama class]' dengan nama class nya juga, -> .alert-firstName, .alert-lastName, .alert-email, .alert-password
    
    ! emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    * buat variable yang berisi timeout agar ketika pesan error nya sudah tampil bisa otomatis menghilang lagi.

    * lanjut terakhir buat eventlistener dibagian button nya agar ketika di klik, function didalamnya dijalankan, karna banyak kondisinya jadi gunakan 'switch case', lalu return variable timeout nya.

*/

const btnClaim = document.querySelector(".button-claim");

const inputFirstName = document.querySelector("#firstName");
const inputLastName = document.querySelector("#lastName");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

const textFirstName = document.querySelector(".firstName");
const textLastName = document.querySelector(".lastName");
const textEmail = document.querySelector(".email");
const textPassword = document.querySelector(".password");

const alertFirstName = document.querySelector(".alert-firstName");
const alertLastName = document.querySelector(".alert-lastName");
const alertEmail = document.querySelector(".alert-email");
const alertPassword = document.querySelector(".alert-password");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeout = setInterval(() => {
  inputFirstName.style.borderColor = "hsl(246, 25%, 77%)";
  inputLastName.style.borderColor = "hsl(246, 25%, 77%)";
  inputEmail.style.borderColor = "hsl(246, 25%, 77%)";
  inputPassword.style.borderColor = "hsl(246, 25%, 77%)";

  textFirstName.style.display = "none";
  textLastName.style.display = "none";
  textEmail.style.display = "none";
  textPassword.style.display = "none";

  alertFirstName.classList.add("hidden");
  alertLastName.classList.add("hidden");
  alertEmail.classList.add("hidden");
  alertPassword.classList.add("hidden");
}, 4250);

btnClaim.addEventListener("click", function () {
  if (inputFirstName.value.length === 0) {
    inputFirstName.style.borderColor = "hsl(0, 100%, 74%)";
    textFirstName.style.display = "block";
    alertFirstName.classList.remove("hidden");
    textFirstName.textContent = "First Name cannot be empty";
  }

  if (inputLastName.value.length === 0) {
    inputLastName.style.borderColor = "hsl(0, 100%, 74%)";
    textLastName.style.display = "block";
    alertLastName.classList.remove("hidden");
    textLastName.textContent = "Last Name cannot be empty";
  }

  if (inputEmail.value.length === 0) {
    inputEmail.style.borderColor = "hsl(0, 100%, 74%)";
    textEmail.style.display = "block";
    alertEmail.classList.remove("hidden");
    textEmail.textContent = "Email cannot be empty";
  } else if (!inputEmail.value.match(emailValidation)) {
    inputEmail.style.borderColor = "hsl(0, 100%, 74%)";
    textEmail.style.display = "block";
    alertEmail.classList.remove("hidden");
    textEmail.textContent = "Looks like this is not an email";
  }

  if (inputPassword.value.length === 0) {
    inputPassword.style.borderColor = "hsl(0, 100%, 74%)";
    textPassword.style.display = "block";
    alertPassword.classList.remove("hidden");
    textPassword.textContent = "Password cannot be empty";
    return timeout;
  }
});

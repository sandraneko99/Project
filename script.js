//skrip ini akan menghandle interaksi pengguna
// dan memvalidasi input form pada halaman web
welcomeMessage();

// Function to validate the form input
//function ini akan fungsi untuk memvalidasi input form
function validateForm() {
  const nameInput = document.getElementById('name-input');
  const birthdate = document.getElementById('birth-input');
  const pesan = document.getElementById('message-input');
  const jenisKelamin = document.querySelector('input[name="gender"]:checked');

  if (nameInput.value === '') {
    alert('Form cannot be empty!');
  } else {
    // Ambil waktu saat ini
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    // Offset dalam menit ke GMT
    const offsetMin = now.getTimezoneOffset(); // negatif = di depan GMT
    const offsetHours = Math.floor(Math.abs(offsetMin) / 60)
      .toString()
      .padStart(2, '0');
    const offsetSign = offsetMin <= 0 ? '+' : '-';
    const gmtOffset = `GMT${offsetSign}${offsetHours}00`;
    const time = `${day}/${month}/${year} ${hour}:${minute}:${second} ${gmtOffset}`;

    // Ambil elemen hasil
    const result = document.getElementById('result-form');

    // Gunakan innerHTML agar tag HTML seperti <br> dan <strong> bisa dirender
    result.innerHTML = `
      <br>
      <strong>Current Time:</strong> ${time}<br>
      <br>
      <strong>Nama:</strong> ${nameInput.value}<br>
      <strong>Tanggal Lahir:</strong> ${birthdate.value}<br>
      <strong>Jenis Kelamin:</strong> ${jenisKelamin ? jenisKelamin.value : '(belum dipilih)'}<br>
      <strong>Pesan:</strong> ${pesan.value}
    `;
  }
}


//portofolio
const cardTrack = document.getElementById('cardTrack');
const scrollAmount = 320; // card width + gap

// Add event listeners for next and previous cards
document.getElementById('cardNext').addEventListener('click', () => {
  cardTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Add event listener for previous cards
document.getElementById('cardPrev').addEventListener('click', () => {
  cardTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

//fungsi untuk menampilkan pesan selamat datang dengan nama pengguna
// fungsi ini akan meminta pengguna memasukkan nama mereka melalui prompt
// dan menampilkan pesan selamat datang di elemen dengan id 'welcome-speech'
function welcomeMessage() {
    const popup = prompt('Please enter your name:');
    if (popup) {
        const welcomeElement = document.getElementById('welcome-speech');
        welcomeElement.textContent = popup;
    }
}

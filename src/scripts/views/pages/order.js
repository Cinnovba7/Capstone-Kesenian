/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
import kesenians from '../../data/kesenian-source';

const Order = {
  async render() {
    return `
      <form id="orderForm">
        <h1 tabindex="0">Kirim Data ke WhatsApp</h1>
        <label for="name">Nama</label>
        <input type="text" id="name" class="name" tabindex="0">

        <label for="namaKesenian">Nama Kesenian</label>
        <select id="namaKesenian" class="namaKesenian" tabindex="0"></select>

        <label for="harga">Harga</label>
        <span id="hargaDisplay" class="harga" tabindex="0"></span>

        <label for="tanggalPemesanan">Tanggal Pemesanan</label>
        <input type="date" id="tanggalPemesanan" class="tanggalPemesanan" tabindex="0">

        <label for="tanggalPengembalian">Tanggal Pengembalian</label>
        <input type="date" id="tanggalPengembalian" class="tanggalPengembalian" tabindex="0">

        <label for="alamatEmail">Alamat Email</label>
        <input type="email" id="alamatEmail" class="alamatEmail" tabindex="0">

        <label for="alamat">Alamat</label>
        <input type="text" id="alamat" class="alamat" tabindex="0">

        <label for="message">Keterangan</label>
        <textarea id="message" class="message" cols="30" rows="10" tabindex="0"></textarea>

        <button type="button" id="sendButton" tabindex="0">Kirim Melalui WhatsApp</button>
      </form>
    `;
  },

  async afterRender() {
    const namaKesenianSelect = document.querySelector('.namaKesenian');
    const hargaDisplay = document.getElementById('hargaDisplay');
    const emailInput = document.getElementById('alamatEmail');

    updateNamaKesenianOptions();

    namaKesenianSelect.addEventListener('change', updateHargaDisplay);

    function updateNamaKesenianOptions() {
      namaKesenianSelect.innerHTML = kesenians.map((kesenian) => `<option value="${kesenian.name}" data-harga="${kesenian.harga}">${kesenian.name}</option>`).join('');

      // Set initial harga display
      updateHargaDisplay();
    }

    function updateHargaDisplay() {
      const selectedOption = namaKesenianSelect.options[namaKesenianSelect.selectedIndex];
      const harga = selectedOption.getAttribute('data-harga');

      // Format harga dengan titik
      const formattedHarga = new Intl.NumberFormat('id-ID').format(harga);

      // Display the harga
      hargaDisplay.textContent = `Harga: Rp ${formattedHarga} /hari`;
    }

    this.sendWhatsApp = function () {
      if (validateForm()) {
        const phonenumber = '+6281937369031';

        const name = document.querySelector('.name').value;
        const tanggalPemesanan = document.querySelector('.tanggalPemesanan').value;
        const tanggalPengembalian = document.querySelector('.tanggalPengembalian').value;
        const alamatEmail = emailInput.value;
        const alamat = document.querySelector('.alamat').value;
        const message = document.querySelector('.message').value;

        // Mengambil harga dari opsi yang dipilih
        const selectedOption = namaKesenianSelect.options[namaKesenianSelect.selectedIndex];
        const harga = selectedOption.getAttribute('data-harga');

        // Format harga dengan titik
        const formattedHarga = new Intl.NumberFormat('id-ID').format(harga);

        const url = `https://wa.me/${phonenumber}?text=`
            + 'Halo! Selamat datang di dunia kesenian bersama ARTIQ. Jangan lewatkan momen spesialmu, berikut adalah ringkasan pemesananmu:'
            + `%0a*Name:* ${name}%0a`
            + `*Tanggal Pemesanan:* ${tanggalPemesanan}%0a`
            + `*Tanggal Pengembalian:* ${tanggalPengembalian}%0a`
            + `*Alamat Email:* ${alamatEmail}%0a`
            + `*Harga:* Rp ${formattedHarga} /hari%0a`
            + `*Alamat:* ${alamat}%0a`
            + `*Keterangan:* ${message}%0a%0a`
            + 'Terima kasih telah memilih ARTIQ sebagai teman perjalananmu dalam mengekspresikan seni. Silahkan tunggu pemesananmu dengan penuh antusiasme! 🎨🌟';

        window.open(url, '_blank').focus();
      } else {
        alert('Harap isi semua kolom yang wajib diisi atau periksa format alamat email.');
      }
    };

    document.getElementById('sendButton').addEventListener('click', () => this.sendWhatsApp());

    function validateForm() {
      const name = document.querySelector('.name').value;
      const tanggalPemesanan = document.querySelector('.tanggalPemesanan').value;
      const tanggalPengembalian = document.querySelector('.tanggalPengembalian').value;
      const alamatEmail = emailInput.value;
      const alamat = document.querySelector('.alamat').value;
      const message = document.querySelector('.message').value;

      // Validasi format alamat email menggunakan regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(alamatEmail);

      return (
        name.trim() !== ''
        && tanggalPemesanan.trim() !== ''
        && tanggalPengembalian.trim() !== ''
        && isEmailValid // Cek format alamat email
        && alamat.trim() !== ''
        && message.trim() !== ''
      );
    }
  },
};

export default Order;

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

        <label for="jenis" tabindex="0">Jenis Kesenian</label>
        <select id="jenis" class="jenis">
          <option value="Tarian" tabindex="0">Tarian</option>
          <option value="Teater" tabindex="0">Teater</option>
          <option value="Pakaian Adat" tabindex="0">Pakaian Adat</option>
        </select>

        <label for="namaKesenian">Nama Kesenian</label>
        <select id="namaKesenian" class="namaKesenian" tabindex="0"></select>

        <label for="harga">Harga</label>
        <span id="hargaDisplay" class="harga" tabindex="0"></span>

        <label for="alamat">Alamat</label>
        <input type="text" id="alamat" class="alamat" tabindex="0">

        <label for="message">Keterangan</label>
        <textarea id="message" class="message" cols="30" rows="10" tabindex="0"></textarea>

        <button type="button" id="sendButton" tabindex="0">Kirim Melalui WhatsApp</button>
      </form>
    `;
  },

  async afterRender() {
    const jenisSelect = document.querySelector('.jenis');
    const namaKesenianSelect = document.querySelector('.namaKesenian');
    const hargaDisplay = document.getElementById('hargaDisplay');

    updateNamaKesenianOptions();

    jenisSelect.addEventListener('change', updateNamaKesenianOptions);
    namaKesenianSelect.addEventListener('change', updateHargaDisplay);

    function updateNamaKesenianOptions() {
      const selectedJenis = jenisSelect.value;
      const filteredKesenians = kesenians.filter((kesenian) => kesenian.Jenis === selectedJenis);

      namaKesenianSelect.innerHTML = filteredKesenians.map((kesenian) => `<option value="${kesenian.name}" data-harga="${kesenian.harga}">${kesenian.name}</option>`).join('');

      // Set initial harga display
      updateHargaDisplay();
    }

    function updateHargaDisplay() {
      const selectedOption = namaKesenianSelect.options[namaKesenianSelect.selectedIndex];
      const harga = selectedOption.getAttribute('data-harga');

      // Format harga dengan titik
      const formattedHarga = new Intl.NumberFormat('id-ID').format(harga);

      // Display the harga
      hargaDisplay.textContent = `Harga: ${formattedHarga}`;
    }

    document.getElementById('sendButton').addEventListener('click', () => this.sendWhatsApp());

    this.sendWhatsApp = function () {
      const phonenumber = '+6281937369031';

      const name = document.querySelector('.name').value;
      const alamat = document.querySelector('.alamat').value;
      const jenis = jenisSelect.value;
      const namaKesenian = namaKesenianSelect.value;
      const message = document.querySelector('.message').value;

      // Mengambil harga dari opsi yang dipilih
      const selectedOption = namaKesenianSelect.options[namaKesenianSelect.selectedIndex];
      const harga = selectedOption.getAttribute('data-harga');

      // Format harga dengan titik
      const formattedHarga = new Intl.NumberFormat('id-ID').format(harga);

      const url = `https://wa.me/${phonenumber}?text=`
          + 'Halo! Selamat datang di dunia kesenian bersama ARTIQ. Jangan lewatkan momen spesialmu, berikut adalah ringkasan pemesananmu!:'
          + `%0a*Name:* ${name}%0a`
          + `*Jenis:* ${jenis}%0a`
          + `*Nama Kesenian:* ${namaKesenian}%0a`
          + `*Harga:* Rp ${formattedHarga} /hari%0a`
          + `*Alamat:* ${alamat}%0a`
          + `*Keterangan:* ${message}%0a%0a`
          + 'Terima kasih telah memilih ARTIQ sebagai teman perjalananmu dalam mengekspresikan seni. Silahkan tunggu pemesananmu dengan penuh antusiasme! 🎨🌟';

      window.open(url, '_blank').focus();
    };
  },
};

export default Order;

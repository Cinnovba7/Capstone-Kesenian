/* eslint-disable implicit-arrow-linebreak */
import kesenians from '../../data/kesenian-source';

const Kesenian = {
  render() {
    return `
    <div class="kesenian-header">
      <h1>Daftar Kesenian Indonesia</h1>
      <h2>Simak Daftar Kesenian Berikut!</h2>
      <p>Kesenian apa sih yang bisa kamu nikmati? Yuk Simak Daftar Kesenian Indonesia yang beragam berikut ini!</p>
    </div>
    
    <div class="wrapper">
      <div class="search-bar">
        <input type="text" id="search-input" placeholder="Cari..." tabindex="0" />
        <button id="search-button" tabindex="0"><i class="ph-search">Cari</i></button>
      </div>
      <div id="search-results"></div>
      <div class="kesenian-list" id="kesenian-list"></div>
    </div>

    <!-- Popup -->
    <div id="popup" class="popup">
      <div class="popup-content">
        <span class="close" id="popup-close">&times;</span>
        <img src="" alt="" id="popup-image" class="popup-image">
        <h2 id="popup-name"></h2>
        <h3 id="popup-asal"></h3>
        <h4 id="popup-jenis"></h4>
        <p id="popup-description"></p>
        <h5 id="popup-harga"></h5>
        <button class="button-kesenian" id="popup-order">Pesan Sekarang</button>
      </div>
    </div>
    `;
  },

  searchKesenian() {
    const searchInput = document.getElementById('search-input');
    const keyword = searchInput.value.toLowerCase();

    const searchResults = kesenians.filter((kesenian) =>
      kesenian.Jenis.toLowerCase().includes(keyword));

    this.showKesenianList(searchResults);
  },

  showKesenianList(kesenianList) {
    const kesenianContainer = document.querySelector('#kesenian-list');
    kesenianContainer.innerHTML = '';

    kesenianList.forEach((kesenian) => {
      const kesenianCard = document.createElement('div');
      kesenianCard.classList.add('kesenian-card');
      kesenianCard.setAttribute('tabindex', '0');

      kesenianCard.innerHTML = `
        <img src="${kesenian.pict}" alt="${kesenian.name}">
        <h2 class="clickable" tabindex="0">${kesenian.name}</h2>
        <h3 tabindex="0">${kesenian.asal}</h3>
        <h4>Jenis: ${kesenian.Jenis}</h4>
        <p>${kesenian.description}</p>
        <h5>Harga: Rp ${kesenian.harga} /hari</h5>
        <button class="button-kesenian"><a href="#/order">Pesan Sekarang</a></button>
      `;

      const h2Element = kesenianCard.querySelector('h2.clickable');
      h2Element.addEventListener('click', () => this.showPopupDetails(kesenian));

      kesenianContainer.appendChild(kesenianCard);
    });

    // Tambahkan event listener untuk tombol close pada popup
    document.getElementById('popup-close').addEventListener('click', () => this.closePopup());
    // Tambahkan event listener untuk tombol pesan sekarang pada popup
    document.getElementById('popup-order').addEventListener('click', () => this.closePopupAndRedirect());
  },

  showPopupDetails(kesenian) {
    document.getElementById('popup-image').src = kesenian.pict;
    document.getElementById('popup-image').alt = kesenian.name;
    document.getElementById('popup-name').innerText = kesenian.name;
    document.getElementById('popup-asal').innerText = `Asal: ${kesenian.asal}`;
    document.getElementById('popup-jenis').innerText = `Jenis: ${kesenian.Jenis}`;
    document.getElementById('popup-description').innerText = kesenian.description;
    document.getElementById('popup-harga').innerText = `Harga: Rp ${kesenian.harga} /hari`;

    const { body } = document;
    const popup = document.getElementById('popup');

    body.classList.add('popup-visible');
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  },

  closePopup() {
    const { body } = document;
    const popup = document.getElementById('popup');

    body.classList.remove('popup-visible');
    popup.style.display = 'none';
    document.body.style.overflow = '';
  },

  closePopupAndRedirect() {
    this.closePopup();
    window.location.href = '#/order';
  },

  afterRender() {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => this.searchKesenian());

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.searchKesenian();
      }
    });

    const kesenianList = kesenians;
    this.showKesenianList(kesenianList);
  },
};

export default Kesenian;

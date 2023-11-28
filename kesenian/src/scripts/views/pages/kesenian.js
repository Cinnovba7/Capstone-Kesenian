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
        <input type="text" id="search-input" placeholder="Search..." tabindex="0" />
        <button id="search-button" tabindex="0"><i class="ph-search">search</i></button>
      </div>
      <div id="search-results"></div>
      <div class="kesenian-list" id="kesenian-list"></div>
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
      kesenianContainer.innerHTML += `
        <div class="kesenian-card" tabindex="0">
          <img src="${kesenian.pict}" alt="${kesenian.name}">
          <h2>${kesenian.name}</h2>
          <h3 tabindex="0">${kesenian.asal}</h3>
          <h4>Jenis: ${kesenian.Jenis}</h4>
          <p>${kesenian.description}</p>
          <h5>Harga: Rp ${kesenian.harga} /hari</h5>
          <button class="button-kesenian"><a href="#/order">Booking Now</a></button>
        </div>
        `;
    });
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

const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="hero-content">
        <img src="apk.png" alt="Hero Button">
        <div class="hero-text">
            <h1>Welcome to Artistik Indonesia (ARTIQ)! </h1>
            <p>Explore every corner of this website to discover the beauty of Indonesian art that you want to explore. Enjoy your art journey at ARTIQ!</p>
            <button class="explore-button"><a href="#/kesenian">Explore Now</a></button>
        </div>
    </div>
</div>
<article class="article-container">
    <div class="article-header">
        <h1>Rekomendasi Artikel</h1>
        <h2>Apakah Kamu Tahu?</h2>
        <p>Warisan budaya ini telah secara resmi diakui oleh UNESCO atau kepanjangan dari United Nations Educational, Scientific and Cultural Organization</p>
    </div>
    <div class="article-card">
        <div class="card-item">
            <img src="saman.jpg" alt="tari saman" class="article-image">
            <a href="#/artikel1">Tari Saman</a>
            <p>Warisan Budaya Indonesia yang keempat adalah tari saman.Tarian Saman sendiri telah menjadi bagian dari Warisan Budaya Takbenda miliki UNESCO sejak tahun 2011</p>
        </div>
        <div class="card-item">
            <img src="angklung.jpg" alt="angklung" class="article-image">
            <a href="artikel2.html">Angklung</a>
            <p>Angklung merupakan alat musik yang terbuat dari bahan bambu yang berasal dari tanah Sunda.Alat musik angklung sendiri juga telah diakui sejak tahun 2010 oleh UNESCO.</p>
        </div>
        <div class="card-item">
            <img src="tbali.jpg" alt="tari bali" class="article-image">
            <a href="artikel3.html">Tari Bali</a>
            <p>Warisan Budaya Indonesia yang ketujuh adalah tari bali. Dalam daftar ICH UNESCO yang ada pada tahun 2015</p>
        </div>
    </div>
    </article>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;

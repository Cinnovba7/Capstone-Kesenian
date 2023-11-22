const Artikel1 = {
  async render() {
    return `
    <section class="artikel1">
        <h1>Kesenian Indonesia</h1>
        <h2>Tari Saman</h2>
        <p>Warisan Budaya Indonesia yang keempat adalah tari saman. Tari saman merupakan jenis tarian yang merupakan bagian dari tradisi masyarakat di Gayo, Aceh. Tarian Saman sendiri telah menjadi bagian dari Warisan Budaya Takbenda miliki UNESCO sejak tahun 2011.</p>
        <img src="saman.jpg" alt="tari saman" class="article-image"
        <p>Tarian Saman pada umumnya ditampilkan oleh sekelompok pria dengan ciri khas melakukan gerakan yang berselang seling. Selain itu, pada umumnya tarian saman ini ditampilkan pada upacara keagamaan. Namun, tak jarang pula tarian saman ini ditampilkan di Istana Negara dalam perayaan hari raya nasional.
        Tari Saman saat ini merupakan salah satu warisan budaya yang dimasukkan ke dalam kategori budaya yang membutuhkan perlindungan mendesak. Hal ini dikarenakan para seniman yang mempelajari dan mendalami tari saman sudah mulai memasuki usia tua, dan generasi yang dapat melanjutnya sudah hampir tidak ada lagi.</p>
    </section>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Artikel1;

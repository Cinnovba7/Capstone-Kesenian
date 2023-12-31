/* eslint-disable linebreak-style */
const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="hero-content">
        <img src="apk.png" alt="Hero Button">
        <div class="hero-text">
            <h1 tabindex="0">Selamat datang di Artistik Indonesia (ARTIQ)!</h1>
            <p tabindex="0">Jelajahi setiap sudut website ini untuk menemukan keindahan seni Indonesia yang ingin Anda jelajahi. Selamat menikmati perjalanan seni Anda di ARTIQ!</p>
            <button class="explore-button" tabindex="0"><a href="#/kesenian" >Selengkapnya</a></button>
        </div>
    </div>
</div>
<article class="article-container">
    <div class="article-header">
        <h1 tabindex="0">Rekomendasi Artikel</h1>
        <h2 tabindex="0">Apakah Kamu Tahu?</h2>
        <p tabindex="0">Warisan budaya ini telah secara resmi diakui oleh UNESCO atau kepanjangan dari United Nations Educational, Scientific and Cultural Organization</p>
    </div>
    <div class="article-card">
        <div class="card-item">
            <img src="saman.jpg" alt="tari saman" class="article-image" tabindex="0">
            <h1 tabindex="0">Tari Saman</h1>
            <p tabindex="0">Warisan Budaya Indonesia yang pertama adalah tari saman.Tarian Saman sendiri telah menjadi bagian dari Warisan Budaya Takbenda miliki UNESCO sejak tahun 2011. Tari Saman saat ini merupakan salah satu warisan budaya yang dimasukkan ke dalam kategori budaya yang membutuhkan perlindungan mendesak. Hal ini dikarenakan para seniman yang mempelajari dan mendalami tari saman sudah mulai memasuki usia tua, dan generasi yang dapat melanjutnya sudah hampir tidak ada lagi.</p>
        </div>
        <div class="card-item">
            <img src="angklung.jpg" alt="angklung" class="article-image" tabindex="0">
            <h1 tabindex="0">Angklung</h1>
            <p tabindex="0">Warisan Budaya Indonesia yang kedua adalah alat musik angklung. Angklung merupakan alat musik yang terbuat dari bahan bambu yang berasal dari tanah Sunda. Alat musik ini memang dikenal dengan keunikannya, karena untuk memainkan alat musik ini harus dengan cara menggoyangkannya hingga mengeluarkan atau menghasilkan nada tertentu.Alat musik angklung sendiri juga telah diakui sejak tahun 2010 oleh UNESCO.</p>
        </div>
        <div class="card-item">
            <img src="tbali.jpg" alt="tari bali" class="article-image" tabindex="0">
            <h1 tabindex="0">Tari Bali</h1>
            <p tabindex="0">Warisan Budaya Indonesia yang ketiga adalah tari bali. Dalam daftar ICH UNESCO yang ada pada tahun 2015, terdapat tiga genre tari Bali yang masuk ke dalamnya. 

            Tarian Bali ini sendiri seringkali identik dan tidak dapat dipisahkan dengan upacara serta berbagai ritual penting yang ada di Bali. Sehingga, seringkali aspek kesenian tari ini menjadi salah satu daya tarik utama bagi para wisatawan yang datang untuk berkunjung maupun berlibur ke pulau dewata ini.</p>
        </div>
    </div>
    </article>
    <!-- Collaborators Section -->
    <section class="collaborators">
        <h2 tabindex="0">Anggota Kami</h2>
        <ul>
            <li>
                <img src="aji.jpg" alt="Collaborator 1" tabindex="0">
                <p tabindex="0">M Aji Sultan Hakim</p>
                <p tabindex="0">Web Designer</p>
            </li>
            <li>
                <img src="farhan.jpg" alt="Collaborator 2" tabindex="0">
                <p tabindex="0">Farhan Saputra Nasution</p>
                <p tabindex="0">Backend Developer</p>
            </li>
            <li>
                <img src="deni.JPG" alt="Collaborator 2" tabindex="0">
                <p tabindex="0">Deni Kristanto</p>
                <p tabindex="0">Backend Developer</p>
            </li>
            <li>
                <img src="diva.jpg" alt="Collaborator 2" tabindex="0">
                <p tabindex="0">Difatul Mu'Minah</p>
                <p tabindex="0">Frontend Developer</p>
            </li>
            <li>
                <img src="cind.jpg" alt="Collaborator 2" tabindex="0">
                <p tabindex="0">Cindya Novira Bangun</p>
                <p tabindex="0">Frontend Developer</p>
            </li>
        </ul>
    </section>

        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;

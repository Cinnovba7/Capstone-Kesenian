const Kesenian = {
  async render() {
    return `
    <div class="kesenian-header">
    <h1>Daftar Kesenian Indonesia</h1>
    <h2>Simak Daftar Kesenian Berikut!</h2>
    <p>Kesenian apa sih yang bisa kamu nikmati? Yuk Simak Daftar Kesenian Indonesia yang beragam berikut ini!</p>
    </div>
    
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Kesenian;

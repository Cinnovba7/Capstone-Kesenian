/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
import kesenians from '../../data/kesenian-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <div class="kesenian-list" id="kesenian-list"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const kesenianContainer = document.querySelector('#kesenian-list');
    const kesenian = await kesenians.detailRestaurant(url.name);

    if (kesenian) {
      const createKesenianDetailTemplate = (kesenian) => `
        <div class="kesenian-detail">
          <h2 class="kesenian__title">${kesenian.name}</h2>
          <img src="${kesenian.pict}" alt="${kesenian.name}">
          <div class="restaurant__info">
            <h4>Jenis : <span>${kesenian.Jenis}<span></h4>
            <h4>Asal : <span>${kesenian.asal}<span></h4>
            <h4>Description</h4>
            <p>${kesenian.description}</p>
          </div>
        </div>
      `;

      kesenianContainer.innerHTML = createKesenianDetailTemplate(kesenian);
    } else {
      // Handle case when kesenian is not found, for example, redirect to a 404 page
      kesenianContainer.innerHTML = '<p>Kesenian not found</p>';
    }
  },
};

export default Detail;

import i18next from 'i18next';
import locales from './locales/ru.js';
import watch from './view.js';
import initView from './initView.js';

const init = () => {
  const state = {
    lang: 'ru',
    diploms: [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}],
    reviews: [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}],
    uiState: {
      viewedDiplomaId: [],
      viewedReviewsId: 0,
    },
    modal: {
      active: false,
      diplomaId: null,
    },
  }
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: state.lang,
    debug: true,
    resources: locales,
  });
  const elements = {
    caps: document.querySelectorAll('.cp'),
    watsapp: document.querySelector('.watsapp'),
    telegram: document.querySelector('.telegram'),
    photo: document.querySelector('.photo'),
    reviews: document.querySelectorAll('.reviews_photo'),
    sertificats: document.querySelectorAll('.ed_sertificat'),
    disclamer: document.querySelector('.description'),
    right_button: document.querySelector('.right_arrow'),
    left_button: document.querySelector('.left_arrow'),
  };
  const watched = watch(state, elements, i18nextInstance);

  initView(watched, elements, i18nextInstance);
};

export default init;
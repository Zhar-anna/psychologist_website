import i18next from 'i18next';
import locales from './locales/ru.js';
import watch from './view.js';
import emerge from './emegre.js';
import initView from './initView.js';
import diploma0 from './images/Education/Диплом1.jpg';
import diploma1 from './images/Education/Диплом2.jpg';
import diploma2 from './images/Education/Диплом3.jpg';
import diploma3 from './images/Education/Диплом4.jpg';
import diploma4 from './images/Education/Диплом5.jpg';
import diploma5 from './images/Education/Диплом6.jpg';
import diploma6 from './images/Education/Диплом7.jpg';
import diploma7 from './images/Education/Диплом8.jpg';
import reviews1 from './images/Reviews/Отзыв1.jpg';
import reviews2 from './images/Reviews/Отзыв2.jpg';
import reviews3 from './images/Reviews/Отзыв3.jpg';
import reviews4 from './images/Reviews/Отзыв4.jpg';
import reviews5 from './images/Reviews/Отзыв5.jpg';
import reviews6 from './images/Reviews/Отзыв6.jpg';
import reviews7 from './images/Reviews/Отзыв7.jpg';
import reviews8 from './images/Reviews/Отзыв8.jpg';

const init = () => {
  const state = {
    lang: 'ru',
    diploms: [{id: 0, title: 'diploma0', photo: diploma0}, {id: 1, title: 'diploma1', photo: diploma1}, {id: 2, title: 'diploma2', photo:diploma2}, {id: 3, title: 'diploma3', photo: diploma3}, {id: 4, title: 'diploma4', photo: diploma4}, {id: 5, title: 'diploma5', photo: diploma5}, {id: 6, title: 'diploma6', photo:diploma6}, {id: 7, title: 'diploma7', photo: diploma7}],
    reviews: [{id: 0, photo: reviews1}, {id: 1, photo: reviews2}, {id: 2, photo: reviews3}, {id: 3, photo: reviews4}, {id: 4, photo: reviews5}, {id: 5, photo: reviews6}, {id: 6, photo: reviews7}, {id: 7, photo: reviews8}],
    uiState: {
      viewedReviewsId: 0,
    },
    modal: {
      active: false,
      viewedDiplomaId: null,
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
    overlay: document.querySelector('.overlay_modal'),
    modal: document.querySelector('.modal'),
    modal_diploma: document.querySelector('.modal_diploma'),
    modal_years: document.querySelector('.modal_years'),
    modal_description: document.querySelector('.modal_description'),
  };
  const watched = watch(state, elements, i18nextInstance);

  initView(watched, elements, i18nextInstance);
};

export default init;
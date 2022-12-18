import i18next from 'i18next';
import locales from './locales/ru.js';
import watch from './view.js';
import initView from './initView.js';

const init = () => {
  const state = {
    lang: 'ru',
  }
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: state.lang,
    debug: true,
    resources: locales,
  });
  const elements = {
    watsapp: document.querySelector('.watsapp'),
    telegram: document.querySelector('.telegram'),
    photo: document.querySelector('.photo'),
    sertificats: document.querySelectorAll('.ed_sertificat'),
    disclamer: document.querySelector('.description'),
  };
  const watched = watch(state, elements, i18nextInstance);

  initView(watched, elements, i18nextInstance);
};

export default init;
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
    lang: state.lang,
    resources: locales,
  });
  const elements = {
    watsapp: document.querySelector('.watsapp'),
    telegram: document.querySelector('.telegram'),
    photo: document.querySelector('.photo'),
    sertificats: document.querySelectorAll('.ed_sertificat'),
  };
  const watched = watch(state, elements, i18nextInstance);

  initView(watched, elements);
};

export default init;
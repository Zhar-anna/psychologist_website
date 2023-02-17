import onChange from 'on-change';

const watch = (state, elements, i18nextInstance) => {
  const {
    caps,
    watsapp,
    telegram,
    photo,
    section,
    button,
    reviews,
    sertificats,
    disclamer,
    right_button,
    left_button,
    overlay,
    modal,
    modal_diploma,
    modal_years,
    modal_description,
    ru,
    eng,
    achievements,
    prices_item,
    contacts,
  } = elements;
  watsapp.style.height = 30 + 'px';
  telegram.style.height = 30 + 'px';
  disclamer.innerHTML = i18nextInstance.t('disclamer2');
  const main = document.querySelector('.main');
  main.textContent = i18nextInstance.t('main.name');
  const title = document.querySelector('.title');
  title.textContent = i18nextInstance.t('main.profession');
  caps[0].textContent = i18nextInstance.t('hat.about');
  caps[1].textContent = i18nextInstance.t('hat.education');
  caps[2].textContent = i18nextInstance.t('hat.reviews');
  caps[3].textContent = i18nextInstance.t('hat.services');
  caps[4].textContent = i18nextInstance.t('hat.blogs');
  caps[5].textContent = i18nextInstance.t('hat.tel');
  button.textContent = i18nextInstance.t('button');
  ru.textContent = i18nextInstance.t('lang.ru');
  eng.textContent = i18nextInstance.t('lang.eng');
  section[0].textContent = i18nextInstance.t('education.title');
  section[1].textContent = i18nextInstance.t('reviews.title');
  section[2].textContent = i18nextInstance.t('price.title');
  section[3].textContent = i18nextInstance.t('blogs.title');
  section[4].textContent = i18nextInstance.t('contacts.title');
  let achiArray = [];
  achievements.forEach((achieve) => {
    achiArray.push(achieve);
    achieve.textContent = i18nextInstance.t(`achievements.${achiArray.indexOf(achieve)}`);
  });
  let priceArray = []
  prices_item.forEach((item) => {
    priceArray.push(item);
    const title = item.querySelector('.price_title');
    title.innerHTML = i18nextInstance.t(`price.block${priceArray.indexOf(item)}.price_title`);
    const whole = item.querySelector('.price_whole');
   whole.innerHTML = i18nextInstance.t(`price.block${priceArray.indexOf(item)}.price_whole`);
    const count = item.querySelector('.price_count');
    if (count === null) {
      return;
    }
     count.innerHTML = i18nextInstance.t(`price.block${priceArray.indexOf(item)}.price_count`);

  });
  contacts[0].textContent = i18nextInstance.t('contacts.tel');
  contacts[1].textContent = i18nextInstance.t('contacts.email');
  const watchedstate = onChange(state, (path, value) => {
    if (path === 'uiState.viewedReviewsId') {
      reviews.forEach((review) => {
        if (review.id != value) {
          review.style.display = 'none';
        } else {
          review.style.display = 'block';
        }
      });
    }
    if (path === 'modal.active') {
      if (value) {
        modal_diploma.src = state.diploms[state.modal.viewedDiplomaId].photo;
        modal_years.textContent = i18nextInstance.t(
          `education.${state.diploms[state.modal.viewedDiplomaId].title}.years`
        );
        modal_description.textContent = i18nextInstance.t(
          `education.${
            state.diploms[state.modal.viewedDiplomaId].title
          }.description`
        );
        modal.classList.add('active');
        // overlay.classList.add('active');
      } else {
        modal.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
    if (path === 'lang') {
      console.log(state)
      watch(state, elements, i18nextInstance);
    }
  });
  return watchedstate;
}
export default watch;

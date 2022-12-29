import photo_image from './images/Photo.jpg';
import telegram_image from './images/Telegram.jpg';
import watsapp_image from './images/Watsapp.jpg';

export default (watchedState, elements, i18nextInstance) => {
  // const { lang } = watchedState;
  const {
    caps,
    watsapp,
    telegram,
    photo,
    reviews,
    sertificats,
    disclamer,
    right_button,
    left_button,
  } = elements;
  watsapp.src = watsapp_image;
  telegram.src = telegram_image;
  photo.src = photo_image;
  for (let i = 0; i <= watchedState.diploms.length - 1; i += 1) {
    sertificats[i].src = watchedState.diploms[i].photo;
    reviews[i].src = watchedState.reviews[i].photo;
  };
  // sertificats[0].style.height = 253 + 'px';
  // sertificats[0].style.width = 300 + 'px';
  let arraySertisicats = [];
  sertificats.forEach((sertificat) => {
    arraySertisicats.push(sertificat);
    sertificat.style.width = 200 + 'px';
    sertificat.style.height = 100 + '%';
  });
  watsapp.style.height = 30 + 'px';
  telegram.style.height = 30 + 'px';
  disclamer.innerHTML = i18nextInstance.t('disclamer');
  // дальнейший код записать в одну функцию с диспетчеризацией по ключу
  // где ключ - класс элемента перемотки
  caps[0].addEventListener("click", (e) => {
    e.preventDefault();
    const education = document.querySelector('.education');
    education.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
  caps[1].addEventListener('click', (e) => {
    e.preventDefault();
    const reviews = document.querySelector('.Reviews');
    reviews.scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
  caps[2].addEventListener('click', (e) => {
    e.preventDefault();
    const prices = document.querySelector('.prices');
    prices.scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
  //
  
  sertificats.forEach((sertificat) => {
    sertificat.addEventListener('mouseover', (e) => {
      // sertificat.removeEventListener('mouseover', (e));
      e.preventDefault();
      watchedState.modal.viewedDiplomaId = arraySertisicats.indexOf(sertificat);
      watchedState.modal.active = true;
      
    });
  });
  sertificats.forEach((sertificat) => {
    sertificat.addEventListener('mouseout', (e) => {
      e.preventDefault();
      watchedState.modal.viewedDiplomaId = null;
      watchedState.modal.active = false;
    });
  });

  reviews[0].style.visibility = 'block';
  reviews.forEach((review) => {
    review.style.width = 300 + 'px';
    review.style.height = 100 + '%';
  });
  for (let i = 1; i <= watchedState.reviews.length - 1; i += 1) {
    reviews[i].style.display= 'none';
  }
  right_button.addEventListener('click' , (e) => {
    e.preventDefault();
    left_button.disabled = false;
    if (watchedState.uiState.viewedReviewsId < watchedState.reviews.length - 2) {
      watchedState.uiState.viewedReviewsId += 1;
    } else {
      right_button.disabled = true;
    }
  });

  left_button.addEventListener('click', (e) => {
    e.preventDefault();
    right_button.disabled = false;
    if (watchedState.uiState.viewedReviewsId > 0) {
      watchedState.uiState.viewedReviewsId -= 1;
    } else {
      left_button.disabled = true;
    }
  });
};

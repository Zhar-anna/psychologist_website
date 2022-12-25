import photo_image from './images/Photo.jpg';
import telegram_image from './images/Telegram.jpg';
import watsapp_image from './images/Watsapp.jpg';
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
  sertificats[0].src = diploma0;
  sertificats[1].src = diploma1;
  sertificats[2].src = diploma2;
  sertificats[3].src = diploma3;
  sertificats[4].src = diploma4;
  sertificats[5].src = diploma5;
  sertificats[6].src = diploma6;
  sertificats[7].src = diploma7;
  // sertificats[0].style.height = 253 + 'px';
  // sertificats[0].style.width = 300 + 'px';
  sertificats.forEach((sertificat) => {
    sertificat.style.width = 200 + 'px';
    sertificat.style.height = 100 + '%';
  });
  watsapp.style.height = 30 + 'px';
  telegram.style.height = 30 + 'px';
  disclamer.innerHTML = i18nextInstance.t('disclamer');

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

  reviews[0].src = reviews1;
  reviews[0].style.visibility = 'block';
  reviews[1].src = reviews2;
  reviews[2].src = reviews3;
  reviews[3].src = reviews4;
  reviews[4].src = reviews5;
  reviews[5].src = reviews6;
  reviews[6].src = reviews7;
  reviews[7].src = reviews8;
  reviews.forEach((review) => {
    review.style.width = 300 + 'px';
    review.style.height = 100 + '%';
  });
  for (let i = 1; i <= watchedState.reviews.length - 1; i += 1) {
    reviews[i].style.display= 'none';
  }
  right_button.addEventListener('click' , (e) => {
    e.preventDefault();
    if (watchedState.uiState.viewedReviewsId < watchedState.reviews.length - 2) {
      watchedState.uiState.viewedReviewsId += 1;
    } else {
      right_button.disabled = true;
    }
  });

  left_button.addEventListener('click', (e) => {
    e.preventDefault();
    if (watchedState.uiState.viewedReviewsId > 0) {
      watchedState.uiState.viewedReviewsId -= 1;
    } else {
      left_button.disabled = true;
    }
  })

};


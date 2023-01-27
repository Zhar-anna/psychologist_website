import photo_image from './images/Photo.jpg';
import telegram_image from './images/Telegram.jpg';
import watsapp_image from './images/Watsapp.jpg';
import youtube_image from './images/youtube.png';
import vk_image from './images/vk.png';

export default (watchedState, elements, i18nextInstance) => {
  // const { lang } = watchedState;
  const {
    caps,
    watsapp,
    watsapp_href,
    telegram,
    photo,
    reviews,
    sertificats,
    disclamer,
    right_button,
    left_button,
    youtube,
    vk,
    youtube_imag,
    vk_imag,
  } = elements;
  watsapp.src = watsapp_image;
  watsapp_href.href =
    'https://api.whatsapp.com/send?phone=79773513440&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E.';
  telegram.src = telegram_image;
  photo.src = photo_image;
  vk.href = 'https://vk.com/smeshariki_psy';
  youtube.href = 'https://www.youtube.com/@K_ole';
  vk_imag.src = vk_image;
  youtube_imag.src = youtube_image;

  for (let i = 0; i <= watchedState.diploms.length - 1; i += 1) {
    sertificats[i].src = watchedState.diploms[i].photo;
    reviews[i].src = watchedState.reviews[i].photo;
  }
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
  disclamer.innerHTML = i18nextInstance.t('disclamer1');
  const main = document.querySelector('.main');
  main.textContent = i18nextInstance.t('main.name');
  const title = document.querySelector('.title');
  title.textContent = i18nextInstance.t('main.profession');
  // дальнейший код записать в одну функцию с диспетчеризацией по ключу
  // где ключ - класс элемента перемотки
  const capsKey = {
    education: caps[0],
    review: caps[1],
    prices: caps[2],
    blogs: caps[3],
  };
  caps[0].addEventListener('click', (e) => {
    e.preventDefault();
    const education = document.querySelector('.education');
    education.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  caps[1].addEventListener('click', (e) => {
    e.preventDefault();
    const reviews = document.querySelector('.Reviews');
    reviews.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  caps[2].addEventListener('click', (e) => {
    e.preventDefault();
    const prices = document.querySelector('.prices');
    prices.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  caps[3].addEventListener('click', (e) => {
    e.preventDefault();
    const blog = document.querySelector('.blogs');
    blog.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  //

  sertificats.forEach((sertificat) => {
    sertificat.addEventListener('mouseover', (e) => {
      e.stopImmediatePropagation();
      watchedState.modal.viewedDiplomaId = arraySertisicats.indexOf(sertificat);
      watchedState.modal.active = true;
      sertificat.addEventListener('mouseout', (e) => {
        e.stopImmediatePropagation();
        watchedState.modal.viewedDiplomaId = null;
        watchedState.modal.active = false;
      });
    });
  });

  reviews[0].style.visibility = 'block';
  reviews.forEach((review) => {
    review.style.width = 300 + 'px';
    review.style.height = 100 + '%';
  });
  for (let i = 1; i <= watchedState.reviews.length - 1; i += 1) {
    reviews[i].style.display = 'none';
  }
  right_button.addEventListener('click', (e) => {
    e.preventDefault();
    left_button.disabled = false;
    if (
      watchedState.uiState.viewedReviewsId <
      watchedState.reviews.length - 2
    ) {
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

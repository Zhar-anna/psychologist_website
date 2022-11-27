import photo_image from './images/Photo.jpg';
import telegram_image from './images/Telegram.jpg';
import watsapp_image from './images/Watsapp.jpg';

export default (watchedState, elements) => {
  const { lang } = watchedState;
  const {
    watsapp,
    telegram,
    photo,
    sertificats,
  } = elements;
  watsapp.src = watsapp_image;
  telegram.src = telegram_image;
  photo.src = photo_image;
  watsapp.style.height = 30 + 'px';
  telegram.style.height = 30 + 'px';

};
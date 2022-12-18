import photo_image from './images/Photo.jpg';
import telegram_image from './images/Telegram.jpg';
import watsapp_image from './images/Watsapp.jpg';
// for (let i = 1; i <= 7; i += 1) {
//   import * as `diploma${i}` from `./images/Education/Диплом${i}.jpg`;
// }
import diploma0 from './images/Education/Диплом1.jpg';
import diploma1 from './images/Education/Диплом2.jpg';
import diploma2 from './images/Education/Диплом3.jpg';
import diploma3 from './images/Education/Диплом4.jpg';
import diploma4 from './images/Education/Диплом5.jpg';
import diploma5 from './images/Education/Диплом6.jpg';
import diploma6 from './images/Education/Диплом7.jpg';
import diploma7 from './images/Education/Диплом8.jpg';

export default (watchedState, elements, i18nextInstance) => {
  // const { lang } = watchedState;
  const {
    watsapp,
    telegram,
    photo,
    sertificats,
    disclamer,
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
    
    sertificat.style.width = 180 + 'px';
    sertificat.style.height = 250 + 'px';
  });
  watsapp.style.height = 30 + 'px';
  telegram.style.height = 30 + 'px';
  disclamer.innerHTML = i18nextInstance.t('disclamer');
};
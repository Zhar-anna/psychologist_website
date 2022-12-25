
import onChange from 'on-change';

const watch = (state, elements, i18nextInstance) => onChange(state, (path, value) => {
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
  if (path === 'uiState.viewedReviewsId') {
    // const activeReview = document.getElementById(`${value}`);
    // activeReview.style.display = 'block';
    reviews.forEach((review) => {
      if (review.id != value) {
        review.style.display = 'none';
      }
      else {
        review.style.display = 'block';
      }
    })
    
  }
});

export default watch;
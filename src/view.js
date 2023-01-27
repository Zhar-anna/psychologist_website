import onChange from 'on-change';

const watch = (state, elements, i18nextInstance) =>
  onChange(state, (path, value) => {
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
      overlay,
      modal,
      modal_diploma,
      modal_years,
      modal_description,
    } = elements;
    if (path === 'uiState.viewedReviewsId') {
      // const activeReview = document.getElementById(`${value}`);
      // activeReview.style.display = 'block';
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
  });

export default watch;

import 'jquery-bar-rating';

const initBarRating = () => {
  $('#star').barrating({
    theme: 'fontawesome-stars'
  });
};

export { initBarRating };

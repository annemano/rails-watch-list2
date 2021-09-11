import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["friends", "family members", "strangers", "the world!"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };

export const SWIPER_SELECTORS = {
  container: '.hero-container',
  containerClip: '.hero-container__clip',
  row: '.hero__row',
  line: '.hero__line',
  text: '.hero__text',
  slide: '.swiper-slide',
  scrollbar: '.swipper-scrollbar',
  dragHandle: '.drag-handle',
};

export const SWIPER_CSS_CLASSES = Object.entries(SWIPER_SELECTORS).reduce((acc, [k, v]) => ({ ...acc, [k]: v.replace('.', '' ) }), {});

export const SOCIAL_ITEMS = [
  { name: 'Email', url: 'mailto:rodrigogamadev@gmail.com' },
  { name: 'Github', url: 'https://github.com/rodrigogama' },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/rodrigo-gama-baptista/',
  },
  { name: 'Instagram', url: 'https://www.instagram.com/orodrigogama/' },
  { name: 'Medium', url: 'https://medium.com/@rodrigogamadev' },
];

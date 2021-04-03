export const getElementWidth = el => {
  if (!el) return 0;
  return parseFloat(getComputedStyle(el, null).width.replace('px', ''));
};

export const getElementHeight = el => {
  if (!el) return 0;
  return parseFloat(getComputedStyle(el, null).height.replace('px', ''));
};

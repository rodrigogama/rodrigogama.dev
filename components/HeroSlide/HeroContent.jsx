import React from 'react';
import { TitleLine, TitleRow, TitleText } from './styles';
import { SWIPER_CSS_CLASSES } from '../../utils/constants';

export const HeroContent = () => {
  return (
    <h2 className={SWIPER_CSS_CLASSES.container}>
      <TitleRow className={`${SWIPER_CSS_CLASSES.row} flex items-center justify-between`}>
        <TitleLine className={SWIPER_CSS_CLASSES.line} />
        <TitleText className={`${SWIPER_CSS_CLASSES.text} mr-auto pl3-l pl2`}>
          Hi, hello and
        </TitleText>
      </TitleRow>
      <TitleRow className={`${SWIPER_CSS_CLASSES.row} flex items-center justify-between`}>
        <TitleText className={`${SWIPER_CSS_CLASSES.text} ml-auto pr3-l pr2`}>
          {`welcome `}
          <img
            className="dib h4-l h2 v-btm"
            src="https://loveiko.com/img/me.png"
            alt="emoji"
          />
        </TitleText>
        <TitleLine className={SWIPER_CSS_CLASSES.line} />
      </TitleRow>
      <TitleRow className={`${SWIPER_CSS_CLASSES.row} flex items-center justify-between`}>
        <TitleLine className={SWIPER_CSS_CLASSES.line} />
        <TitleText className={`${SWIPER_CSS_CLASSES.text} mr-auto pl3-l pl2`}>stranger</TitleText>
      </TitleRow>
    </h2>
  );
};

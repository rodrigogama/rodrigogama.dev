import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroClipContainer, HeroContainer } from './styles';
import { SWIPER_CSS_CLASSES } from '../../utils/constants';

export const HeroSlide = () => {
  return (
    <div className="relative">
      <HeroContainer>
        <HeroContent />
      </HeroContainer>
      <HeroClipContainer className={SWIPER_CSS_CLASSES.containerClip}>
        <HeroContent />
      </HeroClipContainer>
    </div>
  );
};

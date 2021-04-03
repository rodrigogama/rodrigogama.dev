import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const MainContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-position: 0;
  background-size: auto;
  background-repeat: repeat;
  background-image: url(/static/img/noise.png);
`;

export const SwiperContainer = styled(Swiper)`
  height: 100%;
  padding: 120px 0;
  max-width: 1600px;

  & .swiper-wrapper {
    height: auto;
  }

  & .swiper-slide {
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    padding: 80px 32px 80px 0;
  }
`;

export const SwiperSlideContent = styled.div.attrs({
  className: 'w-75-l w-90 center',
})``;

export const SwipperScrollbar = styled.div`
  transform: scaleY(0);
  transform-origin: 50% 100%;
  overflow: hidden;
  width: 9px;
  height: 75vh;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translate(0, -50%);
  margin-top: 40px;
  z-index: 10;

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #bebebe;
    position: absolute;
    top: 0;
    left: 4px;
  }

  & .swiper-scrollbar-drag {
    width: 17px;
    height: 100%;
    position: relative;
    left: -4px;
    top: 0;

    &:hover {
      & .drag-handle::before {
        transform: scaleX(2);
        transform-origin: 50% 50%;
      }
    }

    & .drag-handle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: 50% 0;

      &::before {
        content: '';
        left: 7px;
        width: 3px;
        top: 0;
        background: #000;
        transition: transform 0.2s ease;
        position: absolute;
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    right: 20px;
    margin-top: 0;
  }
`;

export const SocialDot = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-width-background-position: 100%;
`;

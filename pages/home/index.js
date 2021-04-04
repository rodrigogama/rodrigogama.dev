import React from 'react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { HeroSlide } from '../../components/HeroSlide';
import { SOCIAL_ITEMS, SWIPER_SELECTORS } from '../../utils/constants';
import SwiperAnimation from '../../utils/swiper-animation';
import {
  MainContainer,
  SocialDot,
  SwiperContainer,
  SwiperSlideContent,
  SwipperScrollbar,
} from '../../styles/pages/home';

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel]);

const Home = () => {
  const hasInitialized = React.useRef(false);
  const SwiperAnimationRef = React.useRef(null);

  const handleOnSwiper = swiper => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;

      const instance = new SwiperAnimation({ selectors: SWIPER_SELECTORS });
      instance.init(swiper);
      SwiperAnimationRef.current = instance;
    }
  };

  const handleSlideProgress = (swiper, progress) => {
    const { current: instance } = SwiperAnimationRef;

    if (instance) {
      instance.animateOnProgress();
    }
  };

  return (
    <MainContainer className="main__container">
      <SwiperContainer
        autoHeight
        slidesPerView="auto"
        direction="vertical"
        freeMode
        mousewheel={{ eventsTarget: '.main__container' }}
        touchRatio={1}
        watchSlidesProgress
        scrollbar={{
          dragSize: 100,
          draggable: true,
          snapOnRelease: true,
          hide: false,
          el: '.swipper-scrollbar',
        }}
        onSwiper={handleOnSwiper}
        onProgress={handleSlideProgress}
      >
        <SwiperSlide>
          <SwiperSlideContent>
            <HeroSlide />
          </SwiperSlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent className="mt5-l mt4">
            <div className="ph0 flex flex-row-l flex-column justify-between-l justify-start items-start relative bt pt4 mb5-l">
              <article className="w-50-l w-100">
                <p className="lh-copy db-l f6 fw4 ma0 w-50-l"> Intro —— </p>
              </article>
              <article className="w-50-l w-100 pt4 pt0-l">
                <h3 className="ma0 lh-title f2-l f3 fw4">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                </h3>
                <h3 className="ma0 lh-title f2-l f3 pt4 fw4">
                  {`Proin viverra magna tellus, nec faucibus augue iaculis vel. Phasellus ut laoreet felis.`}
                </h3>
              </article>
            </div>
          </SwiperSlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent className="mt4-l mt4">
            <div className="ph0 flex flex-row-l flex-column justify-between-l justify-start items-start relative pb5-l mb4">
              <article className="w-50-l w-100 pr4-l">
                {SOCIAL_ITEMS.map(e => (
                  <a
                    className="lh-copy db f3-l f4 fw4 ma0 w-50-l bt pv2  no-underline bg-animate hover-bg-black black hover-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={e.name}
                    href={e.url}
                  >
                    <p className="pl2-l">
                      <SocialDot>●</SocialDot>
                      {` ${e.name}`}
                    </p>
                  </a>
                ))}
              </article>
              <article className="w-50-l w-100 mt0-l bt pt5-l pt4 pb4-l pb0-l ">
                <h3 className="ma0 lh-solid f-6-l f1 fw4 tc ttu">
                  con → → <br /> ← ← nect
                </h3>
              </article>
            </div>
          </SwiperSlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent as="article">
            <p className="lh-title f-5-l f1 fw4 pt4 bt w-75-l w-100">
              <span className="light-red">●</span>
              {` What I am`}
              <br className="db-l dn" />
              good at
            </p>
            <div className="w-75-l w-100 mt4 fr-l pl3-l">
              <p className="lh-title f2-l f3 fw4 pt4 bt ">
                {/* {`I position myself as a Creative Director, but I'm always happy
                  to craft ideas and visions with my Designer's hands `}
                <span className="dib">
                  <img
                    src="https://loveiko.com/img/hands.png"
                    alt="hands emoji"
                    className="dib h2-5-l h2 v-mid pb2"
                  />
                </span>
                {` I stand for a good human story, delivered in the most offbeat way.`} */}
                Morbi accumsan eleifend odio. In lobortis arcu ut lacus tempus, sit amet pretium lorem accumsan. Nam a enim vel sem imperdiet dictum vel vitae mauris. Sed hendrerit nunc metus, vitae fermentum nibh vestibulum non. Maecenas nec ultricies lectus, et faucibus libero.
              </p>
              <p className="lh-title f2-l f3 fw4 pt4 ">
                {`Cras aliquet lectus tortor at `}
                <span className="ba ph2 pb1 lh-copy">dictum tortor</span>{' '}
                <span className="ba br-pill ph3 pb1 lh-copy">nullas</span>{' '}
                <span className="ba ph2 pb1 lh-copy">mattis</span>{' '}
                <span className="ba br-pill ph3 pb1 lh-copy">metus</span>
                {` and `}
                <span className="ba ph2 pb1 lh-copy">lacinia</span>{' '}
                <span className="ba ph2 pb1 lh-copy">nec</span>.
              </p>
            </div>
          </SwiperSlideContent>
        </SwiperSlide>
      </SwiperContainer>
      <SwipperScrollbar className="swipper-scrollbar" />
    </MainContainer>
  );
};

export default Home;

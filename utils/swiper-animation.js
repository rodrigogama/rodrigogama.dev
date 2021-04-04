import { TimelineLite } from 'gsap/dist/gsap';
import { getElementHeight, getElementWidth } from '../utils';

class SwiperAnimation {
  constructor({ selectors }) {
    this.cssSelectors = selectors;
    this.swiperSlider = null;
    this.swiperSliderHeight = false;
    this.isLinesReady = false;
  }

  init(instance) {
    this.swiperSlider = instance;
    this.swiperSliderHeight = this._getScrollHeight();

    this._createScrollbarDrag();
    this._addClip();
    this._animateScrollbar();
  }

  animateOnProgress() {
    const sliderPosition = this.swiperSliderHeight / getElementHeight(document.querySelector(this.cssSelectors.container));
    const { progress } = this.swiperSlider;
    const scrollProgress = progress * sliderPosition;

    if (this.isLinesReady && scrollProgress > 0 && scrollProgress < 1) {
      this._moveLines(scrollProgress);
    }
  }

  _addClip() {
    const containerClip = document.querySelector(this.cssSelectors.containerClip)
    const n = {
      x: 0,
      y: 0,
      width: getElementWidth(containerClip),
      height: getElementHeight(containerClip),
    };
    document.querySelector(this.cssSelectors.containerClip).style.clip = `rect(${n.y}px, ${(n.width + n.x)}px, ${(n.height + n.y + 3)}px, ${n.x}px)`;
  }

  _createScrollbarDrag() {
    const dragHandle = document.createElement('div');
    dragHandle.classList.add('drag-handle');
    this.swiperSlider.scrollbar.dragEl.appendChild(dragHandle);
  }

  _animateScrollbar() {
    const scrollbar = document.querySelector(this.cssSelectors.scrollbar);
    const scrollbarDrag = document.querySelector(this.cssSelectors.dragHandle);
    const scrollbarHeight = getElementHeight(scrollbar) / getElementHeight(scrollbarDrag);

    const windowHeight = window.innerWidth;

    const linesTl = this._animateLines();
    const scrollbarTl = new TimelineLite();

    scrollbarTl
      .set(scrollbarDrag, {
        scaleY: scrollbarHeight,
      })
      .fromTo(
        scrollbar,
        {
          scaleY: 0,
          duration: 1,
        },
        {
          scaleY: 1,
          ease: 'expo.inOut',
          duration: 1,
        },
      )
      .fromTo(
        scrollbarDrag,
        { scaleY: scrollbarHeight, duration: 1.5 },
        {
          scaleY: 1,
          ease: 'expo.inOut',
          duration: 1.5,
        },
      )
      .fromTo(
        this.cssSelectors.container,
        {
          y: '100vh',
          duration: 1.5,
        },
        {
          duration: 1.5,
          y: 0,
          ease: 'expo.inOut',
          onStart: () => {
            this._setLinesWidth();
          },
          onComplete: () => {
            linesTl.play();
          },
        },
        '-=1.5',
      )
      .fromTo(
        `${this.cssSelectors.slide}:not(:first-child)`,
        {
          duration: 1,
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
      );
  }

  _setLinesWidth() {
    this.isLinesReady = false;

    document
      .querySelectorAll(this.cssSelectors.container)
      .forEach(container => {
        container
          .querySelectorAll(this.cssSelectors.row)
          .forEach((row, rowIndex) => {
            const line = row.querySelector(this.cssSelectors.line);
            const text = row.querySelector(this.cssSelectors.text);

            const isRowIndexEven = Boolean(rowIndex % 2);
            const multiplier = isRowIndexEven ? 1 : -1;
            const lineWidth =
              getElementWidth(container) - getElementWidth(text);

            const tl = new TimelineLite();
            tl.to(line, {
              width: lineWidth,
              scaleX: 0,
            }).set(text, { x: lineWidth * multiplier });
          });
      });
  }

  _animateLines() {
    const tl = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.isLinesReady = true;
        tl.kill();
        this.animateOnProgress();
      },
    });

    const lines = document.querySelectorAll(this.cssSelectors.line);
    const texts = document.querySelectorAll(this.cssSelectors.text);

    return tl
      .to(lines, { duration: 1, scaleX: 1, ease: 'expo.inOut' })
      .to(texts, { duration: 1, x: 0, ease: 'expo.inOut' }, '-=1');
  }

  _moveLines(scrollProgress) {
    document
      .querySelectorAll(this.cssSelectors.container)
      .forEach(container => {
        container
          .querySelectorAll(this.cssSelectors.row)
          .forEach((row, rowIndex) => {
            const line = row.querySelector(this.cssSelectors.line);
            const text = row.querySelector(this.cssSelectors.text);

            const isRowIndexEven = Boolean(rowIndex % 2);
            const multiplier = isRowIndexEven ? 1 : -1;
            const remainingWidth =
              getElementWidth(container) - getElementWidth(text);

            const tl = new TimelineLite();

            tl.to(line, {
              duration: 0.5,
              scaleX: 1 - scrollProgress,
            }).to(
              text,
              {
                duration: 0.5,
                x: scrollProgress * remainingWidth * multiplier,
              },
              '-=0.5',
            );
          });
      });
  }

  _getScrollHeight() {
    const slides = [...document.querySelectorAll(this.cssSelectors.slide)];
    const scrollHeight = slides.reduce((acc, curr) => {
      return (acc += getElementHeight(curr));
    }, 0);

    return scrollHeight;
  }
}

export default SwiperAnimation;

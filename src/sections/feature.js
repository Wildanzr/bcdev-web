import React, { useRef } from 'react';
import { Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Swiper from 'react-id-swiper';

import FeatureCard from 'components/feature-card';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import ev1 from 'assets/ev1.png';
import ev2 from 'assets/ev2.png';
import ev3 from 'assets/ev3.png';
import sk1 from 'assets/sk1.png';
import sk2 from 'assets/sk2.png';
import sk3 from 'assets/sk3.png';
import ol1 from 'assets/ol1.png';
import ol2 from 'assets/ol2.png';
import ol3 from 'assets/ol3.png';

const FeatureData = [
  {
    image: [
      ev1, ev2, ev3
    ],
    title: 'EventPlus Landing Page',
    comments: '22 Comments',
    path: '/',
  },
  {
    image: [
      ol1, ol2, ol3
    ],
    title: 'Online Learning System',
    comments: '15 Comments',
    path: '/',
  },
  {
    image: [
      sk1, sk2, sk3
    ],
    title: 'Sakinah Residence Marketing Website',
    comments: '12 Comments',
    path: '/',
  },
];

const Feature = () => {
  const ref = useRef(null);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Box sx={styles.features} id="showcase">
      <Container>
        <BlockTitle
          slogan="Showcase"
          title="Apa yang kami kerjakan"
          styles={styles.blockTitle}
        />

        <Swiper {...params} ref={ref}>
          {FeatureData.map((feature, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                commentCount={feature.comments}
                path={feature.path}
              />
            </div>
          ))}
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;

const styles = {
  blockTitle: {
    textAlign: 'center',
  },
  features: {
    pt: ['80px', null, null, null, null, null, '120px'],
    pb: ['80px', null, null, null, '170px'],
    backgroundColor: '#F8FAFC',
    '.swiper-slider': {
      overflowY: 'visible',
      overflowX: 'hidden',
    },
  },
  carouselBtns: {
    display: ['flex', null, null, null, null, 'none'],
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: [2, null, 4, null, 5],
      color: '#BBC7D7',
      width: 'auto',
      padding: [0],
      margin: '0 5px',
      mt: '15px',
      transition: '500ms',
      '&:hover, &:active, &:focus': {
        color: 'primary',
      },
    },
  },
};

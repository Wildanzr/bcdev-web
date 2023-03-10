import React, { useState } from 'react';
import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Text, Heading } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import img1 from 'assets/3.jpg';
import img2 from 'assets/2.jpg';
import img3 from 'assets/1.jpg';

SwiperCore.use([Thumbs, Autoplay]);

const TESTIMONIALS_DATA = [
  {
    image: img1,
    heading: 'Utara Setya Wardaya',
    designation: 'CEO Event Plus',
    content:
      'Pembuatan landing page-nya luar biasa, terlihat profesional dan bener-bener eye-catching!',
  },
  {
    image: img2,
    heading: 'Abdul Kholid',
    designation: 'Owner of Sakinah Residence',
    content:
      'Website marketing perumahan yang dibuat sangat informatif dan mudah dipahami. Saya senang dengan hasilnya dan yakin akan meningkatkan penjualan.',
  },
  {
    image: img3,
    heading: 'Mardhatillah',
    designation: 'Lecturer at University Bina Banga Gatsempena',
    content:
      'Saya terkesan dengan hasil pembuatan aplikasi e-learning, saya melihat perubahan positif dalam kualitas pembelajaran siswa. Hasil penerapan e-learning di sekolah saya menunjukkan efektivitasnya dalam meningkatkan pemahaman siswa serta memberikan pengalaman belajar yang bagus.',
  }
];

const Testimonials = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const infoParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <Container>
        <BlockTitle
          slogan="Testimoni Pelanggan"
          title="Apa yang mereka katakan tentang kami?"
          styles={styles.blockTitle}
        />
        <Swiper
          id="testimonialsContent"
          thumbs={{ swiper: thumbsSwiper }}
          {...contentParams}
        >
          {TESTIMONIALS_DATA.map((testimonialText, index) => (
            <SwiperSlide key={`testimonial-content-${index}`}>
              <Text sx={styles.testimonialsContent} as="p">
                {testimonialText.content}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          id="testimonialsInfo"
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          {...infoParams}
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <SwiperSlide key={`testimonial-info-${index}`}>
              <Image src={testimonial.image} alt="testimonials image" css={{ width: '50px', height: '50px', objectFit: 'cover', objectPosition: 'center' }} />
              <Heading as="h3">{testimonial.heading}</Heading>
              <Text as="span">{testimonial.designation}</Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    pt: ['65px', null, null, null, null, '80px', '170px'],
    '.blockTitle': {
      textAlign: 'center',
      marginBottom: ['25px', null, null, null, null, '50px'],
    },
    '#testimonialsInfo': {
      textAlign: ['center', null, null, null, null, 'left'],
      marginTop: ['30px', null, null, null, '40px', '50px'],
      width: '100%',
      maxWidth: '820px',
      '.swiper-slide': {
        cursor: 'pointer',
        borderTop: [
          '5px solid transparent',
          null,
          null,
          null,
          null,
          '5px solid transparent',
        ],
        position: 'relative',
        paddingLeft: ['0', null, null, null, null, '75px'],
        paddingTop: ['0', null, null, null, null, '25px'],
        paddingBottom: ['0', null, null, null, null, '15px'],
        minHeight: ['auto', null, null, null, null, '50px'],
        '&.swiper-slide-thumb-active': {
          borderColor: '#8D448B',
        },
      },
      img: {
        borderRadius: '50%',
        display: 'block',
        marginLeft: ['auto', null, null, null, null, '0'],
        marginRight: ['auto', null, null, null, null, '0'],
        marginBottom: ['15px', null, null, null, null, '0'],
        position: ['relative', null, null, null, null, 'absolute'],
        top: ['auto', null, null, null, null, '50%'],
        left: ['auto', null, null, null, null, '10px'],
        mt: ['10px', null, null, null, null, 0],
        transform: [
          'translateY(0)',
          null,
          null,
          null,
          null,
          'translateY(calc(-50% + 8px))',
        ],
      },
      h3: {
        fontSize: ['18px', null, 2, null, 3],
        lineHeight: 1,
        color: 'black',
        display: ['none', null, 'block'],
      },
      span: {
        color: 'text',
        opacity: '0.8',
        fontSize: [15, null, '15px'],
        lineHeight: 1,
        display: 'block',
        display: ['none', null, 'block'],
        marginTop: '10px',
      },
    },
  },
  testimonialsContent: {
    margin: 0,
    fontSize: [2, null, 3, null, 4, '32px', 7],
    color: 'black',
    lineHeight: [2.3, null, 1.8],
    textAlign: 'center',
    fontFamily: 'special',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '820px',
    marginTop: ['0', null, null, null, null, '-15px'],
  },
};

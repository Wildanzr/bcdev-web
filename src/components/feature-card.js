import React, { useState } from 'react';
import { Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';
import { Image as AntImage } from 'antd'

import CommentIcon from 'assets/comment-1.svg';

const FeatureCard = (props) => {
  // Local States
  const [visible, setVisible] = useState(false);

  return (
    <Box sx={styles.fevCard}>
      <Box className="image" sx={styles.image}>
        <AntImage
        preview={{
          visible: false,
        }}
        width={'100%'}
        src={props.image[0]}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
        <AntImage.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <AntImage src={props.image[0]} />
          <AntImage src={props.image[1]} />
          <AntImage src={props.image[2]} />
        </AntImage.PreviewGroup>
      </div>
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">
          <Link path={props.path} >{props.title}</Link>
        </Heading>
        {/* <Text as="p">
          <Image src={CommentIcon} alt="" />
          {props.commentCount}
        </Text> */}
      </Box>
    </Box>
  );
};

export default FeatureCard;

const styles = {
  fevCard: {
    transition: '500ms',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
  },
  image: {
    overflow: 'hidden',
    borderTopLeftRadius: ['5px'],
    borderTopRightRadius: ['5px'],
    img: {
      display: 'block',
      width: '100%',
    },
  },
  content: {
    backgroundColor: '#fff',
    paddingLeft: [20, null, null, '30px'],
    paddingRight: [20, null, null, '30px'],
    paddingTop: ['15px', null, null, '25px'],
    borderBottomLeftRadius: ['5px'],
    borderBottomRightRadius: ['5px'],
    pb: ['10px', null, null, null, '30px'],
    border: '1px solid #F3F4F5',
    borderTop: '0',
    h3: {
      fontWeight: 'bold',
      fontSize: ['18px', null, '17px', null, 3],
      lineHeight: [1.55],
      a: {
        transition: '500ms',
        '&:hover': {
          color: 'primary',
        },
      },
    },
    p: {
      display: 'flex',
      alignItems: 'center',
      fontSize: [1, null, 2],
      lineHeight: [2],
      color: 'text',
      opacity: 0.8,
      mt: ['4px'],
      img: {
        width: ['16px', null, 'auto'],
        mr: ['8px'],
      },
    },
  },
};

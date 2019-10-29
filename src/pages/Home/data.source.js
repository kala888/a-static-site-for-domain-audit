import React from 'react';
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: (
            <>
              <p>BiuBiu</p>
            </>
          ),
        },
        content: {
          className: 'banner2-content',
          children: (
            <>
              <p>怪！学习记录生活</p>
            </>
          ),
        },
        button: { className: 'banner2-button', children: 'Learn More' },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <>
        <p>CSS管理</p>
      </>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <>
        <p>高效</p>
      </>
    ),
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <p>
          <span>
            ©2019&nbsp;<a href="https://motion.ant.design">B</a>iuBiuguai All
            Rights Reserved
          </span>
        </p>
      </>
    ),
  },
};

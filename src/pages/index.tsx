import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SideBar from '@/components/Sidebar';
import CategoryBar from '@/components/Categorybar';
import Post from '@/components/Post';
import Tabpost from '@/components/Tabpost';
import { PostInfo } from '@/components/Post';
import bg1 from '@/images/bg1.jpg';
import bg2 from '@/images/bg2.jpg';
import b1 from '@/images/b1.jpg';
import b2 from '@/images/b2.jpg';
import b3 from '@/images/b3.jpg';
import b4 from '@/images/b4.jpg';
import b5 from '@/images/b5.jpg';
import b6 from '@/images/b6.jpg';
import b7 from '@/images/b7.jpg';
import b8 from '@/images/b8.jpg';
import b10 from '@/images/b10.jpg';
import b11 from '@/images/b11.jpg';
import b12 from '@/images/b12.jpg';
import b13 from '@/images/b13.jpg';
import b14 from '@/images/b14.jpg';
import b15 from '@/images/b15.jpg';
import b16 from '@/images/b16.jpg';
import b17 from '@/images/b17.jpg';
import b18 from '@/images/b18.jpg';
import b19 from '@/images/b19.jpg';
import b20 from '@/images/b20.jpg';
import b21 from '@/images/b21.jpg';
import LoadMore from '@/components/Loadmore';
import Header from '@/components/Header';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

const headerBackground = [
  {
    img: bg1,
  },
  {
    img: bg2,
  },
];

const headerInfo = [
  {
    key: 1,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex',
    href: '/',
  },
  {
    key: 2,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex',
    href: '/',
  },
  {
    key: 3,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex',
    href: '/',
  },
  {
    key: 4,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex',
    href: '/',
  },
];

const bb1 = 'Stock_Market_Memes_1_02faf7cff4.jpg';
const bb2 = 'c9lg95srmj521_16ec778344.png';
const bb3 = 'rainbow_cat_rainbow_81e9b06053.gif';

const doNotMissSquarePostInfo: PostInfo[] = [
  {
    postType: 'square',
    delay: '0.0s',
    blogClass: 'single-blog-post',
    h5Class: '',
    thumbnail: bb1,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One\
    of the Most Complex Concepts in...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: 'post-cta',
  },
  {
    postType: 'square',
    delay: '0.0s',
    blogClass: 'single-blog-post',
    h5Class: '',
    thumbnail: bb2,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One\
    of the Most Complex Concepts in...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: 'post-cta',
  },
  {
    postType: 'square',
    delay: '0.0s',
    blogClass: 'single-blog-post',
    h5Class: '',
    thumbnail: bb3,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One\
    of the Most Complex Concepts in...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: 'post-cta',
  },
];

const trendingSquarePostInfo: PostInfo[] = [
  {
    postType: 'square',
    delay: '0.2s',
    blogClass: 'single-blog-post wow fadeInUpBig',
    h5Class: '',
    thumbnail: b2,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One\
    of the Most Complex Concepts in...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: 'post-cta',
  },
  {
    postType: 'square',
    delay: '0.3s',
    blogClass: 'single-blog-post wow fadeInUpBig',
    h5Class: '',
    thumbnail: b3,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One\
    of the Most Complex Concepts in...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: 'post-cta',
  },
];

const doNotMissMidPostInfo: PostInfo[] = [
  {
    postType: 'mid',
    delay: '0.2s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig',
    h5Class: '',
    thumbnail: b10,
    title: 'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
  {
    postType: 'mid',
    delay: '0.3s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig',
    h5Class: '',
    thumbnail: b11,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
  {
    postType: 'mid',
    delay: '0.4s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig',
    h5Class: '',
    thumbnail: b12,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
  {
    postType: 'mid',
    delay: '0.5s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig',
    h5Class: '',
    thumbnail: b13,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
];

const trendingMidPostInfo: PostInfo[] = [
  {
    postType: 'mid',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-2 d-flex align-items-center mb-1',
    h5Class: '',
    thumbnail: b14,
    title: 'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
  {
    postType: 'mid',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-2 d-flex align-items-center mb-1',
    h5Class: '',
    thumbnail: b15,
    title: 'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
  {
    postType: 'mid',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-2 d-flex align-items-center mb-1',
    h5Class: '',
    thumbnail: b16,
    title: 'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
  {
    postType: 'mid',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-2 d-flex align-items-center mb-1',
    h5Class: '',
    thumbnail: b17,
    title: 'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
    travelClass: '',
  },
];

const picturePostInfo: PostInfo[] = [
  {
    postType: 'picture',
    delay: '0.2s',
    blogClass: 'single-blog-post post-style-3 mt-50 wow fadeInUpBig',
    travelClass:
      'post-content d-flex align-items-center justify-content-between',
    h5Class: 'post-content',
    thumbnail: b4,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'picture',
    delay: '0.4s',
    blogClass: 'single-blog-post post-style-3 mt-50 wow fadeInUpBig',
    travelClass:
      'post-content d-flex align-items-center justify-content-between',
    h5Class: 'post-content',
    thumbnail: b5,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'picture',
    delay: '0.6s',
    blogClass: 'single-blog-post post-style-3 mt-50 wow fadeInUpBig',
    travelClass:
      'post-content d-flex align-items-center justify-content-between',
    h5Class: 'post-content',
    thumbnail: b6,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',
    href: '/',
    paragraph: '',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
];

const latestArticleInfo: PostInfo[] = [
  {
    postType: 'long',
    delay: '0.2s',
    blogClass:
      'single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig',
    travelClass: '',
    h5Class: '',
    thumbnail: b18,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',
    href: '/',
    paragraph:
      ' Pick the yellow peach that looks like a sunset with its \
      red, orange, and pink coat skin, peel it off with your \
      teeth. Sink them into unripened...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.3s',
    blogClass:
      'single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig',
    travelClass: '',
    h5Class: '',
    thumbnail: b19,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      ' Pick the yellow peach that looks like a sunset with its \
      red, orange, and pink coat skin, peel it off with your \
      teeth. Sink them into unripened...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.4s',
    blogClass:
      'single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig',
    travelClass: '',
    h5Class: '',
    thumbnail: b20,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      ' Pick the yellow peach that looks like a sunset with its \
      red, orange, and pink coat skin, peel it off with your \
      teeth. Sink them into unripened...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.5s',
    blogClass:
      'single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig',
    travelClass: '',
    h5Class: '',
    thumbnail: b21,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      ' Pick the yellow peach that looks like a sunset with its \
      red, orange, and pink coat skin, peel it off with your \
      teeth. Sink them into unripened...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
];

const videoPostInfo: PostInfo[] = [
  {
    postType: 'video',
    delay: '0.2s',
    blogClass: 'single-blog-post wow fadeInUpBig',
    travelClass: 'post-cta',
    h5Class: '',
    thumbnail: b7,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One\
    of the Most Complex Concepts in...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink:
      'https://www.youtube.com/watch?v=tQ0yjYUFKAE&ab_channel=JustinBieberVEVO',
  },
  {
    postType: 'video',
    delay: '0.4s',
    blogClass: 'single-blog-post wow fadeInUpBig',
    travelClass: 'post-cta',
    h5Class: '',
    thumbnail: b8,
    title:
      'How Did van Gogh’s Turbulent Mind Depict\
    One of the Most Complex Concepts in\
    Physics?',

    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One\
    of the Most Complex Concepts in...',

    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink:
      'https://www.youtube.com/watch?v=WFsAon_TWPQ&ab_channel=CharliePuth',
  },
];

export async function getStaticProps() {
  const res = await fetch(
    'http://3.138.183.244:1337/api/artificial-intelligences/1',
  );
  const ai = await res.json();
  const data = ai.data;
  return {
    props: { data },
  };
}

export default function Home({ data }: any) {
  return (
    <div>
      <div className="hero-area">
        {/* <!-- Hero Slides Area --> */}
        <div className="hero-slides">
          <OwlCarousel
            className="owl-carousel"
            items={1}
            margin={0}
            loop={true}
            dots={false}
            autoplay={true}
            autoplayTimeout={7000}
            smartSpeed={2000}
            animateIn={'fadeIn'}
            animateOut={'fadeOut'}
            mouseDrag={false}
            touchDrag={false}
          >
            {headerBackground.map(({ img }, i) => (
              <Header
                key={i}
                className={'single-hero-slide bg-img background-overlay'}
                pic={img}
              />
            ))}
          </OwlCarousel>
        </div>

        {/* <!-- Hero Post Slide --> */}
        <div className="hero-post-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-post-slide">
                  {/* <!-- Single Slide --> */}
                  <OwlCarousel
                    className={'owl-carousel'}
                    items={3}
                    margin={30}
                    loop={true}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={3500} // Autoplay Timeout 1s = 1000ms
                    smartSpeed={1000}
                    center={true}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      768: {
                        items: 3,
                      },
                    }}
                  >
                    {headerInfo.map(({ key, title, href }) => (
                      <div
                        key={key}
                        className="single-slide d-flex align-items-center"
                      >
                        <div className="post-number">
                          <p>{key}</p>
                        </div>
                        <div className="post-title">
                          <Link href={href}>
                            <a>{title}</a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- ============= Post Content Area Start ============= --> */}
            <div className="col-12 col-lg-8">
              <div className="post-content-area mb-50">
                {/* <!-- Category Area --> */}
                {/* Don't Miss Section */}
                <div className="world-catagory-area">
                  {/* Don’t Miss */}
                  <CategoryBar
                    title={data.attributes.AI_Contents}
                    tabID={'myTab'}
                  />
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="world-tab-1"
                      role="tabpanel"
                      aria-labelledby="tab1"
                    >
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div
                            className="world-catagory-slider wow fadeInUpBig"
                            data-wow-delay="0.1s"
                          >
                            <OwlCarousel
                              className="owl-carousel"
                              items={1}
                              margin={0}
                              loop={true}
                              dots={false}
                              autoplay={true}
                              autoplayTimeout={6000} // Autoplay Timeout 1s = 1000ms
                              smartSpeed={2000}
                              nav={true}
                              navText={[
                                '<i class="bi bi-caret-left-fill" />',
                                '<i class="bi bi-caret-right-fill" />',
                              ]}
                            >
                              {doNotMissSquarePostInfo.map(
                                (
                                  {
                                    postType,
                                    blogClass,
                                    delay,
                                    travelClass,
                                    h5Class,
                                    thumbnail,
                                    title,
                                    href,
                                    paragraph,
                                    author,
                                    time,
                                    videoLink,
                                  },
                                  i,
                                ) => (
                                  <Post
                                    key={i}
                                    postType={postType}
                                    delay={delay}
                                    blogClass={blogClass}
                                    travelClass={travelClass}
                                    h5Class={h5Class}
                                    thumbnail={thumbnail}
                                    title={title}
                                    href={href}
                                    paragraph={paragraph}
                                    author={author}
                                    time={time}
                                    videoLink={videoLink}
                                  />
                                ),
                              )}
                            </OwlCarousel>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          {doNotMissMidPostInfo.map(
                            (
                              {
                                postType,
                                blogClass,
                                delay,
                                travelClass,
                                h5Class,
                                thumbnail,
                                title,
                                href,
                                paragraph,
                                author,
                                time,

                                videoLink,
                              },
                              i,
                            ) => (
                              <Post
                                key={i}
                                postType={postType}
                                delay={delay}
                                blogClass={blogClass}
                                travelClass={travelClass}
                                h5Class={h5Class}
                                thumbnail={thumbnail}
                                title={title}
                                href={href}
                                paragraph={paragraph}
                                author={author}
                                time={time}
                                videoLink={videoLink}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-2"
                      role="tabpanel"
                      aria-labelledby="tab2"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-3"
                      role="tabpanel"
                      aria-labelledby="tab3"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-4"
                      role="tabpanel"
                      aria-labelledby="tab4"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-5"
                      role="tabpanel"
                      aria-labelledby="tab5"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-6"
                      role="tabpanel"
                      aria-labelledby="tab6"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-7"
                      role="tabpanel"
                      aria-labelledby="tab7"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-8"
                      role="tabpanel"
                      aria-labelledby="tab8"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-9"
                      role="tabpanel"
                      aria-labelledby="tab9"
                    ></div>
                  </div>
                </div>
                {/* What's Trending Section */}
                {/* 'What’s Trending' */}
                <div className="world-catagory-area mt-50">
                  <CategoryBar title={'What’s Trending'} tabID={'myTab2'} />
                  <div className="tab-content" id="myTabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="world-tab-10"
                      role="tabpanel"
                      aria-labelledby="tab10"
                    >
                      <div className="row">
                        {trendingSquarePostInfo.map(
                          (
                            {
                              postType,
                              blogClass,
                              delay,
                              travelClass,
                              h5Class,
                              thumbnail,
                              title,
                              href,
                              paragraph,
                              author,
                              time,

                              videoLink,
                            },
                            i,
                          ) => (
                            <Tabpost
                              key={i}
                              postType={postType}
                              delay={delay}
                              blogClass={blogClass}
                              travelClass={travelClass}
                              h5Class={h5Class}
                              thumbnail={thumbnail}
                              title={title}
                              href={href}
                              paragraph={paragraph}
                              author={author}
                              time={time}
                              videoLink={videoLink}
                            />
                          ),
                        )}

                        <div className="col-12">
                          <div
                            className="world-catagory-slider2 wow fadeInUpBig"
                            data-wow-delay="0.4s"
                          >
                            {/* <!-- ========= Single Catagory Slide ========= --> */}
                            <OwlCarousel
                              className="owl-carousel"
                              items={1}
                              margin={0}
                              loop={true}
                              dots={false}
                              autoplay={true}
                              autoplayTimeout={6000} // Autoplay Timeout 1s = 1000ms
                              smartSpeed={2000}
                              nav={true}
                              navText={[
                                '<i class="bi bi-caret-left-fill" />',
                                '<i class="bi bi-caret-right-fill" />',
                              ]}
                            >
                              <div className="single-cata-slide">
                                <div className="row">
                                  {trendingMidPostInfo.map(
                                    (
                                      {
                                        postType,
                                        blogClass,
                                        delay,
                                        travelClass,
                                        h5Class,
                                        thumbnail,
                                        title,
                                        href,
                                        paragraph,
                                        author,
                                        time,
                                        videoLink,
                                      }: PostInfo,
                                      i: number,
                                    ) => (
                                      <Tabpost
                                        key={i}
                                        postType={postType}
                                        delay={delay}
                                        blogClass={blogClass}
                                        travelClass={travelClass}
                                        h5Class={h5Class}
                                        thumbnail={thumbnail}
                                        title={title}
                                        href={href}
                                        paragraph={paragraph}
                                        author={author}
                                        time={time}
                                        videoLink={videoLink}
                                      />
                                    ),
                                  )}
                                </div>
                              </div>
                              <div className="single-cata-slide">
                                <div className="row">
                                  {trendingMidPostInfo.map(
                                    (
                                      {
                                        postType,
                                        blogClass,
                                        delay,
                                        travelClass,
                                        h5Class,
                                        thumbnail,
                                        title,
                                        href,
                                        paragraph,
                                        author,
                                        time,
                                        videoLink,
                                      },
                                      i,
                                    ) => (
                                      <Tabpost
                                        key={i}
                                        postType={postType}
                                        delay={delay}
                                        blogClass={blogClass}
                                        travelClass={travelClass}
                                        h5Class={h5Class}
                                        thumbnail={thumbnail}
                                        title={title}
                                        href={href}
                                        paragraph={paragraph}
                                        author={author}
                                        time={time}
                                        videoLink={videoLink}
                                      />
                                    ),
                                  )}
                                </div>
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-11"
                      role="tabpanel"
                      aria-labelledby="tab11"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-12"
                      role="tabpanel"
                      aria-labelledby="tab12"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-13"
                      role="tabpanel"
                      aria-labelledby="tab13"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-14"
                      role="tabpanel"
                      aria-labelledby="tab14"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-15"
                      role="tabpanel"
                      aria-labelledby="tab15"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-16"
                      role="tabpanel"
                      aria-labelledby="tab16"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-17"
                      role="tabpanel"
                      aria-labelledby="tab17"
                    ></div>

                    <div
                      className="tab-pane fade"
                      id="world-tab-18"
                      role="tabpanel"
                      aria-labelledby="tab18"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== Sidebar Area ========== */}
            <div className="col-12 col-md-8 col-lg-4">
              <SideBar />
            </div>
          </div>

          <div className="row justify-content-center">
            {/* ========== Picture Post Section ========== */}
            {picturePostInfo.map(
              (
                {
                  postType,
                  delay,
                  blogClass,
                  travelClass,
                  h5Class,
                  thumbnail,
                  title,
                  href,
                  paragraph,
                  author,
                  time,
                  videoLink,
                },
                i,
              ) => (
                <Tabpost
                  key={i}
                  postType={postType}
                  delay={delay}
                  blogClass={blogClass}
                  travelClass={travelClass}
                  h5Class={h5Class}
                  thumbnail={thumbnail}
                  title={title}
                  href={href}
                  paragraph={paragraph}
                  author={author}
                  time={time}
                  videoLink={videoLink}
                />
              ),
            )}
          </div>

          {/* Latest Article Section */}
          <div className="world-latest-articles">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="title">
                  <h5>Latest Articles</h5>
                </div>

                {latestArticleInfo.map(
                  (
                    {
                      postType,
                      delay,
                      travelClass,
                      h5Class,
                      thumbnail,
                      title,
                      href,
                      paragraph,
                      author,
                      time,
                      blogClass,

                      videoLink,
                    },
                    i,
                  ) => (
                    <Post
                      key={i}
                      postType={postType}
                      delay={delay}
                      blogClass={blogClass}
                      travelClass={travelClass}
                      h5Class={h5Class}
                      thumbnail={thumbnail}
                      title={title}
                      href={href}
                      paragraph={paragraph}
                      author={author}
                      time={time}
                      videoLink={videoLink}
                    />
                  ),
                )}
              </div>

              <div className="col-12 col-lg-4">
                <div className="title">
                  <h5>Most Popular Videos</h5>
                </div>

                {/* // <!-- Single Blog Post --> */}
                {videoPostInfo.map(
                  (
                    {
                      postType,
                      delay,
                      travelClass,
                      h5Class,
                      thumbnail,
                      title,
                      href,
                      paragraph,
                      author,
                      time,
                      blogClass,

                      videoLink,
                    },
                    i,
                  ) => (
                    <Post
                      key={i}
                      postType={postType}
                      delay={delay}
                      blogClass={blogClass}
                      travelClass={travelClass}
                      h5Class={h5Class}
                      thumbnail={thumbnail}
                      title={title}
                      href={href}
                      paragraph={paragraph}
                      author={author}
                      time={time}
                      videoLink={videoLink}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* // <!-- Load More btn --> */}
          <LoadMore />
        </div>
      </div>
    </div>
  );
}

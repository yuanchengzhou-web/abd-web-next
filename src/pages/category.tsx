import Link from 'next/link';
import CategoryBar from '@/components/Categorybar';
import Post from '@/components/Post';
import SideBar from '@/components/Sidebar';
import { PostInfo } from '@/components/Post';
import bg3 from '@/images/bg3.jpg';
import b18 from '@/images/b18.jpg';
import b19 from '@/images/b19.jpg';
import b20 from '@/images/b20.jpg';
import b21 from '@/images/b21.jpg';
import b23 from '@/images/b23.jpg';
import b24 from '@/images/b24.jpg';
import LoadMore from '@/components/Loadmore';

const longPostInfo: PostInfo[] = [
  {
    postType: 'long',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-4 d-flex align-items-center',
    travelClass: '',
    h5Class: '',
    thumbnail: b18,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/category',
    paragraph:
      'Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-4 d-flex align-items-center',
    travelClass: '',
    h5Class: '',
    thumbnail: b19,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/category',
    paragraph:
      'Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-4 d-flex align-items-center',
    travelClass: '',
    h5Class: '',
    thumbnail: b20,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/category',
    paragraph:
      'Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-4 d-flex align-items-center',
    travelClass: '',
    h5Class: '',
    thumbnail: b21,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/category',
    paragraph:
      'Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-4 d-flex align-items-center',
    travelClass: '',
    h5Class: '',
    thumbnail: b23,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/category',
    paragraph:
      'Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'long',
    delay: '0.0s',
    blogClass: 'single-blog-post post-style-4 d-flex align-items-center',
    travelClass: '',
    h5Class: '',
    thumbnail: b24,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/category',
    paragraph:
      'Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
];

export default function Category() {
  return (
    <div>
      {/* ********** Hero Area Start ********** */}
      <div
        className="hero-area height-400 bg-img background-overlay"
        style={{ backgroundImage: `url(${bg3.src})` }}
      ></div>
      {/* ********** Hero Area End ********** */}
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* ============= Post Content Area Start ============= */}
            <div className="col-12 col-lg-8">
              <div className="post-content-area mb-100">
                <div className="world-catagory-area">
                  <CategoryBar title={'Lifestyle'} tabID={'myTab'} />
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="world-tab-1"
                      role="tabpanel"
                      aria-labelledby="tab1"
                    >
                      {longPostInfo.map(
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
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-4">
              <SideBar />
            </div>
          </div>
          <LoadMore />
        </div>
      </div>
    </div>
  );
}

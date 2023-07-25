import Image from 'next/legacy/image';
import Link from 'next/link';
import Post from '@/components/Post';
import { PostInfo } from '@/components/Post';
import b10 from '@/images/b10.jpg';
import b11 from '@/images/b11.jpg';
import b12 from '@/images/b12.jpg';
import b13 from '@/images/b13.jpg';
import b14 from '@/images/b14.jpg';
import b22 from '@/images/b22.jpg';

interface ThirdAppInfo {
  key: string;
  className: string;
  href: string;
}

const PostInfo: PostInfo[] = [
  {
    postType: 'small',
    delay: '0.0s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center widget-post',
    travelClass: '',
    h5Class: 'mb-0',
    thumbnail: b10,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: '',
    time: '',
    videoLink: '',
  },
  {
    postType: 'small',
    delay: '0.0s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center widget-post',
    travelClass: '',
    h5Class: 'mb-0',
    thumbnail: b11,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: '',
    time: '',
    videoLink: '',
  },
  {
    postType: 'small',
    delay: '0.0s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center widget-post',
    travelClass: '',
    h5Class: 'mb-0',
    thumbnail: b12,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: '',
    time: '',
    videoLink: '',
  },
  {
    postType: 'small',
    delay: '0.0s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center widget-post',
    travelClass: '',
    h5Class: 'mb-0',
    thumbnail: b13,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: '',
    time: '',
    videoLink: '',
  },
  {
    postType: 'small',
    delay: '0.0s',
    blogClass:
      'single-blog-post post-style-2 d-flex align-items-center widget-post',
    travelClass: '',
    h5Class: 'mb-0',
    thumbnail: b14,
    title: 'How Did van Gogh’s Turbulent Mind Depict One of the Most',
    href: '/',
    paragraph: '',
    author: '',
    time: '',
    videoLink: '',
  },
];

const thirdAppInfo: ThirdAppInfo[] = [
  {
    key: 'twitter',
    className: 'fa fa-twitter',
    href: '/',
  },
  {
    key: 'linkedin',
    className: 'fa fa-linkedin',
    href: '/',
  },
  {
    key: 'discord',
    className: 'bi bi-discord',
    href: '/',
  },
];

export default function SideBar() {
  return (
    <div>
      <div className="post-sidebar-area wow fadeInUpBig" data-wow-delay="0.2s">
        {/* <!-- Widget Area --> */}
        <div className="sidebar-widget-area">
          <h5 className="title">About World</h5>
          <div className="widget-content">
            <p>
              The mango is perfect in that it is always yellow and if it’s not,
              I don’t want to hear about it. The mango’s only flaw, and it’s a
              minor one, is the effort it sometimes takes to undress the mango,
              carve it up in a way that makes sense, and find its way to the
              mouth.
            </p>
          </div>
        </div>
        {/* <!-- Widget Area --> */}
        <div className="sidebar-widget-area">
          <h5 className="title">Top Stories</h5>
          <div className="widget-content">
            {PostInfo.map(
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
        {/* <!-- Widget Area --> */}
        <div className="sidebar-widget-area">
          <h5 className="title">Stay Connected</h5>
          <div className="widget-content">
            <div className="social-area d-flex justify-content-between">
              {thirdAppInfo.map(({ key, className, href }) => (
                <Link legacyBehavior href={href} key={key}>
                  <a>
                    <i className={className} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- Widget Area --> */}
        <div className="sidebar-widget-area">
          <h5 className="title">Today’s Pick</h5>
          <div className="widget-content">
            <div className="single-blog-post todays-pick">
              <div className="post-thumbnail">
                <Image
                  src={b22.src}
                  alt="How Did van Gogh’s Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?"
                  height="50%"
                  width="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="post-content px-0 pb-0px-0 pb-0">
                <Link legacyBehavior href="/">
                  <a className="headline">
                    <h5>
                      How Did van Gogh’s Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

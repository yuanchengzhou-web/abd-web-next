import Link from 'next/link';
import SideBar from '@/components/Sidebar';
import Post from '@/components/Post';
import { PostInfo } from '@/components/Post';
import bg2 from '@/images/bg2.jpg';
import b1 from '@/images/b1.jpg';
import b2 from '@/images/b2.jpg';
import b7 from '@/images/b7.jpg';

const tagInfo = [
  {
    name: 'Manual',
    href: '/',
  },
  {
    name: 'Liberty',
    href: '/',
  },
  {
    name: 'Recommendations',
    href: '/',
  },
  {
    name: 'Interpretation',
    href: '/',
  },
];

const squarePostInfo: PostInfo[] = [
  {
    postType: 'square',
    blogClass: 'single-blog-post',
    delay: '0.0s',
    travelClass: 'post-cta',
    h5Class: '',
    thumbnail: b1,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
  {
    postType: 'square',
    blogClass: 'single-blog-post',
    delay: '0.0s',
    travelClass: 'post-cta',
    h5Class: '',
    thumbnail: b2,
    title:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    href: '/',
    paragraph:
      'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...',
    author: 'Katy Liu',
    time: 'Sep 29, 2017 at 9:48 am',
    videoLink: '',
  },
];

export default function SingleBlog() {
  return (
    <div>
      {/* ********** Hero Area Start ********** */}
      <div
        className="hero-area height-600 bg-img background-overlay"
        style={{ backgroundImage: `url(${bg2.src})` }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="single-blog-title text-center">
                {/* Catagory */}
                <div className="post-cta">
                  <Link legacyBehavior href="/category">
                    <a>travel</a>
                  </Link>
                </div>
                <h3>
                  How Did van Gogh’s Turbulent Mind Depict One of the Most
                  Complex Concepts in Physics?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********** Hero Area End ********** */}
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- ============= Post Content Area ============= --> */}
            <div className="col-12 col-lg-8">
              <div className="single-blog-content mb-100">
                {/* <!-- Post Meta --> */}
                <div className="post-meta">
                  <p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="post-author">
                      Katy Liu
                    </a>{' '}
                    on {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="post-date">
                      Sep 29, 2017 at 9:48 am
                    </a>
                  </p>
                </div>
                {/* <!-- Post Content --> */}
                <div className="post-content">
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus eget purus id felis dignissim convallis.
                    Suspendisse et augue dui. Morbi gravida sed justo vel
                    venenatis. Ut tempor pretium maximus. Donec libero diam,
                    faucibus vitae lectus nec, accumsan gravida dui. Nam
                    interdum mi eget lacus aliquet, sit amet ultricies magna
                    pharetra. In ut odio a ligula egestas pretium et quis
                    sapien. Etiam faucibus magna eu porta vulputate. Aliquam
                    euismod rhoncus malesuada. Nunc rutrum hendrerit semper.
                  </h6>
                  <h6>
                    Maecenas vitae sem varius, imperdiet nisi a, tristique nisi.
                    Sed scelerisque suscipit leo cursus accumsan. Donec vel
                    turpis quam. Mauris non nisl nec nunc gravida ullamcorper id
                    vestibulum magna. Donec non velit finibus, laoreet arcu nec,
                    facilisis augue. Aliquam sed purus id erat accumsan congue.
                    Mauris semper ullamcorper nibh non pellentesque. Aenean
                    euismod purus sit amet quam vehicula ornare.
                  </h6>
                  <blockquote className="mb-30">
                    <h6>
                      Aliquam auctor lacus a dapibus pulvinar. Morbi in elit
                      erat. Quisque et augue nec tortor blandit hendrerit eget
                      sit amet sapien. Curabitur at tincidunt metus, quis porta
                      ex. Duis lacinia metus vel eros cursus pretium eget.
                    </h6>
                    <div className="post-author">
                      <p>Robert Morgan</p>
                    </div>
                  </blockquote>
                  <h6>
                    Donec orci dolor, pretium in luctus id, consequat vitae
                    nibh. Quisque hendrerit, lorem sit amet mollis malesuada,
                    urna orci volutpat ex, sed scelerisque nunc velit et massa.
                    Sed maximus id erat vel feugiat. Phasellus bibendum nisi non
                    urna bibendum elementum. Aenean tincidunt nibh vitae ex
                    facilisis ultrices. Integer ornare efficitur ultrices.
                    Integer neque lectus, venenatis at pulvinar quis, aliquet id
                    neque. Mauris ultrices consequat velit, sed dignissim elit
                    posuere in. Cras vitae dictum dui.
                  </h6>
                  {/* <!-- Post Tags --> */}
                  <ul className="post-tags">
                    {tagInfo.map(({ name, href }, i) => (
                      <li key={i}>
                        <Link legacyBehavior href={href}>
                          <a>{name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* <!-- Post Meta --> */}
                  <div className="post-meta second-part">
                    <p>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="post-author">
                        Katy Liu
                      </a>
                      &nbsp;on&nbsp;
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="post-date">
                        Sep 29, 2017 at 9:48 am
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-4">
              <SideBar />
            </div>
          </div>
          <div className="row">
            {squarePostInfo.map(
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
                <div key={i} className="col-12 col-md-6 col-lg-4">
                  <Post
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
                </div>
              ),
            )}
            <div className="col-12 col-md-6 col-lg-4">
              <Post
                postType={'video'}
                delay={'0.0s'}
                blogClass={'single-blog-post'}
                travelClass={'post-cta'}
                h5Class={''}
                thumbnail={b7}
                title={
                  'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?'
                }
                href={'/'}
                paragraph={
                  'How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...'
                }
                author={'Katy Liu'}
                time={'Sep 29, 2017 at 9:48 am'}
                videoLink={
                  'https://www.youtube.com/watch?v=pS0s1cQRb10&ab_channel=%E9%87%91%E7%8E%9F%E5%B2%90-Topic'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

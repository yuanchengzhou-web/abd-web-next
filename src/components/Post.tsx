import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

export interface PostInfo {
  postType: string;
  delay: string;
  blogClass: string;
  travelClass: string;
  h5Class: string;
  thumbnail: string | StaticImageData;
  title: string;
  href: string;
  paragraph: string;
  author: string;
  time: string;
  videoLink: string;
}

export default function Post({
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
}: PostInfo) {
  const myLoader = () => {
    return `https://abd-strapi-files.s3.us-east-2.amazonaws.com/${
      typeof thumbnail === 'string' ? thumbnail : 'doggo_doge_0276052fbb.gif'
    }`;
  };
  return (
    <div className={blogClass} data-wow-delay={delay}>
      <div className="post-thumbnail">
        <Image
          loader={myLoader}
          src={thumbnail}
          alt={title}
          width={postType === 'picture' ? '15 px' : '100%'}
          height={
            postType === 'square' || postType === 'video'
              ? '55%'
              : postType === 'picture'
              ? '5 px'
              : '100%'
          }
          layout="responsive"
          objectFit="contain"
        />
        {postType === 'square' ||
        postType === 'picture' ||
        postType === 'video' ? (
          <div className={travelClass}>
            {postType === 'picture' ? (
              <div>
                <div className="post-tag">
                  <Link href={href}>
                    <a>travel</a>
                  </Link>
                </div>
                <Link href={href}>
                  <a className="headline">
                    <h5>{title}</h5>
                  </a>
                </Link>
                <div className="post-meta">
                  <p>
                    <Link href={href}>
                      <a className="post-author">{author}</a>
                    </Link>
                    &nbsp;on&nbsp;
                    <Link href={href}>
                      <a className="post-date">{time}</a>
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <Link href={href}>
                <a>travel</a>
              </Link>
            )}
          </div>
        ) : (
          <></>
        )}
        {postType === 'video' ? (
          <Link href={videoLink}>
            <a className="video-btn">
              <i className="fa fa-play"></i>
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
      {/* <!-- Post Content --> */}
      {postType !== 'picture' ? (
        <div className="post-content">
          <Link href={href}>
            <a className="headline">
              <h5 className={h5Class}>{title}</h5>
            </a>
          </Link>
          {postType === 'square' ||
          postType === 'long' ||
          postType === 'video' ? (
            <p>{paragraph}</p>
          ) : (
            <></>
          )}
          {/* <!-- Post Meta --> */}
          {postType === 'square' ||
          postType === 'mid' ||
          postType === 'long' ||
          postType === 'video' ? (
            <div className="post-meta">
              <p>
                <Link href={href}>
                  <a className="post-author">{author}</a>
                </Link>
                &nbsp;on&nbsp;
                <Link href={href}>
                  <a className="post-date">{time}</a>
                </Link>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

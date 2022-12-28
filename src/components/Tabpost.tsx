import Post from '@/components/Post';
import { PostInfo } from '@/components/Post';

export default function Tabpost({
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
  return (
    <div className="col-12 col-md-6">
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
  );
}

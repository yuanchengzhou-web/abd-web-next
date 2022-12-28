import Link from 'next/link';

export default function LoadMore() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="load-more-btn mt-50 text-center">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn world-btn">
              Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

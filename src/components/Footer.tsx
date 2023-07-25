import Link from 'next/link';
import Image from 'next/legacy/image';
import logo from '@/images/logo.png';

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Fashion',
    href: '/',
  },
  {
    name: 'Lifestyle',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/',
  },
  {
    name: 'Gadgets',
    href: '/',
  },
  {
    name: 'Video',
    href: '/',
  },
];

export default function Footer() {
  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="footer-single-widget">
                <Link legacyBehavior href="/">
                  <a>
                    <Image src={logo} alt="icon" />
                  </a>
                </Link>
                <div className="copywrite-text mt-30">
                  <p>
                    Copyright &copy;2022 Analytics By Design. All rights
                    reserved | This website is made with&nbsp;
                    <i className="fa fa-heart-o" aria-hidden="true"></i>{' '}
                    by&nbsp;Michael&nbsp;Zhou
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-single-widget">
                <ul className="footer-menu d-flex justify-content-between">
                  {navItems.map(({ name, href }, i) => (
                    <li key={i}>
                      <Link legacyBehavior href={href}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-single-widget">
                <h5>Subscribe</h5>
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your mail"
                  />
                  <button type="button">
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import logo from '@/images/logo.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface SubItems {
  subItemName: string;
  subPage: string;
}

interface NavItems {
  itemName: string;
  page: string;
  subItems?: SubItems[];
}

const navItems: NavItems[] = [
  {
    itemName: 'About',
    page: '/',
    subItems: [
      {
        subItemName: 'Team',
        subPage: '/',
      },
      {
        subItemName: 'Partner',
        subPage: '/',
      },
      {
        subItemName: 'Advisory',
        subPage: '/',
      },
      {
        subItemName: 'Travel',
        subPage: '/',
      },
    ],
  },
  {
    itemName: 'Expert Circle',
    page: '/',
    subItems: [
      {
        subItemName: 'What is ABD Expert Circle',
        subPage: '/',
      },
      {
        subItemName: 'Meet Circle Members',
        subPage: '/',
      },
      {
        subItemName: 'Meet Knowledge Advisors',
        subPage: '/',
      },
      {
        subItemName: 'Get Involved',
        subPage: '/',
      },
      {
        subItemName: 'Community Nomination Form',
        subPage: '/',
      },
      {
        subItemName: 'Self-Nomination Form',
        subPage: '/',
      },
    ],
  },
  {
    itemName: 'Research',
    page: '/',
    subItems: [],
  },
  {
    itemName: 'Podcasts',
    page: '/',
    subItems: [],
  },
  {
    itemName: 'Volunteer',
    page: '/',
    subItems: [],
  },
  {
    itemName: 'Contact',
    page: '/',
    subItems: [],
  },
];

export default function Navbar() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [pageClickAbout, setPageClickAbout] = useState(false);
  const [pageClickExCircle, setPageClickExCircle] = useState(false);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  const handleClickAbout = () => {
    if (pageClickAbout === false) {
      setPageClickAbout(true);
    } else {
      setPageClickAbout(false);
    }
  };

  const handleClickExCircle = () => {
    if (pageClickExCircle === false) {
      setPageClickExCircle(true);
    } else {
      setPageClickExCircle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={`header-area ${scrollHeight > 20 ? 'sticky' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image src={logo} alt="Logo" />
                  </a>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#worldNav"
                  aria-controls="worldNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse show" id="worldNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link href="/">
                        <a className="nav-link">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                    {navItems.map(({ itemName, page, subItems }, i) => (
                      <li
                        key={i}
                        className={`nav-item ${subItems ? 'dropdown' : ''}`}
                      >
                        {subItems && subItems.length > 0 ? (
                          <div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                              href="#"
                              onClick={
                                itemName === 'About'
                                  ? handleClickAbout
                                  : handleClickExCircle
                              }
                              className="nav-link dropdown-toggle"
                              type="button"
                              id="navbarDropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {itemName}
                            </a>
                            <div
                              className={`dropdown-menu ${
                                pageClickAbout && itemName === 'About'
                                  ? 'show'
                                  : pageClickExCircle &&
                                    itemName === 'Expert Circle'
                                  ? 'show'
                                  : ''
                              }`}
                              aria-labelledby="navbarDropdown"
                            >
                              {subItems.map(({ subItemName, subPage }, y) => (
                                <Link href={subPage} key={y}>
                                  <a className="dropdown-item">{subItemName}</a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link href={page}>
                            <a className="nav-link">{itemName}</a>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

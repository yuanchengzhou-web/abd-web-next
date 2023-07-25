import logo from '@/images/logo.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import Dropdown from '@/components/DropdownMenu';

interface SubItems {
  label: string;
  value: string;
}

interface NavItems {
  label: string;
  value: string;
  subItems?: SubItems[];
}

const navItems: NavItems[] = [
  {
    label: 'About',
    value: '/',
    subItems: [
      {
        label: 'Team',
        value: '/',
      },
      {
        label: 'Partner',
        value: '/',
      },
      {
        label: 'Advisory',
        value: '/',
      },
      {
        label: 'Travel',
        value: '/',
      },
    ],
  },
  {
    label: 'Expert Circle',
    value: '/',
    subItems: [
      {
        label: 'What is ABD Expert Circle',
        value: '/',
      },
      {
        label: 'Meet Circle Members',
        value: '/',
      },
      {
        label: 'Meet Knowledge Advisors',
        value: '/',
      },
      {
        label: 'Get Involved',
        value: '/',
      },
      {
        label: 'Community Nomination Form',
        value: '/',
      },
      {
        label: 'Self-Nomination Form',
        value: '/',
      },
    ],
  },
  {
    label: 'Research',
    value: '/',
    subItems: [],
  },
  {
    label: 'Podcasts',
    value: '/',
    subItems: [],
  },
  {
    label: 'Volunteer',
    value: '/',
    subItems: [],
  },
  {
    label: 'Contact',
    value: '/',
    subItems: [],
  },
];

export default function Navbar() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [buttonMenu, setButtonMenu] = useState(false);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  const handleButtonClick = () => {
    setButtonMenu(!buttonMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`header-area ${scrollHeight > 20 ? 'sticky' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg">
                <Link legacyBehavior href="/">
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
                  onClick={handleButtonClick}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className={`collapse navbar-collapse ${
                    buttonMenu ? 'show' : ''
                  }`}
                  id="worldNav"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link legacyBehavior href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    {navItems.map(({ label, value, subItems }, i) => (
                      <li
                        key={i}
                        className={`nav-item ${subItems ? 'dropdown' : ''}`}
                      >
                        {subItems && subItems.length > 0 ? (
                          <Dropdown label={label} items={subItems} />
                        ) : (
                          <Link legacyBehavior href={value}>
                            <a className="nav-link">{label}</a>
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

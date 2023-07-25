import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Dropdown from '@/components/DropdownMenu';

interface Props {
  title: string;
  tabID: string;
}

interface Items {
  label: string;
  subItems?: SubItems[];
}

interface SubItems {
  label: string;
  value: string;
}

const categoryInfo: Items[] = [
  {
    label: 'All',
  },
  {
    label: 'Style hunter',
  },
  {
    label: 'Vogue',
  },
  {
    label: 'Health & Fitness',
  },
  {
    label: 'Travel',
  },
  {
    label: 'Gadgets',
  },
  {
    label: 'More',
    subItems: [
      {
        label: 'Sports',
        value: '/',
      },
      {
        label: 'Politices',
        value: '/',
      },
      {
        label: 'Features',
        value: '/',
      },
    ],
  },
];

export default function CategoryBar({ title, tabID }: Props) {
  const [selectedTab, setSelectedTab] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const handleSelectedTab = (tab: any) => {
    setSelectedTab(tab);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (!dropdownMenuRef.current?.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutSide);

    return () => {
      setShowDropdown(false);
    };
  }, []);

  return (
    <div>
      <ul className="nav nav-tabs" id={tabID} role="tablist">
        <li className="title">{title}</li>
        {categoryInfo.map(({ label, subItems }, i) => (
          <li
            key={i}
            className={`nav-item ${
              subItems && subItems.length > 0 ? 'dropdown' : ''
            }`}
          >
            {!subItems ? (
              <>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={`nav-link ${
                    selectedTab === label ? 'active' : ''
                  }`}
                  onClick={() => handleSelectedTab(label)}
                >
                  {label}
                </a>
              </>
            ) : (
              <div ref={dropdownMenuRef}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={`nav-link dropdown-toggle ${
                    selectedTab === label ? 'active' : ''
                  }`}
                  onClick={handleDropdownClick}
                >
                  {label}
                </a>
                <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                  {subItems.map(({ label }, i) => (
                    <>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        key={i}
                        className={`nav-link`}
                        onClick={() => handleSelectedTab(label)}
                      >
                        {label}
                      </a>
                    </>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

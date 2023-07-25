import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SubItems {
  label: string;
  value: string;
}

interface DropdownItems {
  label: string;
  items: SubItems[];
}

export default function Dropdown({ label, items }: DropdownItems) {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownMenuRef = useRef<HTMLDivElement>(null);

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
    <div ref={dropdownMenuRef}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id={`navbarDropdown${label}`}
        role="button"
        onClick={handleDropdownClick}
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
      </a>
      <div
        className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
        aria-labelledby={`navbarDropdown`}
      >
        {items.map(({ label, value }, i) => (
          <Link legacyBehavior href={value} key={i}>
            <a className="dropdown-item">{label}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

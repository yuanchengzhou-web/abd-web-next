import { StaticImageData } from 'next/image';

interface HeaderProps {
  className: string;
  pic: StaticImageData;
}

export default function Header({ className, pic }: HeaderProps) {
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${pic.src})` }}
    ></div>
  );
}

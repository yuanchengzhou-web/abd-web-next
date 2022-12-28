import Link from 'next/link';

interface Props {
  title: string;
  tabID: string;
}

export default function CategoryBar({ title, tabID }: Props) {
  return (
    <div>
      <ul className="nav nav-tabs" id={tabID} role="tablist">
        <li className="title">{title}</li>

        <li className="nav-item">
          <Link href="/">
            <a
              className="nav-link active"
              id="tab1"
              data-toggle="tab"
              href="#world-tab-1"
              role="tab"
              aria-controls="world-tab-1"
              aria-selected="true"
            >
              All
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/">
            <a
              className="nav-link"
              id="tab2"
              data-toggle="tab"
              href="#world-tab-2"
              role="tab"
              aria-controls="world-tab-2"
              aria-selected="false"
            >
              Style hunter
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="#world-tab-3">
            <a
              className="nav-link"
              id="tab3"
              data-toggle="tab"
              href="#world-tab-3"
              role="tab"
              aria-controls="world-tab-3"
              aria-selected="false"
            >
              Vogue
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/">
            <a
              className="nav-link"
              id="tab4"
              data-toggle="tab"
              href="#world-tab-4"
              role="tab"
              aria-controls="world-tab-4"
              aria-selected="false"
            >
              Health &amp; Fitness
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/">
            <a
              className="nav-link"
              id="tab5"
              data-toggle="tab"
              href="#world-tab-5"
              role="tab"
              aria-controls="world-tab-5"
              aria-selected="false"
            >
              Travel
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/">
            <a
              className="nav-link"
              id="tab6"
              data-toggle="tab"
              href="#world-tab-6"
              role="tab"
              aria-controls="world-tab-6"
              aria-selected="false"
            >
              Gadgets
            </a>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <Link href="/">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#world-tab-7"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>
          </Link>
          <div className="dropdown-menu show">
            <a
              className="nav-link"
              id="tab7"
              data-toggle="tab"
              href="#world-tab-7"
              role="tab"
              aria-controls="world-tab-7"
              aria-selected="false"
            >
              Sports
            </a>

            <a
              className="nav-link"
              id="tab8"
              data-toggle="tab"
              href="#world-tab-8"
              role="tab"
              aria-controls="world-tab-8"
              aria-selected="false"
            >
              Politices
            </a>

            <a
              className="nav-link"
              id="tab9"
              data-toggle="tab"
              href="#world-tab-9"
              role="tab"
              aria-controls="world-tab-9"
              aria-selected="false"
            >
              Features
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

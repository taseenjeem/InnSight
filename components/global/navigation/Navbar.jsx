import Link from "next/link";

const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-base-100 container sticky top-0 z-50">
          <div className="w-full navbar z-50">
            <div className="flex-1 px-2 mx-2 lg:flex">
              <Link href={`/`} className="text-xl font-semibold btn btn-ghost">
                InnSight
              </Link>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal items-center gap-2">
                {/* Navbar menu content here */}
                <li>
                  <Link href={`/recommended-places`}>Recommended Places</Link>
                </li>
                <li>
                  <Link href={`/bookings`}>Bookings</Link>
                </li>
                <li>
                  <Link href={`/contact-us`}>Contact Us</Link>
                </li>
                <li>
                  <Link href={`/about-us`}>About Us</Link>
                </li>
                <li>
                  <Link className="btn btn-secondary btn-sm" href={`/login`}>
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu space-y-2 p-4 pt-20 w-80 min-h-full bg-base-100">
          {/* Sidebar content here */}
          <li>
            <Link href={`/recommended-places`}>Recommended Places</Link>
          </li>
          <li>
            <Link href={`/bookings`}>Bookings</Link>
          </li>
          <li>
            <Link href={`/contact-us`}>Contact Us</Link>
          </li>
          <li>
            <Link href={`/about-us`}>About Us</Link>
          </li>
          <li>
            <Link className="btn btn-secondary btn-sm" href={`/login`}>
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

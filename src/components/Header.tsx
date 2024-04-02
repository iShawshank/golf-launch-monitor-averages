import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav
      className="
        header 
        px-10 
        py-1 
        bg-light-black 
        border-neutral-2 
        sticky 
        top-0 
        h-15 
        md:h-10 
        flex 
        justify-center 
        items-center 
        w-full
        divide-x-2
      "
    >
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/PGA">
        PGA
      </Link>
      <Link className="link" to="/LPGA">
        LPGA
      </Link>
      <Link className="link" to="/donate">
        Donate
      </Link>
    </nav>
  );
};

export default Header;

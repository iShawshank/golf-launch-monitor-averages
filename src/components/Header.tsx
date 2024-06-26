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
      <Link className="link" to="/golf-launch-monitor-averages/">
        Home
      </Link>
      <Link className="link" to="/golf-launch-monitor-averages/PGA">
        PGA
      </Link>
      <Link className="link" to="/golf-launch-monitor-averages/LPGA">
        LPGA
      </Link>
    </nav>
  );
};

export default Header;

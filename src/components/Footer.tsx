import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isTour =
    location.pathname.toLowerCase() === '/pga' ||
    location.pathname.toLowerCase() === '/lpga';

  return (
    <footer className="footer bg-light-black border-neutral-2 w-full text-center flex flex-col gap-4">
      <Link to="/donate" className="mt-2">
        Enjoying this app? Buy me a beer
      </Link>
      {isTour && (
        <a
          className="icon-attribute text-xs"
          href="https://www.flaticon.com/free-icons/golf-club"
          title="golf club icons"
        >
          Golf club icons created by iconixar and juicy_fish -
          Flaticon
        </a>
      )}
    </footer>
  );
};

export default Footer;

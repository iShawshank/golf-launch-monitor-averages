import { useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();

  const isTour =
    location.pathname.toLowerCase() === '/pga' ||
    location.pathname.toLowerCase() === '/lpga';

  return (
    <footer className="footer bg-light-black border-neutral-2 w-full bottom-0 text-center">
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

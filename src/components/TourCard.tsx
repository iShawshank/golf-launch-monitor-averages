import { Link } from 'react-router-dom';

const TourCard = ({ logo, tour }: { logo: string; tour: string }) => {
  return (
    <div className="tour-card m-3 shadow-md rounded-xl">
      <Link to={`/golf-launch-monitor-averages/${tour}`}>
        <img
          className="tour-logo"
          src={logo}
          alt={`Logo of ${tour} tour`}
        />
      </Link>
    </div>
  );
};

export default TourCard;

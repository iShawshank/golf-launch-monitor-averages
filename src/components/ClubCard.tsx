import { Link } from 'react-router-dom';

const ClubCard = ({
  id,
  name,
  type,
  extraText,
  tour,
}: {
  id: string;
  name: string;
  type: string;
  extraText?: string;
  tour: string;
}) => {
  const clubLogo = `/img/${type}.png`;

  return (
    <div className="club-option border border-white rounded-xl gap-3 p-2 my-4 text-center w-full font-bold">
      <Link
        to={`/${tour}/${id}`}
        className="flex flex-col justify-center gap-2"
      >
        <div className="club-option-text">
          <h2 className="text-xl">{name}</h2>
          {extraText && <p className="text-xs">{extraText}</p>}
        </div>
        <div className="club-option-logo flex justify-center items-center">
          <img
            className="club-option-logo-image"
            src={clubLogo}
            alt={`${type} icon`}
          />
        </div>
      </Link>
    </div>
  );
};

export default ClubCard;

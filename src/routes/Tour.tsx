import { useParams } from 'react-router';
import { allClubs } from '../utils/tourAverages';
import ClubCard from '../components/ClubCard';

const Tour = () => {
  const { tour } = useParams();
  const clubs = allClubs(tour as string);
  return (
    <div className="club-section container-large h-full w-full text-center">
      <h1 className="text-white text-xl mb-4">
        For {tour} Tour averages, select a club
      </h1>
      <div className="club-selector grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full justify-between justify-items-center align-middle px-6 h-full">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            id={club.id}
            name={club.name}
            type={club.type}
            extraText={club.extraText}
            tour={tour as string}
          />
        ))}
      </div>
    </div>
  );
};

export default Tour;

import { useParams } from 'react-router';
import { allClubs, statsForClub } from '../utils/tourAverages';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';

const Club = () => {
  const { tour, club } = useParams();

  const clubs = allClubs(tour as string);

  const [tourAverages, setTourAverages] = useState(
    statsForClub(club as string, tour as string)
  );

  useEffect(() => {
    setTourAverages(statsForClub(club as string, tour as string));
  }, [tour, club]);

  return (
    <div className="single-club-page flex flex-col py-2 justify-center text-center w-full">
      <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 align-middle justify-center">
        {clubs.map((club) => (
          <Link
            to={`/golf-launch-monitor-averages/${tour}/${club.id}`}
            key={club.id}
            className="m-2 p-2 text-white border-white border-2 rounded-xl flex align-middle flex-col"
          >
            {club.name}
          </Link>
        ))}
      </div>
      <h1 className="text-xl">
        {tour} Tour <span className="text-white">{club}</span> Average
      </h1>
      <div className="averages h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 m-5 justify-items-center items-center">
        <StatsCard
          name="Club speed"
          extraInfo="mph"
          value={tourAverages.clubSpeed}
        />
        <StatsCard
          name="Ball speed"
          extraInfo="mph"
          value={tourAverages.ballSpeed}
        />
        <StatsCard name="Smash" value={tourAverages.smash} />
        <StatsCard
          name="Spin"
          extraInfo="rpm"
          value={tourAverages.spin}
        />
        <StatsCard
          name="Carry"
          extraInfo="yds"
          value={tourAverages.carry}
        />
        <StatsCard
          name="Peak Height"
          extraInfo="yds"
          value={tourAverages.peakHeight}
        />
        <StatsCard
          name="Descent Angle"
          extraInfo="deg"
          value={tourAverages.descentAngle}
        />
        <StatsCard
          name="Angle of Attack"
          extraInfo="deg"
          value={tourAverages.attackAngle}
        />
        <StatsCard
          name="Launch Angle (VLA)"
          extraInfo="deg"
          value={tourAverages.VLA}
        />
      </div>
    </div>
  );
};

export default Club;

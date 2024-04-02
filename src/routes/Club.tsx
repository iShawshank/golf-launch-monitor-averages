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
    <div className="single-club-page container-large h-full py-2 text-center">
      <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 align-middle justify-center">
        {clubs.map((club) => (
          <Link
            to={`/${tour}/${club.id}`}
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
      <div className="averages h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 m-5 items-center gap-4">
        <StatsCard
          name="Club speed"
          extraInfo="mph"
          value={tourAverages.clubSpeed}
        />
        <StatsCard
          name="Angle of Attack"
          extra-info="deg"
          value={tourAverages.attackAngle}
        />
        <StatsCard
          name="Ball speed"
          extra-info="mph"
          value={tourAverages.ballSpeed}
        />
        <StatsCard name="Smash" value={tourAverages.smash} />
        <StatsCard
          name="Launch Angle (VLA)"
          extra-info="deg"
          value={tourAverages.VLA}
        />
        <StatsCard
          name="Spin"
          extra-info="rpm"
          value={tourAverages.spin}
        />
        <StatsCard
          name="Peak Height"
          extra-info="yds"
          value={tourAverages.peakHeight}
        />
        <StatsCard
          name="Descent Angle"
          extra-info="deg"
          value={tourAverages.descentAngle}
        />
        <StatsCard
          name="Carry"
          extra-info="yds"
          value={tourAverages.carry}
        />
      </div>
    </div>
  );
};

export default Club;

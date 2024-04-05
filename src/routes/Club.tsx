import { useParams } from 'react-router';
import { allClubs, statsForClub } from '../utils/tourAverages';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import Cookies from 'js-cookie';
import ReactSwitch from 'react-switch';

const METERS_MODIFIER = 0.9144;

const Club = () => {
  const useMetricsCookie: string | undefined =
    Cookies.get('useMetrics');
  const [isMetrics, setIsMetrics] = useState(
    useMetricsCookie === 'true' ? true : false
  );
  const { tour, club } = useParams();

  const clubs = allClubs(tour as string);

  const [tourAverages, setTourAverages] = useState(
    statsForClub(club as string, tour as string)
  );

  useEffect(() => {
    setTourAverages(statsForClub(club as string, tour as string));
  }, [tour, club]);

  const handleChange = () => {
    const newValue = !isMetrics;
    Cookies.set('useMetrics', newValue.toString());
    setIsMetrics(newValue);
  };

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
      <div className="items-center">
        <h1 className="text-xl md:col-span-4 lg:col-span-7">
          {tour} Tour <span className="text-white">{club}</span>{' '}
          Average
        </h1>
      </div>
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
          extraInfo={isMetrics ? 'meters' : 'yds'}
          value={
            isMetrics
              ? Math.round(tourAverages.carry * METERS_MODIFIER)
              : tourAverages.carry
          }
        />
        <StatsCard
          name="Peak Height"
          extraInfo={isMetrics ? 'meters' : 'yds'}
          value={
            isMetrics
              ? Math.round(tourAverages.peakHeight * METERS_MODIFIER)
              : tourAverages.peakHeight
          }
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
      <div className="options flex gap-4 justify-center items-center m-4">
        <p className="text-xl">{'Meters:'}</p>
        <label className="flex items-center">
          <ReactSwitch
            onChange={handleChange}
            checked={isMetrics}
            offColor="#FF0000"
            onColor="#3ef016"
          />
        </label>
      </div>
    </div>
  );
};

export default Club;

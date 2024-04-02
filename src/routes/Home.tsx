import TourCard from '../components/TourCard';
import pgaLogo from '../assets/img/PGATourBlack.png';
import lpgaLogo from '../assets/img/LPGABlack.png';

const Home = () => {
  return (
    <div className="home flex flex-col justify-center text-center">
      <h3 className="prompt">Select a tour to compare</h3>
      <div className="flex justify-center items-center">
        <TourCard logo={pgaLogo} tour="PGA" />
        <TourCard logo={lpgaLogo} tour="LPGA" />
      </div>
    </div>
  );
};

export default Home;

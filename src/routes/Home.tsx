import TourCard from '../components/TourCard';
import pgaLogo from '../assets/img/PGATourBlack.png';
import lpgaLogo from '../assets/img/LPGABlack.png';

const Home = () => {
  return (
    <div className="home flex flex-col w-full text-center items-stretch">
      <h3 className="text-xl font-bold mb-2">Select a tour to compare your numbers</h3>
      <div className="flex justify-center items-center h-full gap-2 xl:gap-20">
        <TourCard logo={pgaLogo} tour="PGA" />
        <TourCard logo={lpgaLogo} tour="LPGA" />
      </div>
    </div>
  );
};

export default Home;

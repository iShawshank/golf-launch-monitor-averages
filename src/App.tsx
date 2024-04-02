import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pga w-full flex flex-col items-center justify-center bg-black text-green">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

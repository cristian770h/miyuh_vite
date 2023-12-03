
import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer className="bg-blue-500  w-screen text-white p-4 bottom-auto">
        <div className="container mx-auto flex justify-between text-slate-200">
          <div className='text-white'>
            <h2 className="text-xl font-semibold">Enlaces útiles</h2>
            <ul className="mt-2 text-white ">
              <li className='text-white'>
                <Link to="/" className='text-white'>Inicio</Link>
              </li>
              <li>
                <Link to="/acerca" className='text-white'>Acerca de</Link>
              </li>
              <li>
                <Link to="/dashboard_users" className='text-white'>Dashboard</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Otros</h2>
            <ul className="mt-2">
            <li>
                <Link to="/acerca" className='text-white'>Acerca de</Link>
              </li>
              <li>
                <a href="https://facebook.com/tu-cuenta" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com/tu-cuenta" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
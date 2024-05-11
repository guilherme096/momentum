import logo from '/logo_azul.png';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-300 flex justify-center items-center">
          <div className="hero-content flex-col">
            <div className="items-center">
              <div className="items-center flex justify-center ">
                <img src={logo} alt="logo" className="w-20 h-auto" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Momentum</h1>
                <h1 className="text-4xl font-light text-center">Fitness</h1>
              </div>
            </div>
            <br />
            <div className="card shrink-0 max-w-s shadow-2xl bg-base-100 p-10">
                <div className='flex flex-col space-y-4'>
                  <Link to="/home">
                    <button className='btn btn-lg btn-primary text-white shadow-md w-full'> Client </button>
                  </Link>
                  <Link to="/home-pt">
                    <button className='btn btn-lg btn-primary text-white shadow-md w-full'> Personal Trainer</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


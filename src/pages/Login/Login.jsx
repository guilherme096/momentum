import logo from '/logo_azul.png';

export default function Login() {
  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-300 flex justify-center items-center">
          <div className="hero-content flex-col -mt-12">
            <div className="items-center">
              <div className="items-center flex justify-center ">
                <img src={logo} alt="logo" className="w-20 h-auto" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-6xl font-bold">Momentum</h1>
                <h1 className="text-4xl font-light text-center">Fitness</h1>
              </div>
            </div>
            <br />
            <br />
            <div className="card shrink-0 max-w-s shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


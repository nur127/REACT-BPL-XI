import Logo from '../../assets/logo.png'
import heroCover from '../../assets/bg-shadow.png'
import cricket from '../../assets/banner-main.png'

const Header = () => {
    return (
        <div className='text-center'>
            <div className="  bg-base-100 shadow-sm flex justify-between items-center">
                <div>
                    <img className='w-10 h-10' src={Logo} alt="" />
                </div>
                <div className="menu menu-horizontal">
                    <h1 className="btn btn-ghost md:text-xl">Home</h1>
                    <h1 className="btn btn-ghost md:text-xl">Fixures</h1>
                    <h1 className="btn btn-ghost md:text-xl">Teams</h1>
                    <h1 className="btn btn-ghost md:text-xl">Schedules</h1>
                    <div><h1 className="btn btn-ghost md:text-xl ">$500 Coin</h1></div>



                </div>

            </div>
            <div
                className="hero w-full h-2/3 rounded-2xl text-center"
                style={{
                    backgroundImage:
                       ` url(${heroCover})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content flex-col items-center text-center">
                    <div className="max-w-md  ">
                        <img className='w-40 mx-auto' src={cricket} alt="" />
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Claim Free Credit</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;
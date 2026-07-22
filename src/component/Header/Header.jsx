import Logo from '../../assets/logo.png'
import heroCover from '../../assets/bg-shadow.png'
import cricket from '../../assets/banner-main.png'
import { FaCoins } from "react-icons/fa";

const Header = ({ handleSetMoney, money }) => {
    return (
        <div className='text-center '>
            <div className="  bg-base-100 shadow-sm flex justify-between items-center mb-4">
                <div>
                    <img className='w-10 h-10 md:w-15 md:h-15 p-2'  src={Logo} alt="" />
                </div>
                <div className="menu menu-horizontal">
                    <a href='#' className="btn btn-ghost md:text-xl">Home</a>
                    <a href='#' className="btn btn-ghost md:text-xl">Fixures</a>
                    <a href='#' className="btn btn-ghost md:text-xl">Teams</a>
                    <a href='#' className="btn btn-ghost md:text-xl">Schedules</a>
                    <h1 className="btn btn-ghost text-[13px] md:text-xl ">${money} <FaCoins style={{ color: "#FFD700" }} /> </h1>



                </div>

            </div>
            <div
                className="hero w-full max-h-2/3
                 rounded-md text-center mt-2"
                style={{
                    backgroundImage: `
        linear-gradient(180deg, rgba(0,0,0,.7) 20%, rgba(0,0,0,.2) 100%),
        url(${heroCover})
    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="hero-overlay  "></div>
                <div className="hero-content text-neutral-content flex-col items-center text-center rounded-md">
                    <div className="max-w-md  space-y-3">
                        <img className='w-40 mx-auto' src={cricket} alt="" />
                        <h1 className='text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button onClick={() => handleSetMoney()} className="btn btn-primary">Claim Free Credit</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;

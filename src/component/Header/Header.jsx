import Logo from '../../assets/logo.png'
import heroCover from '../../assets/bg-shadow.png'
import cricket from '../../assets/banner-main.png'
import { FaCoins } from "react-icons/fa";

const Header = ({handleSetMoney,money}) => {
    return (
        <div className='text-center'>
            <div className="  bg-base-100 shadow-sm flex justify-between items-center">
                <div>
                    <img className='w-10 h-10' src={Logo} alt="" />
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
                className="hero bg-white w-full h-2/3 rounded-4xl text-center mt-2"
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
                        <button onClick={()=>handleSetMoney()} className="btn btn-primary">Claim Free Credit</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;

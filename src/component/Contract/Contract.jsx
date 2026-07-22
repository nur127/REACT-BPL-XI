

const Contract = () => {
    return (
        <div className="border-2 border-slate-100 w-2/3 mx-auto p-3  absolute   left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl">
            <div className="w-full mx-auto text-center  rounded-md bg-linear-to-r from-indigo-400 via-blue-50 to-orange-200 p-15 text-base-content">
                <h1 className="text-2xl font-bold">Subscribe To Dream 11</h1>
                <p className="text-gray-800">Get The Latest version and news right in your inbox!</p>
                <div className="join">
                    <div>
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn btn-neutral join-item">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Contract;
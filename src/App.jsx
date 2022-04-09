import iconFacebook from "./assets/images/icon-facebook.svg";
import iconTwitter from "./assets/images/icon-twitter.svg";
import iconInstagram from "./assets/images/icon-instagram.svg";
import iconYoutube from "./assets/images/icon-youtube.svg";
import iconUp from "./assets/images/icon-up.svg";
import iconDown from "./assets/images/icon-down.svg";

const CardSocial = ({
    iconSocial,
    icon,
    borderTop,
    dataNumber,
    colorTextToday = "text-green-500",
}) => (
    <article
        className={`
        bg-[#F0F3FA] 
        rounded-md 
        border-t-8 
        ${borderTop} p-6 text-center hover:bg-gray-500/20 transition-all cursor-pointer
        
        `}
    >
        <div className="flex justify-center items-center">
            <img src={iconSocial} alt="" className="mr-4" />
            <p className="font-medium text-gray-600">@lorem</p>
        </div>
        <p className="font-bold text-6xl text-slate-900">{dataNumber}</p>
        <p className="tracking-[0.40em] text-gray-400 mb-5 uppercase">
            Followers
        </p>
        <div className="flex justify-center items-center">
            <img src={icon} alt="" className="mr-2" />
            <p className={`${colorTextToday} font-semibold`}>12 Today</p>
        </div>
    </article>
);

const App = () => {
    return (
        <div className="container mx-auto grid place-content-center min-h-screen">
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <CardSocial
                    iconSocial={iconFacebook}
                    icon={iconUp}
                    borderTop={"border-blue-500"}
                    dataNumber={"1986"}
                />
                <CardSocial
                    iconSocial={iconTwitter}
                    icon={iconUp}
                    borderTop={"border-green-500"}
                    dataNumber={"100"}
                />
                <CardSocial
                    iconSocial={iconInstagram}
                    icon={iconUp}
                    borderTop={"border-pink-500"}
                    dataNumber={"3500"}
                />
                <CardSocial
                    iconSocial={iconYoutube}
                    icon={iconDown}
                    borderTop={"border-red-500"}
                    dataNumber={"200"}
                    colorTextToday={"text-red-500"}
                />
            </section>
        </div>
    );
};

export default App;

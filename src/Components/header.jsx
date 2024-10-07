import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ait from '../assets/AIT.png';

export default function Header({ children }) {
    const data = {
        1: { label: "Գլխավոր", route: "/" },
        2: { label: "Դասընթացներ", route: "/courses" },
        3: { label: "Գրանցում", route: "/register" },
        4: { label: "Մեր մասին", route: "/aboutUs" },
        5: { label: "Բլոգ", route: "/blog" }, 
        6: { label: "Կապ", route: "/kap" } 
    };

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="bg-gray-100 flex w-[1900px]">
            <div className="w-32 p-4 bg-white-800 rounded-lg ml-32">
                <img src={ait} alt="logo-png" className="w-[90px] h-[90px] border rounded-full object-cover" />
            </div>

            <div className="flex align-center">
                <ul className="flex space-x-4 mt-12 ml-96">
                    {Object.entries(data).map(([key, { label, route }], index) => (
                        <li
                            key={key}
                            className={`text-lg font-small text-gray-700 pl-20 ${activeIndex === index ? 'text-blue-700' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <Link to={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

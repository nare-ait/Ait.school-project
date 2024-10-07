export default function Course() {
    const data = {
        1: {
            img: "https://api.aitschool.am/web_course.png",
            p: "Web ծրագրավորում"
        },
        2: {
            img: "https://api.aitschool.am/ui-ux.png",
            p: "UI/UX դիզայն"
        },
        3: {
            img: "https://api.aitschool.am/smm.png",
            p: "SMM"
        },
        4: {
            img: "https://api.aitschool.am/graphic-design.png",
            p: "Գրաֆիկ դիզայն"
        },
        5: {
            img: "https://api.aitschool.am/english.png",
            p: "Անգլերեն"
        },
        6: {
            img: "https://api.aitschool.am/3d-illustration-computer-keyboard-and-mouse-object-png.png",
            p: "Համակարգչային գրագիտություն"
        },
        7: {
            img: "https://api.aitschool.am/ait_kids.png",
            p: "AIT Kids"
        },
        8: {
            img: "https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp",
            p: "LinkedIn Mastery"
        },
        9: {
            img: "https://api.aitschool.am/pm.webp",
            p: "Project Management"
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen py-16">
            <div className="text-center mb-12">
                <p className="text-5xl text-gray-800">Դասընթացներ</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
                {Object.entries(data).map(([key, value]) => (
                    value.img && value.p ? (
                        <div key={key} className="bg-white rounded-lg shadow-lg w-[400px] h-[350px] overflow-hidden hover:scale-105 transform transition duration-300">
                            <img src={value.img} alt={value.p} className="mx-auto w-[200px] h-[200px] object-contain" />
                            <div className="p-6 text-center">
                                <p className="text-xl font-semibold text-gray-700">{value.p}</p>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
}

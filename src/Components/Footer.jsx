export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8  ">
            <div className="w-[800px] mx-auto w-[800px] h-32 border rounded-32 flex flex-col items-center space-y-6 text-gray-800">
                <div className="flex flex-row items-center space-y-4 ">
                    <div className="flex items-center space-x-4">
                        <img className="w-6 h-6" src="https://aitschool.am/images/Phone.svg" alt="Phone" />
                        <p className="text-lg font-medium">+374(93)-67-69-66</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-6 h-6" src="https://aitschool.am/images/Mail.svg" alt="Mail" />
                        <p className="text-lg font-medium">info@aitschool.am</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-6 h-6" src="https://aitschool.am/images/Instagram.svg" alt="Instagram" />
                        <p className="text-lg font-medium">ararat_itcenter</p>
                    </div>
                </div>
                <div className="flex flex-row  space-y-2 ">
                    <div className="flex items-center space-x-4">
                        <img className="w-6 h-6" src="https://aitschool.am/images/FacebookIcon.svg" alt="Facebook" />
                        <p className="text-lg font-medium">Ararat IT Center</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img className="w-6 h-6" src="https://aitschool.am/images/LinkedinIcon.svg" alt="LinkedIn" />
                        <p className="text-lg font-medium">Ararat IT Center</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

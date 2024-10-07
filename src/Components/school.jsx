import './school.css'
export default function School() {
    return (
        <>
            <div className="div">
                <div className="text-center">
                    <h1 className="h1">
                        𝑨𝒓𝒂𝒓𝒂𝒕
                    </h1>
                    <h2 className="text-[80px] mt-[350px] mr-[1200px] font-bold text-gray-800 mt-12">
                        IT School
                    </h2>
                    <p className="text-black-600 text-xl mt-6 max-w-2xl mr-[1100px] mx-auto">
                        Բարձրագույն IT կրթություն մատչելի ծրագրերով
                    </p>

                    <a href="#" className="mt-16 inline-block w-[300px] mr-[1290px] px-10 py-4 mr-[1100px] bg-gradient-to-r from-[#92fe9d] to-[#00c9ff] text-black text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#1BAF95]">
                        Դասընթաց
                    </a>
                </div>

                <div className='absolute'>
                    <img className='w-[550px] ml-[900px]' src="https://aitschool.am/images/main_image.png" alt="helllo" />
                </div>
            </div>
        </>
    );
}

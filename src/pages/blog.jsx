import Footer from '../Components/Footer'


export default function Blog() {
    return (
        <>

            <div className='bg-gray-100 h-[830px]'>
                <div className='flex align-center justify-center '>


                    <div className="container bg-white h-auto p-8 rounded-lg">
                        <p className="text-center text-gray-800 text-xl font-medium leading-relaxed mb-12">
                            Կենտրոնը նպատակ ունի զարգացնել SS բոլոր անդամներին և նրանց ուղղորդել SS
                            ծրագրավորում։ Կենտրոնը տրամադրում է դասընթացներ և ծրագրեր, SS-ն
                            համագործակցում է տարբեր կազմակերպությունների հետ։
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="flex justify-center transform transition duration-500 hover:scale-105">
                                <img
                                    className="rounded-lg shadow-lg hover:shadow-xl w-full h-auto"
                                    src="https://aitschool.am/images/about_us_1.jpeg"
                                    alt="Group of kids with certificates"
                                />
                            </div>

                            <div className="flex justify-center transform transition duration-500 hover:scale-105">
                                <img
                                    className="rounded-lg shadow-lg hover:shadow-xl w-full h-auto"
                                    src="https://aitschool.am/images/about_us_2.jpeg"
                                    alt="Historical church building"
                                />
                            </div>

                            <div className="flex justify-center transform transition duration-500 hover:scale-105">
                                <img
                                    className="rounded-lg shadow-lg hover:shadow-xl w-full h-auto"
                                    src="https://aitschool.am/images/about_us_3.jpeg"
                                    alt="Group of young men at a conference"
                                />
                            </div>
                        </div>
                    </div>


                </div>
                <div className='bg-gray-100' >
                    <div className='mt-[150px] flex align-center justify-center'>
                        <p className='text-[30px]'>Հրապարակումներ</p>
                    </div>

                    <div className='mt-32 ml-[450px] h-[400px] w-[1050px] border border-gray-300 rounded-[50px] flex items-center justify-between bg-white p-8 shadow-lg'>
                        <img className='w-[400px] rounded-[50px] h-[344px] object-cover' src="https://api.aitschool.am/smm.blog.png" alt="img" />

                        <div className="ml-8 text-left">
                            <p className="text-2xl font-semibold text-gray-800 mb-4">Մեկնարկում ենք SMM դասընթաց սկսնակների համար՝ ԶԵՂՉՎԱԾ արժեքով։</p>
                            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#92fe9d] to-[#00c9ff] text-white rounded-full hover:bg-blue-700 transition-colors">
                                Գրանցվել հիմա
                            </button>
                        </div>
                    </div>


                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

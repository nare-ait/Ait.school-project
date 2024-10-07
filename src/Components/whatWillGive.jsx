export default function WiilGive() {
    return (
        <>
            <div className="bg-gray-100">
                <p className="text-[50px] ml-[700px] pt-32">Ինչ կտա ձեզ AIT-ն</p>
                
                <div className="pt-20 flex pl-[100px]">
                    <div className="pt-20 flex">
                        <div className="border rounded-[50px] w-[900px] h-[230px] flex items-start space-x-8 p-8">
                            <div className="text-[90px] pt-4 font-bold text-blue-800">
                                <p>01</p>
                            </div>
                            <div>
                                <p className="text-2xl pt-8">Կրթություն</p>
                                <p className="mt-2 text-gray-700">
                                    Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ:
                                    Ինչպես նաև կարող եք ուսանել Graphic Design, UI/UX Design, SMM և Անգլերեն:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex pl-[200px]">
                    <div className="pt-8 flex">
                        <div className="border rounded-[50px] w-[900px] h-[230px] flex items-start space-x-8 p-8">
                            <div className="text-[90px] pt-4 font-bold text-blue-800">
                                <p>02</p>
                            </div>
                            <div>
                                <p className="text-2xl pt-8">Պրակտիկա</p>
                                <p className="mt-2 text-gray-700">
                                    Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։
                                    Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա։
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pl-[100px] pr-[100px]">
                    <div className="pt-8 flex">
                        <div className="border rounded-[50px] w-[900px] h-[230px] flex items-start space-x-8 p-8">
                            <div className="text-[90px] pt-4 font-bold text-blue-800">
                                <p>03</p>
                            </div>
                            <div>
                                <p className="text-2xl pt-8">Աշխատանք</p>
                                <p className="mt-2 text-gray-700">
                                    Ստացի՛ր մեր թիմին միանալու հնարավորություն։
                                    Մեր ուսանողները կազմում են մեր թիմի 80%-ը։
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ml-[1200px] absolute top-[3050px] justify-center items-center">
                        <img className="w-[700px]  h-auto" src="https://aitschool.am/images/globus.png" alt="Globus" />
                    </div>
            </div>
        </>
    );
}

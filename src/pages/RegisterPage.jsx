export default function RegisterPage() {
    return (
        <>
            <div className="h-[790px]  bg-gray-100 flex flex-row  items-center">
                <div>
                    <img className=" w-[790px]" src="https://aitschool.am/images/registration_image.png" alt="img" />
                </div>

                <div className="w-[700px] rounded-[70px]  ml-[250px] mt-[20px] h-[600px] bg-white p-10 shadow-lg">
                    <p className="text-[25px] text-center font-semibold mb-10">Գրանցում</p>

                    <form className="space-y-5">
                        <div className="flex gap-5 justify-center">
                            <input
                                type="text"
                                placeholder="Անուն"
                                className="rounded-[50px] h-[50px] w-[250px] border border-gray-300 p-4"
                            />
                            <input
                                type="text"
                                placeholder="Ազգանուն"
                                className="rounded-[50px] h-[50px] w-[250px] border border-gray-300 p-4"
                            />
                        </div>

                        <div className="flex gap-5 justify-center">
                            <input
                                type="text"
                                placeholder="Տարիք"
                                className="rounded-[50px] h-[50px] w-[250px] border border-gray-300 p-4"
                            />
                            <input
                                type="text"
                                placeholder="Հեռախոսահամար"
                                className="rounded-[50px] h-[50px] w-[250px] border border-gray-300 p-4"
                            />
                        </div>

                        <div className="flex gap-5 justify-center">
                            <select className="rounded-[50px] h-[50px] w-[250px] border border-gray-300 p-3 text-gray-500" defaultValue="">
                                <option value="" disabled hidden>ՄասնաՃյուղեր</option>
                                <option>Արարատ</option>
                                {/* Add more options here as needed */}
                            </select>

                            <select className="rounded-[50px] h-[50px] w-[250px] border border-gray-300 p-3 text-gray-500" defaultValue="">
                                <option value="" disabled hidden>Հասցե</option>
                                {/* Add address options here */}
                            </select>
                        </div>


                        <div className="flex justify-center">
                            <input
                                type="text"
                                placeholder="Դպրոցի կոդ"
                                className="rounded-[50px] h-[50px] w-[520px] border border-gray-300 p-4"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-[50px] h-[50px] w-[250px] mt-5">
                                Գրանցվել
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

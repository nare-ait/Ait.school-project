export default function Place() {
    return (
        <>
            <div className="bg-gray-100 flex flex-col items-center py-10">
                <p className="text-[50px] ">Մասնաճյուղեր</p>
                <div className="grid grid-cols-1 mt-32 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <img 
                            className="w-96 h-56 rounded-lg object-cover" 
                            src="https://aitschool.am/images/office_ararat.jpg" 
                            alt="Ararat" 
                        />
                        <p className="mt-2 text-center text-gray-600">Ք․Արարատ</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            className="w-96 h-56 rounded-lg object-cover" 
                            src="https://aitschool.am/images/office_yerevan.jpeg" 
                            alt="Yerevan" 
                        />
                        <p className="mt-2 text-center text-gray-600">Ք․Երևան</p>
                    </div>
                </div>
            </div>
        </>
    );
}

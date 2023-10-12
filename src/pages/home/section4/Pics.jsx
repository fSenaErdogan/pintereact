
const Pics = () => {
    return (
        <div className="thrpho w-1/2 relative bg-[url('sec4/picone.png')] bg-cover bg-[length:100%]">
            <div className="pics">
                <div className="pictwo absolute 
                top-[206px] left-[84px] w-[215px] h-[385px]
                bg-[url('sec4/pictwo.png')]
                bg-cover bg-[length:100%] rounded-xl">
                    <div className="text absolute bottom-[-55px] right-8 text-white">Scout the City <br /> 56,7 bin takipçi</div>
                </div>
                <div className="picthr absolute
                top-[530px] left-[48px] w-[96px] h-[94px]
                bg-[url('sec4/picthr.png')]
                bg-center bg-[length:100%] rounded-full">
                </div>
            </div>
        </div>
    )
}

export default Pics
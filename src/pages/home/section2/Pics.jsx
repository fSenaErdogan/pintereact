import { FaSearch } from "react-icons/fa"
const Pics = () => {
    return (
        <div className="onepho w-1/2 relative all-rounded">
            <div className="picone absolute top-[62px] left-[460px] w-[178px] h-[218px] bg-[url('sec2/picone.png')] bg-center bg-[length:100%]"></div>
            <div className="pictwo absolute top-[212px] left-[115px] w-[204px] h-[285px] bg-[url('sec2/pictwo.png')] bg-center bg-[length:100%]"></div>
            <div className="pictre absolute top-[415px] left-[488px] w-[164px] h-[258px] bg-[url('sec2/picthr.png')] bg-center bg-[length:100%]"></div>
            <div className="picfou absolute top-[150px] left-[263px] w-[298px] h-[456px] bg-[url('sec2/picfou.png')] bg-center bg-[length:100%]"></div>
            <div className="search flex gap-2 absolute top-[295px] left-[215px] w-[316px] h-[100px] justify-center items-center text-center bg-white">
                <FaSearch size={25}/>
                <div className="text text-2xl font-bold text-orange-950 opacity-90 ">kolay tavuk yemeği</div>
            </div>
        </div>
    )
}

export default Pics
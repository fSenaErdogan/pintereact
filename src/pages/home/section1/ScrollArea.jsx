import { Link } from "react-router-dom"


import { FaAngleDown } from "react-icons/fa"

const ScrollArea = () => {
    return (
        <>
            <div className="arrowbutton">{/* aşağı indiren ok animasyonu*/}</div>
            <div className="howitwork flex gap-x-2 justify-center items-center mt-auto bg-[rgb(255,246,145)] py-3 text-center">
                Bu, şu şekilde işler
                <FaAngleDown size={20} />
            </div>
        </>
    )
}

export default ScrollArea
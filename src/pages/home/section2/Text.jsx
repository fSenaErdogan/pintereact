
const Text = () => {
    return (
        <div className="onetxt w-1/2 h-[100vh] grid place-content-center">
            <div className="content text-center w-[500px] flex flex-col gap-y-4 text-rose-700/90">
                <h1 className="text-6xl mb-3 font-bold ">Bir fikir arayın</h1>
                <p className="text-2xl ">Şimdi ne denemek istersiniz? "Kolay <br /> tavuk yemeği" gibi ilgilendiğiniz bir <br /> şey düşünün ve neler bulacağınıza <br /> bakın.</p>
                <button className=" px-4 py-1 bg-rose-700/90 font-bold rounded-3xl w-fit mx-auto text-[rgb(255,246,145)] ">
                    Keşfet
                </button>
            </div>
        </div>
    )
}

export default Text

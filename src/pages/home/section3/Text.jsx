
const Text = () => {
    return (
        <div className="twotext w-1/2 h-[100vh] grid place-content-center z-30">
            <div className="content text-center w-[650px] flex flex-col gap-4 text-cyan-800 ">
                <h1 className="text-6xl mb-3 font-bold">Beğendiğiniz fikirleri kaydedin</h1>
                <p className="text-2xl">En beğendiğiniz fikirlere daha <br />sonra geri dönmek için kaydedin.</p>
                <button className="px-4 py-1 bg-cyan-800 text-[#d6fff7] font-bold rounded-3xl w-fit mx-auto">
                    Keşfet
                </button>
            </div>
        </div>
    )
}
export default Text
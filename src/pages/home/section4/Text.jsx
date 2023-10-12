
const Text = () => {
    return (
        <div className="thrtext w-1/2 h-[100vh] grid place-content-center">
            <div className="content text-center w-[650px] flex flex-col gap-4 text-red-700">
                <h1 className="text-6xl mb-2 font-bold">Gör, üret, <br /> dene, yap</h1>
                <p className="text-2xl">Pinterest'in en iyi yanı dünyanın her <br /> yerindeki kullanıcılardan yeni şeyler ve <br /> fikirler keşfetmek.</p>
                <button className="px-4 py-1 bg-red-700 text-[#ffdeec] font-bold rounded-3xl w-fit mx-auto">Keşfet</button>
            </div>
        </div>
    )
}

export default Text
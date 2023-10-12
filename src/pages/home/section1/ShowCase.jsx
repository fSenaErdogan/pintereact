
import { GoDotFill } from "react-icons/go"

const ShowCase = () => {
    return (
        <>
            <div className="container grid gap-y-4 pt-32 text-6xl font-semibold">
        <div className="flex justify-center">Sıradaki fikri bulun</div>
        <div className="flex justify-center text-blue-600 pb-4">yeni giyim sitili</div>
        {/* alt başlık 4 farklı seçenek için dönecek renkler ve alttaki slider
           butonu ona göre renklenip istenilen slider itemine geçiş sağlanacak*/}
        <div className="flex gap-2 justify-center">
          <GoDotFill size={20} />
          <GoDotFill size={20} />
          <GoDotFill size={20} />
          <GoDotFill size={20} />
        </div>
      </div>
      <div className="images">{/* arkaplan 7 columnluk resim sütunları*/}</div>
        </>
    )
}

export default ShowCase
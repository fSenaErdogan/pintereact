import Header from "./Header"
import ScrollArea from "./ScrollArea"
import ShowCase from "./ShowCase"

const Section1 = () => {

  return (
    <div className="one w-full flex flex-col h-[100vh] bg-[#ffffff]">
      <Header />
      <ShowCase />
      <ScrollArea />
    </div>
  )
}


export default Section1
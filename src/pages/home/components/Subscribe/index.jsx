import { SubscribeForm } from "../../../../globalComponents/Subscribe/form"


export const Subscribe = () => {
  return (
    <div className="mt-20">
      <div className=" rounded-[25px] lg:grid lg:grid-cols-[2fr_3fr] overflow-hidden">
        <div className=" bg-linear-to-r from-white02 to-gray py-[60px] lg:py-[114px] lg:pl-[100px] px-[40px]">
          <SubscribeForm/>
        </div>
        <div className="bg-gray"></div>
      </div>
    </div>
  )
}

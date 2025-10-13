import Samsung from "../../../assets/images/BrandLogo-1.png"
import OpenAI from "../../../assets/images/BrandLogo-2.png"
import Amazan from "../../../assets/images/BrandLogo-3.png"
import Tencent from "../../../assets/images/BrandLogo-4.png"
import Spotify from "../../../assets/images/BrandLogo-5.png"

export const Companies = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-between gap-12 my-[100px]">
        <div className="w-[33%] lg:w-fit">
          <img src={Samsung} alt="" />
        </div>
        <div className="w-[33%] lg:w-fit">
          <img src={OpenAI} alt="" />
        </div>
        <div className="w-[33%] lg:w-fit">
          <img src={Amazan} alt="" />
        </div>
        <div className="w-[33%] lg:w-fit">
          <img src={Tencent} alt="" />
        </div>
        <div className="w-[33%] lg:w-fit">
          <img src={Spotify} alt="" />
        </div>

    </div>
  )
}

import { HiMiniClock } from "react-icons/hi2";


// const BlogCard = ({image,title,pathname}) => {
const BlogCard = ({pathname, ...props}) => {
    const { image, title ,category, date } = props;
    const isHomePage = pathname === '/';
    // const isBlogPage = pathname === '/blog';
    const HomePageCard = () =>
            isHomePage && (
                <>
                    <div className="border border-transparent hover:border hover:border-black100 hover:p-[20px] hover:lg:p-[45px] hover:rounded-[25px] transition-all duration-300"> 
                        <div className='max-h-[406px] rounded-[25px]  overflow-hidden'>
                            <img src={image} alt="Blog Image" className='w-full h-full object-cover'/>
                        </div>
                        <h4 className='font-poppins font-semibold text-lg lg:text-[24px] leading-[30px] text-black01 my-8'>{title}</h4>
                        <div className="flex items-center justify-between">
                            <div className="py-2 px-2.5 bg-orange rounded-[10px]">
                                <span className="font-monserrat font-bold text-sm lg:text-base text-white">{category}
                                </span>
                            </div>
                            <span className="flex items-center gap-x-2 font-monserrat font-normal text-xs lg:text-sm text-black01">
                                {" "}
                                <HiMiniClock color="#303030" />
                                {date}
                            </span>

                        </div>
                    </div>
                </>
        );
        const BlogPageCard = () =>
            !isHomePage && (
                <>
                    <div> 
                        <div className='max-h-[406px] rounded-[25px]  overflow-hidden'>
                            <img src={image} alt="Blog Image" className='w-full h-full object-cover'/>
                        </div>
                        <h4 className='font-poppins font-semibold text-2xl leading-[30px] text-black01 my-8'>{title}</h4>
                        This is my blog page.
                    </div>
                </>
        );
  return (
    <>
        <HomePageCard />
        <BlogPageCard />
    </>
    
  )
}

export default BlogCard

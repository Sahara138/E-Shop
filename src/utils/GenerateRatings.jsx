import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.75 ;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

    const stars = [];
    for(let i=0; i < fullStars; i++){
        stars.push(
            <span key={`full-${i}`}>
                <FaStar className="text-yellow"/>
            </span>
        )
        
    }
    if(halfStars){
        stars.push(
            <span key="half">
                <FaRegStarHalfStroke className="text-yellow"/>
            </span>
        )
    }
    for(let i=0; i < emptyStars; i++){
        stars.push(
            <span key={`empty-${i}`}>
                <FaRegStar className="text-yellow"/>
            </span>
        )
    }
    return stars;
}
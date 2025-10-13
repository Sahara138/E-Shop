import { useMemo } from "react"

export const useStockStatus = (stock, sold) => {
    return useMemo(() => {
        const availableStock = stock - sold;
        const soldPercentage = stock > 0 ? ( sold / stock ) * 100 : 0;
        const roundedPercentage = Math.round(soldPercentage);

        if(roundedPercentage >= 100 || availableStock <= 0) {
            return{
                color: "gray",
                status: "Out of Stock",
                percentage: 0
            }
        }else if(roundedPercentage >= 80) {
            return{
                color: "#FF624C",
                status: "Limited Stock",
                percentage:roundedPercentage
            }
        }else {
            return{
                 color: "#303030",
                status: `${availableStock} Available`,
                percentage: roundedPercentage
            }
        }

        
    },[stock, sold])
}
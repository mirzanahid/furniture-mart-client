import { useEffect, useState } from "react"

const useSeller = email => {

    const [isSeller, setSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/role/${email}`)
                .then(res => res.json())
                .then(data => {


                    if (data.isSeller) {
                        setSeller(data.isSeller)
                        setIsSellerLoading(false)
                    }
                })
        }

    }, [email, isSeller])
    return [isSeller, isSellerLoading]
}

export default useSeller


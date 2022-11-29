import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://furniture-mart-server-pink.vercel.app/user/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isBuyer) {
                        setIsBuyer(data.isBuyer)
                        setIsBuyerLoading(false)
                    }
                })
        }

    }, [email, isBuyer])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer


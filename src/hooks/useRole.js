import { useEffect, useState } from "react"

const useRole = email => {

    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isBuyer, setIsBuyer] = useState(false);
    const [isSeller, setSeller] = useState(false);
    const [isRoleLoading, setIsRoleLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    // if (data.isAdmin) {
                    //     setIsAdmin(data.isAdmin)
                    //     setIsRoleLoading(false)
                    // }
                    // if (data.isBuyer) {
                    //     setIsBuyer(data.isBuyer)
                    //     setIsRoleLoading(false)
                    // }
                    if (data.isSeller) {
                        setSeller(data.isSeller)
                        setIsRoleLoading(false)
                    }
                })
            console.log(isSeller)
        }

    }, [email, isSeller])
    return [isSeller, isRoleLoading]
}

export default useRole


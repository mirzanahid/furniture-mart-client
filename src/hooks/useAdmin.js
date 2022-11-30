import { useEffect, useState } from "react"

const useAdmin = email => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://furniture-mart-server-xi.vercel.app/user/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin)
                        setIsAdminLoading(false)
                    }
  
                })
        }

    }, [email,isAdmin])
    return [isAdmin,isAdminLoading]
}

export default useAdmin


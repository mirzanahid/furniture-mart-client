import { useEffect, useState } from "react"

const useAdmin = email => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin)
                        setIsAdminLoading(false)
                    }
  
                })
        }
      console.log("check admin",isAdmin)
    }, [email,isAdmin])
    return [isAdmin,isAdminLoading]
}

export default useAdmin


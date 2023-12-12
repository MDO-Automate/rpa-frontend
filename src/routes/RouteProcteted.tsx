import { ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

const RouteProtected = ({ children }: Props)=> { 
    const navigate = useNavigate()
    const [ isValid, setIsValid ] = useState<boolean>(false)
    
    useEffect(()=> {
        const { session, sessionID } = localStorage
        const isSession = session !== undefined ? session : 'false'
        const istokenSession = sessionID !== undefined    
        if(isSession === 'true' && istokenSession) {
            setIsValid(true)
            return
        } 
        setIsValid(false)
        navigate('/login') 

    }, [])// eslint-disable-line
   
    return(
        <>
        {isValid && children}
        </>
    )
}

export default RouteProtected
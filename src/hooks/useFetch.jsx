import { useState } from "react";

export const useFetch = (callback)=>{
    const [loader, setLoader] = useState(false)
    const [err, setErr] = useState("")
    const fetching = async()=>{
        try{
            setLoader(true)
            await callback()
        }catch(e){
            setErr(e.message)
        }finally{
            setLoader(false)
        }
    }
    return [fetching, loader, err]
}
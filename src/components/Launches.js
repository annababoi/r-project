import {getLaunchesAxios} from "../services/launches.api.services";
import {useEffect, useState} from "react";
import Launch from "./Launch";
import launch from "./Launch";


export default function Launches() {
    let [launches, setLaunches] = useState([])
    useEffect(() => {
            getLaunchesAxios().then(({data})=> {
                setLaunches(data)
                })
        }, [])
return (
    <div>
        {launches.map((launch, index) => (<Launch key = {index} launch={launch}/>))}
    </div>
);




}

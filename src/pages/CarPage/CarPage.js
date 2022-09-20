import {CarForm, Cars} from "../../components";
import {useEffect, useState} from "react";
import {carService} from "../../services";



const CarPage = () => {
    const [cars,setCars] = useState([])
    // const [] = useState(null)

    useEffect(()=> {
        carService.getAll().then(({data:res})=>{
setCars(res.data)
        })
    },[])

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarPage};
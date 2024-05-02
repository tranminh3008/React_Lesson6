import React, {useState} from 'react';
import axios from "axios";

const API1 = () => {
    const [data,setData] = useState(null);
    const url = "https://663389a1f7d50bbd9b49bc91.mockapi.io/students";
    function getData(){
        axios
        .get(url)
        .then((res) => {
            console.log(res);
            setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    getData();
    return (
        
        <div>
            <h1>Tìm hiểu API</h1>
            {data && data.map((item, index) => <h1>{item.name}</h1>) }
        </div>
    );
}

export default API1;

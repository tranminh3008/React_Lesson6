import React, { useEffect, useState } from 'react';
import axios from "axios";
import Student from './Student';

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
    useEffect (() => {
        getData();
    }, []);
    return (
        
        <div>
            <h1>Tìm hiểu API</h1>
            {data && data.map((item, index) => <Student key = {index} student = {item}/> ) }
        </div>
    );
}

export default API1;

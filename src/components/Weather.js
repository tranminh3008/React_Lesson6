import React, { useEffect, useState } from 'react';
import axios from "axios";
import moment from 'moment';

const Weather = () => {
    const [data, setData] = useState(null);
    const date = moment().format("MMMM");
    const date2 = moment().format("Do");
    const current_day = { date2 };
    const day_name = "";
    const apikey = "94ce64967f2f5e7f6474badb45f42c36";
    const text = "Ho Chi Minh";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apikey}`;
    switch (current_day) {
        case 0:
            day_name = "Chủ nhật";
            break;
        case 1:
            day_name = "Thứ hai";
            break;
        case 2:
            day_name = "Thứ ba";
            break;
        case 3:
            day_name = "Thứ tư";
            break;
        case 4:
            day_name = "Thứ năm";
            break;
        case 5:
            day_name = "Thứ sau";
            break;
        case 6:
            day_name = "Thứ bảy";
    }
    const getData = () => {
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {data && (
                <>
                    <p className='name'>{data.name}</p>
                    <p className='local'><i class="fa-solid fa-location-dot"></i>{data.name}</p>
                    <p className='date'><i class="fa-solid fa-calendar-day"></i>{date} | {day_name}</p>
                    <p className='weather'>{data.weather[0].description}</p>
                    <p className='local'>City: {data.name}</p>
                    <p className='temp'>Temp: {data.main.temp}</p>
                    <p className='country'>Country: {data.sys.country}</p>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                </>
            )}
        </div>
    );
}

export default Weather;


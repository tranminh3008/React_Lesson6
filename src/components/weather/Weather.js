import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./weather.css";

const Weather = (props) => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [text, setText] = useState("");
  const date = moment().format("dddd");
  const apikey = "94ce64967f2f5e7f6474badb45f42c36";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}`;
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apikey}`;
  const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=imperial&appid=${apikey}`;
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getData2 = () => {
    axios
      .get(url2)
      .then((res) => {
        console.log(res);
        setData2(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getData3 = () => {
    axios
      .get(url3)
      .then((res) => {
        console.log(res);
        setData3(res.data);
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //     getData();
  // }, [])
  return (
    <div>
      <div className="search">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              getData();
              getData2();
              getData3();
            }
          }}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </button>
      </div>
      {data && (
        <div className="info">
          <p className="name">{data.name}</p>
          <div className="main">
            <div className="left">
              <div className="top">
                <p className="local">
                  <i className="fa-solid fa-location-dot"></i>
                  {data.name}
                </p>
                <p className="date">
                  <i className="fa-solid fa-calendar-day"></i>
                  DayTime | {date}
                </p>
              </div>
              <div className="mid">
                <p className="tempF">{data2.main.temp}℃ </p>
                <p> | </p>
                <p className="tempF"> {data3.main.temp}℉</p>
              </div>
              <div className="bottom">
                <p className="weather">{data.weather[0].description}</p>
                <p className="local">City: {data.name}</p>
                <p className="temp">Temp: {data.main.temp}</p>
                <p className="country">Country: {data.sys.country}</p>
              </div>
            </div>
            <div className="right">
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

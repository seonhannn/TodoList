import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";
import { useState, useEffect } from "react";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        color: #868e96;
        font-size: 20px;
    }
    .tasks-left {
        color: #8EC3B0;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
    .weather {
        color: #868e96;
        display: flex;
        margin-top: 10px;
        font-size: 16px;
    }
    .place {
        margin-right: 10px;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const dayName = today.toLocaleDateString("ko-KR", {weekday: "long"});

    // 날씨
    const [weather, setWeather] = useState(null);
    const API_KEY = "614f734515b5ebb1a40e59ef2c368a27";

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="weather">
                <div className="place">{weather?.name}</div>
                <div className="temp">{weather?.main.temp}도</div>
            </div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
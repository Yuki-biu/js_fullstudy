// 入口文件
import React from "react";  // es6 import  全面使用es6语法
import ReactDOM from "react-dom";
import "./styles.css";  // css  wxss  global.css 全局样式
// react 语法  小程序
import { MyComponent } from "./demo"

function App() {
    return (
        // WXML  JSX
        <div className = "App">
            App
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement);

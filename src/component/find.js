import React from "react";
import {  Typography } from 'antd';

import { Button } from "antd";
import { useRef } from "react";
import { Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";
import "./style.css"
const Find = () => {
    
    const inputAsk = useRef(null);
    const [todos, setTodos] = useState([]);
    const [loading,setLoading]= useState(false)
    const returnAsk = useRef([]);
    const { Title } = Typography;
    const handleAddTask = () => {
        const getCategories = async()=>{
            const cate =document.getElementById("busqueda").value;
           
            const result =await axios.get( `https://api.chucknorris.io/jokes/search?query=${cate} `).then((response)=>{
              console.log(response.data.result)
              setTodos(response.data.result)
            }).catch((error)=>{
              console.log(error)
            }).finally(()=>{
                setLoading(false);
            })
          }
          getCategories();

    };

    useEffect(() => {
        setLoading(true);
        handleAddTask();
       
        handleAddTask();
      },[]);
    if(loading){
        return <p>Data is loading...</p>;
    }
      
    return(
        <div>
            <Row>
                <label  for="busqueda">
                    Palabras clave:   
                </label>
                <input type="text" id="busqueda" name="busqueda"  ref={returnAsk}  defaultValue=""/>
                <Button id="but" type="primary" icon={<SearchOutlined />}  onClick={handleAddTask}>
                    Buscar
                </Button>
            </Row>
            <Row>
                <Title level={2}>Resultados de la búsqueda</Title>
            </Row>
 
            <Row>
                <table>
                    <thead>
                        <tr>
                            <th>TEXTO</th>
                            <th>CATEGORIAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        
  
                    {todos.map((item)=>{
  
                                <tr>
                                <td>{item.value}</td>
                                <td>{item.categories}</td>
                                </tr>
  
                        })
                    }
                    </tbody>
                    
          
                </table>

 
            </Row>
        </div>
    );
}
export default Find;


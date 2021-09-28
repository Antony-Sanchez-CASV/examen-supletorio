import React from "react";
import {  Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { useRef } from "react";
import { Row } from "antd";
import TextArea from "rc-textarea";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css"
const Find = () => {
    
    const inputAsk = useRef(null);
    const [todos, setTodos] = useState([]);
    const returnAsk = useRef(null);
    const { Title } = Typography;
    const handleAddTask = async () => {
        const getTable = async()=>{
            const query=inputAsk.current.value;

            const result =await axios.get(  `https://api.chucknorris.io/jokes/search?query=${query} `).then((response)=>{
                setTodos(response);
            }).catch((error)=>{
              console.log(error)
            })
          }
          getTable();

    };
    useEffect(() => {
       
        handleAddTask();
      },[]);
    

    return(
        <div>
            <Row>
                <label  for="busqueda">
                    Palabras clave:   
                </label>
                <input type="text" id="busqueda" name="busqueda"  ref={inputAsk} />
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
                        {
 
                        }
                    </tbody>
                </table>
            </Row>

           
            
            
        
        </div>
    );
}
export default Find;

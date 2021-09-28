import {  Typography } from 'antd';
import axios from "axios";
import React,{useEffect} from "react";
import { Button } from "antd";
import { Row, Col } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import "./style.css"

const Jokes = () => {
  const [category, setCategory] = useState([]);
  
  const [state, setState] = useState({
    are: ''
  })
  
  const handleAddTask = () => {
    
    const getCategories = async()=>{
      const cate =document.getElementById("cat").value;
      //Error que presenta cuando se teclea en cualquier categoria no funciona
      const result =await axios.get( `https://api.chucknorris.io/jokes/random?category=${cate} `).then((response)=>{
        console.log(response.data)
        setState({
          ...state,
          are: response.data.value
        });
      }).catch((error)=>{
        console.log(error)
      })
    }
    getCategories();

  };
 
 
  const getData = async()=>{
    const data=await fetch( `https://api.chucknorris.io/jokes/categories `)
    const cat =await data.json();
    console.log(cat);
    setCategory(cat);
  }
 
  useEffect(() => {
    fetchData();
    getData();
    handleAddTask();
  },[]);
  const fetchData = async() =>{
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    setState({
      ...state,
      are: result.data.value
    });
  }

  

  const { Title } = Typography;
 
  
  return (
    <div>
      
      <Row>
        <Title id="title">Chuck Norris Jokes</Title>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <label  for="categorias">
            Categorias: 
          </label>
 
          <select id="cat" defaultValue="default" style={{ width: 240 }} name="categorias">
            <option value="random">Cualquier_Categoria</option>
            <option value={category[0]}>{category[0]}</option>
            <option value={category[1]}>{category[1]}</option>
            <option value={category[2]}>{category[2]}</option>
            <option value={category[3]}>{category[3]}</option>
            <option value={category[4]}>{category[4]}</option>
            <option value={category[5]}>{category[5]}</option>
            <option value={category[6]}>{category[6]}</option>
            <option value={category[7]}>{category[7]}</option>
            <option value={category[8]}>{category[8]}</option>
            <option value={category[9]}>{category[9]}</option>
            <option value={category[10]}>{category[10]}</option>
            <option value={category[11]}>{category[11]}</option>
            <option value={category[12]}>{category[12]}</option>
            <option value={category[13]}>{category[13]}</option>
            <option value={category[14]}>{category[14]}</option>
            <option value={category[15]}>{category[15]}</option>           

          </select>
        </Col>
             
        
      </Row>
      <Row  gutter={16}>
          <Button id="but" type="primary" icon={<SearchOutlined />}  onClick={handleAddTask}>
              Otra broma
          </Button>
        </Row>
       
      <Row gutter={16}>
         <Title level={3} id ="res">{state.are}</Title> 
      </Row>
       
    </div>
  );
  
};

export default Jokes;

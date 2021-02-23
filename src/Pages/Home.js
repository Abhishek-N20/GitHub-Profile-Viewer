import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/RepoCard";
import { Redirect } from "react-router-dom";
import { UserContext } from '../Context/UserContext';
import { toast } from "react-toastify";
import RepoCard from "../components/RepoCard";



const Home =()=>{
    const context=useContext(UserContext)
    const [query,setQuery]=useState('')
    const [user,setUser]=useState(null)

    const fetchDetails=async ()=>{
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log({data})
        } catch (error) {
            toast("Not able to fetch User Details",{type:"error"})
            
        }
    }

// if(!context.user?.email){
//     return <Redirect to="/signin"/>

// }

    
return (
    <Container >
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              placeholder="Please provide the username"
              onChange={(e)=>setQuery(e.target.value)}

            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">Fetch User</Button>
            </InputGroupAddon>
          </InputGroup>
          {user ?<UserCard  user={user}/> :null }
        </Col>
        <Col md="7">{user ? <RepoCard repos_url={user.repos_url}/>: null }</Col>
      </Row>
    </Container>
  );

    

}


export default Home;
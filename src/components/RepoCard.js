import React,{useState,useEffect} from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
import Axios from 'axios'


const RepoCard=({repos_url})=> {
    const [repos,setRepos]= useState([])

    const fetchRepo = async ()=>{
        const {data} = await Axios.get(repos_url);
        setRepos(data)
    }

    useEffect(()=>{
        fetchRepo()
    },[repos_url])

    return (
        <ListGroup>
            {repos.map(repo=>(
                <ListGroupItem key={repo.id}>
                    <div className="text-primary text-uppercase">{repo.name}</div>
                    <div className="text-secondary">Language Used:-{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default RepoCard;
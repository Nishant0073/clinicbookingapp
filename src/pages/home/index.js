import './index.css';
import {useState,useEffect} from 'react';
import Detail from './Details';
import MedicalDetail from './MedicalDetails';
import { Grid} from 'semantic-ui-react'

export default function Profile() {
  //data for the component
  let [data,setData] = useState({});
  let [flipStyle,setFlipStyle] = useState({});
  
  //fetching data from server after page rendered
  useEffect(()=>{
    fetch("/server.json")
    .then(res=>res.json())
    .then(data=>{
      // convert symptoms String to Array
      data.symptoms=data.symptoms.split(',')
      setData(data);
    });
  },[]);
  
  
  return (
      <Grid verticalAlign='middle' columns={2} only='computer' centered>
                    <Grid.Row>
                        <Grid.Column>
    <div className="profile">
    <h1>Patient Profile</h1>
    <div className="pic box">
    {/*eslint-disable-next-line*/}
      {/*Profile Picture*/}
      <img src={data.pic} alt='Profile Picture' style={flipStyle} />
      <h3>{data.name}</h3>
    </div>
    {/*Personal details*/}
    <Detail data={data}/>
    {/*Medical details*/}
    <MedicalDetail data={data}/>
    </div>
      </Grid.Column>
                    </Grid.Row>
    
                </Grid>
  )
}

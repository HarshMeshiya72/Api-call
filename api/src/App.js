import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character ')
      .then(function (response) {
        console.log(response.data.results);
        setdata(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])
  return (
    <div>
      <Row className='rick g-3'>
        {
         data.length !== 0 ? data.map((item, index) => {
            return (
              <>
                <Col lg={6} className='col'>
                  <div className="box d-flex">
                    <div className="img w-30">
                      <img src={item.image} width={'100%'} />
                    </div>
                    <div className='w-75 ms-3'>
                      <h3 className='mt-3 color name'>{item.name}</h3>
                      <div className='d-flex align-items-center '>
                      <div className='circle' style={{background:item.status==="Alive"?"green":item.status==="unknown"?"#9E9E9E":"red"}}></div>
                      <div className='color human ms-1'>{item.status}-{item.species}</div>
                      </div>
                      
                      <div className='color'><span className='qe'>Gender : </span>{item.gender}</div>
                      <div className='color'><span className='qe'>Last known location:</span><br></br>{item.location.name}</div>
                      <div className='color last'><span className='qe'>First seen in:</span><br></br>{item.type}</div>
                    </div>
                  </div>
                </Col>
              </>
            )
          }):<span class="loader"></span>
        }
      </Row>

    </div>
  );
}
export default App;
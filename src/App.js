import React from 'react';

import { Header, Logo, Card, Grid,Map} from './styles';
import {BsPeopleFill, BsTag} from 'react-icons/bs'

export default function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <Header>
          <Logo></Logo>
          <h2>Reactstrap</h2>
        </Header>
      </div>

      <hr />

      <div className="row">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Messages  <span class="badge badge-pill badge-danger">12</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" href="/">Account Settings</a>
          </li>
        </ul>
      </div>

      <div className="row">
        <Card className="col-12 border">
            <div>
              image
            </div>
        </Card>  
      </div>

      <div className="row">
        <Grid>
          <Card className="border">
              <div>
                image
              </div>
          </Card>  
          <Card className="border">
            <div>
              image
            </div>
          </Card>   
          <Card className="border">
            <div>
              image
            </div>
          </Card> 
        </Grid>
      </div>

      <hr />

      <div className="row">
        <div className="col-6">
            <h3>Contato</h3>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><BsPeopleFill /></span>
              </div>
              <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" className="form-control" placeholder="Email" />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><BsTag /></span>
              </div>
              <input type="text" className="form-control" placeholder="Assunto" />
            </div>
            <div className="form-group">
              <label for="obs">Observações</label>
              <textarea className="form-control" id="obs" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-primary">Enviar</button>
        </div>
        <div className="col-6">
            <h3>Localização</h3>
            <Map></Map>
        </div>
      </div>

      <hr />
      <h3>Realização</h3>
      <div className="row">
        <div className="col-2">
          <Map></Map>
        </div>
        <div className="col-2">
          <Map></Map>
        </div>
        <div className="col-2">
          <Map></Map>
        </div>
        <div className="col-2">
          <Map></Map>
        </div>
        <div className="col-2">
          <Map></Map>
        </div>
        <div className="col-2">
          <Map></Map>
        </div>
      </div>
    </div>
    <hr />
    
    <h3 className="text-center">
      @vinicastro
    </h3>
    </>
  );
}

import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  Input,
  Col
} from 'reactstrap';

import Weather from './weather';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       weather: null,
       cityList: [],
       newCityName: ''
    };
  }

  getCityList = () => {
    fetch('/api/cities')
    .then(res => res.json())
    .then(res => {
      var cityList = res.map(r => r.city_name);
      this.setState({ cityList });
    });
  };

  handleInputChange = (e) => {
    this.setState({ newCityName: e.target.value });
  };

  componentDidMount () {
    this.getCityList();
  }

  render () {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
        <NavbarBrand href="/">MyWeather</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
          <div class="mt-4 p-5 bg-primary text-white rounded">
          <h1 className="display-3">MyWeather</h1>
              <p className="lead">The current weather for your favorite cities!</p>

              <InputGroup>
          <Input placeholder="New city name..."
                  value={this.state.newCityName}
                  onChange={this.handleInputChange}
                  />
                <div class="input-group mb-3 input-group-sm" addonType="append">
                  <Button color="primary" onClick={this.handleAddCity}>Add City</Button>
                </div>
          </InputGroup>

          </div>
          
          </Col>
        </Row>
        <Row>
          <Col>
  
          </Col>
        </Row>
        <Weather/>
      </Container>
  
    );
  }
  
  

  
};

  

export default App;

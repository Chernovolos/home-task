import React from "react";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import ListComponent from "./ListComponent";
import { CARS } from "../utils";
import { v4 as uuidv4 } from 'uuid';

class MainPage extends React.Component {
    state = {
        searchModel: "",
        searchValue: "",
        cars: CARS,
    };

    updateSearchModel = ({target}) => {
        this.setState({
            searchModel: target.value,
        });
    };

    updateSearchValue = ({target}) => {
        this.setState({
            searchValue: target.value,
        })
    };

    onSearchModel = () => {
        const { state: { cars, searchModel } } = this;
        let carsModel =  cars.filter(obj => obj.model.toUpperCase() === searchModel.toUpperCase());
        return this.setState({
            ...this.state,
            cars: carsModel,
        })
    };

    onAddListElement = () => {
        this.setState({
            cars: [...this.state.cars, { id: uuidv4(), model: `New Car`, color: "blue", }]
        });
    };

    onDeleteListElement = () => {
        const { state: { cars } } = this;
        this.setState({
            cars: cars.slice(0, cars.length - 1)
        })
    };

    filterCarsColor = () => {
        const { state: { cars } } = this;
        let carsColorBlue = [];
        carsColorBlue = cars.filter(obj => obj.color === "blue");
        return this.setState({
            cars: carsColorBlue,
        })
    };

    render() {
        console.log("cars",this.state.cars);

        let { searchModel, searchValue, cars } = this.state;

        return (
            <Container>
                <section className="mb-4 mt-4">
                    <Row>
                        <Col sm={5}>
                            <InputGroup>
                                <FormControl
                                    value={searchModel}
                                    onChange={this.updateSearchModel.bind(this)}
                                    placeholder="search model..."
                                />
                                <InputGroup.Append>
                                    <Button onClick={this.onSearchModel.bind(this)} size="sm" variant="outline-info" className="text-uppercase">search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col sm={5}>
                            <InputGroup>
                                <FormControl
                                    value={searchValue}
                                    onChange={this.updateSearchValue.bind(this)}
                                    placeholder="search value..."
                                />
                                <InputGroup.Append>
                                    <Button size="sm"  variant="outline-info" className="text-uppercase">search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </section>
                <section className="mb-4">
                    <div className="mb-2">
                        <Button onClick={this.onDeleteListElement.bind(this)} variant="danger" size="lg" className="mr-4 text-uppercase">delete</Button>
                        <Button onClick={this.filterCarsColor.bind(this)} variant="info" size="lg" className="mr-4 text-uppercase">filter</Button>
                        <Button onClick={this.onAddListElement.bind(this)} variant="primary" size="lg" className="mr-4 text-uppercase">add</Button>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <ListComponent cars={cars}/>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}

export default MainPage;
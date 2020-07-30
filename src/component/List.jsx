import React from "react";
import { ListGroup } from "react-bootstrap";
import ListElement from "./ListElement";

class List extends React.Component {

    render() {
        let { cars } = this.props;
        return(
            <ListGroup className="mb-4">
                {
                    cars.map(({id, model, color}) => {
                        return (
                            <ListElement key={id} model={model} color={color}/>
                        )
                    })
                }
            </ListGroup>
        );
    }
}

export default List;
import React from "react";
import { ListGroup } from "react-bootstrap";

class ListElement extends React.Component {

    render() {
        let { id, color, model } = this.props;
        return(
            <ListGroup>
                <ListGroup.Item key={id}>
                    <span className="text-uppercase font-weight-bold">model: </span>{model},
                    <span className="text-uppercase font-weight-bold"> color: </span>{color};
                </ListGroup.Item>
            </ListGroup>
        );
    }
}

export default ListElement;
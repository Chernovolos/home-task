import React from "react";
import { ListGroup } from "react-bootstrap";

class List extends React.Component {

    render() {
        let { cars } = this.props;
        return(
            <ListGroup>
                {
                    cars.map(({id, model, color}) => {
                        return (
                        <ListGroup.Item key={id}>
                            <span className="text-uppercase font-weight-bold">model: </span>{model},
                            <span className="text-uppercase font-weight-bold"> color: </span>{color};
                        </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        );
    }
}

export default List;
import React from "react";
import List from "./List";

class ListComponent extends React.Component {

    render() {
        let { cars } = this.props;
        return (
            <>
                <List cars={cars}/>
            </>
        );
    }
}

export default ListComponent
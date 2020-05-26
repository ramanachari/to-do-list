import React, { Component } from "react";
import Pagination from "react-js-pagination";
import 'bootstrap-less/bootstrap/bootstrap.less'

class Paging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 15
        };
    }

    handlePageChange(pageNumber) {
       
        this.setState({ activePage: pageNumber });
    }

    render() {
        return (
            <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}
export default Paging;

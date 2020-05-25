import React, { Component } from 'react';
import './Header.css'

import { connect } from 'react-redux';

import * as actions from '../../actions/toDoAction';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentFilter: ''
        }
    }

    handleChangeEvent = (e) => {

        this.setState({ currentFilter: e.target.value });
        //debugger;
        this.state.currentFilter = e.target.value;
        this.props.updateFilter(e.target.value);

    }

    render() {

        return (

            <div className="navbar navbar-expand-sm bg-dark navbar-info justify-content-center bg-info">
   
                
                <div className='form-group has-search'>
                    <span className='fa fa-search form-control-feedback'></span>
                    <input
                        type='text'
                        value={this.state.currentFilter}
                        className='form-control'
                        onChange={this.handleChangeEvent}
                        placeholder='Search' />
                </div>
                </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
                    updateFilter: (filter) => dispatch(actions.updateFilterData(filter))
    };
}

export default connect(null, mapDispatchToProps)(Header);
import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import {loadData} from '../../redux/user.redux';
import {connect} from 'react-redux';

class Dashboard extends React.Component {


    render() {
        return (
            <div>
                Dashboard
            </div>
        );
    }
}

export default Dashboard;

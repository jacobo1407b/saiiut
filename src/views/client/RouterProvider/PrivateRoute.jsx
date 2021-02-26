import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const PrivateRoute = ({component:Component,  ...rest}) => {
    const user = useSelector(state=>state.user);
    const {pathRedirect} = useSelector(state=>state);
    return (
        <Route
        {...rest}
        render ={props=> user.token ? (
            <Component {...props}/>
        ):(
            <Redirect to={pathRedirect}/>
        )}
        />
    )
}

PrivateRoute.PropTypes={
    component: PropTypes.oneOfType(PropTypes.object, PropTypes.func).isRequired
};
export default PrivateRoute

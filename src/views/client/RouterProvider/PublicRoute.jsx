import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const PublicRoute = ({component:Component,  ...rest}) => {
    const user = useSelector(state=>state.user);
    const {pathAuth} = useSelector(state=>state);

    return (
        <Route
        {...rest}
        render ={props=> !user.token ? (
            <Component {...props}/>
        ):(
            <Redirect to={pathAuth}/>
        )}
        />
    )
}
PublicRoute.PropTypes={
    component: PropTypes.oneOfType(PropTypes.object, PropTypes.func).isRequired
};
export default PublicRoute

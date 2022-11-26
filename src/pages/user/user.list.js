import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { getUsers } from "../../store/user/actions"

const UserList = props => {
    const { users, onGetUsers, error } = props

    useEffect(() => {
        onGetUsers()
    }, [onGetUsers])

    return (
        <div>
            <span key={error?.response?.status}>{error?.message}</span>
            {users.map((item) => <li key={item.id}>{item.firstName}</li>)}
        </div>
    )
}

UserList.propTypes = {
    error: PropTypes.any,
    users: PropTypes.array,
    onGetUsers: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users,
        error: state.userReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUsers: () => dispatch(getUsers()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
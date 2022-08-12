import React from 'react';

const UserProfile = ({id, name, username, email, address, phone, website, company}) => {
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>
            <div> address:</div>
            <div> phone: {phone}</div>
            <div> website: {website}</div>
            <div> company:</div>

        </div>
    );
};

export default UserProfile;
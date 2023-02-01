import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function User() {
    const [user, setUser] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`http://localhost:8000/user/${params.id}`)
        .then((res) => res.json())
        .then((result) => {
            setUser(result.user);
        });
    }, [params.id]);
    console.log(user)

    return (
        <>
        <Header />
        <div>
            <p>here</p>
            {user[0] && <p>id is {user[0].id}</p>}
        </div>
        </>
    );
}

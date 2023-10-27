import { GoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Example() {

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    return (
        <>
            <div>
                <div>
                    <h2>React Google Login</h2>
                    <br />
                    <br />
                    {profile ? (
                        <div>
                            <img src={profile.picture} alt="user image" />
                            <h3>User Logged in</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <br />
                            <br />
                            <button onClick={logOut}>Log out</button>
                        </div>
                    ) : (
                        <button onClick={() => login()}>Sign in with Google 🚀 </button>
                    )}
                    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                </div>

            </div>
        </>
    )
}

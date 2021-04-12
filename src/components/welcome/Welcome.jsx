import React from "react";

import { Link } from "react-router-dom";

import "./Welcome.css"

const Welcome = () => (
    <div className="welcome">
        <div className="welcomeContent">
            <h2>Compartilhe e descubra conhecimento</h2>
            <p>Leia ideias e experiencias sobre diversos tópicos da área de Computação <br/> e compartilhe as suas próprias.</p>
            <Link className="welcomeSignup" to="/agora/sign-in-up">
                Cadastre-se
        </Link>
        </div>
    </div>
);

export default Welcome;

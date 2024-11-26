import { useState } from "react";
import "./validacion.css"; 

const Login = () => {
    //maneje las variables en ingles por que no sabia si podia usar la ñ
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const enviarInformacion = (event) => {
        event.preventDefault(); 
        console.log("Email:", email);
        console.log("Password:", password);
        alert(`Bienvenido, ${email}`);
    };

    return (
        <div className="contenedor-login">
            <form className="estructura-login" onSubmit={enviarInformacion}>
                <h2>Iniciar Sesión</h2>

                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
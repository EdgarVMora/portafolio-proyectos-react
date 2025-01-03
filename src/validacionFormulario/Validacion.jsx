import { useState } from "react";
import "./validacion.css"; 

const Login = () => {
    //maneje las variables en ingles por que no sabia si podia usar la ñ
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    
    const enviarInformacion = (event) => {
        event.preventDefault() 
        /*
         if (!email) {
             console.log("El campo de correo electrónico está vacío.");
             alert("Por favor, ingresa tu correo electrónico.");
             return;
         }
        */
         let emailInvalido = !email ? "correo invalido" : "correo valido"
         alert(emailInvalido)
        /*
         if (!password) {
             console.log("El campo de contraseña está vacío.");
             alert("Por favor, ingresa tu contraseña.");
             return;
         }
        */
         let passwordInvalido = !password ? "contraseña invalida" : "contraseña valida"
         alert(passwordInvalido)

         setEmailError(!email)
         setPasswordError(!password)

        if(email && password){
            console.log("Email:", email);
            console.log("Password:", password);
            alert(`Bienvenido, ${email}`);
        }
        
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
                    className={emailError ? "error" : ""}
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={passwordError ? "error" : ""}
                />

                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
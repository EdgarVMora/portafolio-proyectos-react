import { useState } from "react";
import "./diferentes-formularios.css"; 

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    
    const enviarInformacion = (event) => {
        event.preventDefault() 
  
         let emailInvalido = !email ? "correo invalido" : "correo valido"
         alert(emailInvalido)
    
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
                <h2>Registro</h2>
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text"
                    id="name"
                    placeholder="ingresa tu nombre" 
                />

                <label htmlFor="last-name">Apellidos</label>
                <input 
                    type="text"
                    id="last-name"
                    placeholder="ingresa tus apellidos" 
                />  

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
                    placeholder="crea una contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={passwordError ? "error" : ""}
                />
                <input 
                    type="password"
                    id="confirm-password"
                    placeholder="confirma tu contraseña"
                />

                <fieldset>
                    <legend>Seleciona tu genero:</legend>
                    <label for="male">
                        <input 
                            type="radio"
                            name="gener"
                            value="male"
                            id="male" 
                            checked
                        /> 
                        Masculino
                    </label>
                    <label for="female">
                        <input 
                            type="radio"
                            name="gener"
                            value="female"
                            id="female" 
                            checked
                        />
                        Femenino
                    </label> 
                </fieldset>

                <fieldset>
                    <legend>Que opcion te interesa mas:</legend>
                        <label For="sport">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="sport"
                                id="sport"
                            />
                            Deportes
                        </label>
                        <label For="music">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="music"
                                id="music"
                            />
                            Musica
                        </label>
                        <label For="art">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="art"
                                id="art"
                            />
                            Arte
                        </label>
                         <label For="technology">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="technology"
                                id="technology"
                            />
                            Tecnologia
                        </label>

                </fieldset>

                <label htmlFor="birthday">Seleciona tu fecha de nacimiento</label>
                <input 
                    type="date"
                    id="birthday" 
                />

              

                
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
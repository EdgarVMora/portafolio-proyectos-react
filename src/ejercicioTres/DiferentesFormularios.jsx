import { useState } from "react";
import "./diferentes-formularios.css"; 

const Login = () => {
    const [nameError, setNameError]=useState(false)
    const [lastNameError, setLastNameError]=useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorEmpty, setPasswordErrorEmpty] = useState(false)

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handlePassword = (event) =>{
        const valida = event.target.value

        setPassword(valida)
        setPasswordErrorEmpty(valida === "")

    }
    
    const enviarInformacion = (event) => {
        event.preventDefault() 
        const name = event.target.elements.name.value
        const lastName = event.target.elements.lastName.value
        const email = event.target.elements.email.value

        if (!name || !lastName || !email){
            setNameError(true)
            setLastNameError(true)
            setEmailError(true)
            return

        } else {
            console.log("Nombre: ", name)
            console.log("Apellidos: ", lastName)
            console.log("Email: ", email)
        }

        if (!password) {
            setPasswordErrorEmpty(true)
            return
        }

        if(password !== confirmPassword){
            setPasswordError(true)
            return
        } 

        setPasswordError(false)
        console.log("las constraseñas coinciden")
        console.log("Contraseña:", password)
        
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
                    className={nameError ? "error" : ""}
                    onChange={()=>setNameError(false)}
                />
                {nameError && <span className="error_message">Este campo es obligatorio</span>}

                <label htmlFor="last-name">Apellidos</label>
                <input 
                    type="text"
                    id="lastName"
                    placeholder="ingresa tus apellidos" 
                    className={lastNameError ? "error" : ""}
                    onChange={()=>setLastNameError(false)}
                /> 
                {lastNameError && <span className="error_message">Este campo es obligatorio</span>} 

                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo"
                    className={emailError ? "error" : ""}
                    onChange={()=>setEmailError(false)}
                />
                 {emailError && <span className="error_message">Este campo es obligatorio</span>} 

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="crea una contraseña"
                    value={password}
                    onChange={handlePassword}
                    className={passwordErrorEmpty ? "error" : ""}                    
                />
                {passwordErrorEmpty && <span className="error_message">Este campo es obligatorio</span>}

                <label htmlFor="confirmPassword">Confirma tu contraseña</label>
                <input 
                    type="password"
                    id="confirmPassword"
                    placeholder="confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={passwordError ? "error" : ""}
                />
                {passwordError && <span className="error_message">Las constraseñas no coinciden</span>}

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
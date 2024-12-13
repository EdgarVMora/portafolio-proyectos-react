import { useState } from "react";
import "./diferentesFormularios.css"; 

const Login = () => {
    const [nameError, setNameError]=useState(false)
    const [lastNameError, setLastNameError]=useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorEmpty, setPasswordErrorEmpty] = useState(false)
    const [generError, setGenerError] = useState(false)
    const [hobbyError, setHobbyError] = useState(false)
    const [birthdayError, setBirthdayError] = useState(false)



    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const isValid =
            !nameError &&
            !lastNameError &&
            !emailError &&
            !passwordErrorEmpty &&
            !passwordError &&
            !generError &&
            !hobbyError &&
            !birthdayError &&
            password !== "" &&
            confirmPassword !== "" &&
            Array.from(document.querySelectorAll('[name="hobby"]:checked')).length > 0;

        setIsFormValid(isValid);
    };



    const handlePassword = (event) =>{
        const triedPassword = event.target.value

        setPassword(triedPassword)
        setPasswordErrorEmpty(triedPassword === "")
        validateForm()
    }

    const handleHobbyChange = (event)=>{
        const hobbies = Array.from(event.target.form.elements.hobby)
        .filter((checkbox) => checkbox.checked)
        setHobbyError(hobbies.length === 0)
        validateForm()
    }

    const handleBirthdayChange = (event) => {
        const birthday = event.target.value

        if (!birthday) {
            setBirthdayError("Por favor selecciona tu fecha de nacimiento");
            return;
        }

        const birthDate = new Date(birthday);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        const isUnderage = monthDifference < 0 || (monthDifference === 0 && dayDifference < 0);
        if (age < 18 || (age === 18 && isUnderage)) {
            setBirthdayError("Debes tener al menos 18 años para registrarte");
        } else {
            setBirthdayError(false); 
        }
        validateForm()
    }
    
    const enviarInformacion = (event) => {
        event.preventDefault() 
        console.log("formulario completo")

        const name = event.target.elements.name.value
        const lastName = event.target.elements.lastName.value
        const email = event.target.elements.email.value
        const gender = event.target.elements.gender.value
        const hobbies = Array.from(event.target.elements.hobby)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value)
        const birthday = event.target.elements.birthday.value
        
        const datos = {};


        if (!name){
            setNameError(true)
        } else {
            datos.nombre = name;
        }

        if(!lastName){
            setLastNameError(true)

        }else{
            datos.lastName=lastName;
        }

        if(!email){
            setEmailError(true)

        }else{
            datos.email=email;
        }

        if (!password) {
            setPasswordErrorEmpty(true)
            return
        } else{
            datos.password = password;
        }

        if(password !== confirmPassword){
            setPasswordError(true)
            return
        } else {
            datos.confirmPassword = confirmPassword;
        }

        setPasswordError(false)
       

        if (!gender) {
            setGenerError(true)
        } else {
            setGenerError(false)
            datos.genero = gender;
        }

        if (hobbies.length === 0) {
            setHobbyError(true)
        } else {
            setHobbyError(false)
            datos.hobby = hobbies;
        }

        if(!birthday){
            setBirthdayError("selecciona tu fecha de nacimiento")
        } else  {
            datos.cumpleanos = birthday;
        }

        
        console.log("Datos del formulario:", datos);
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
                    onChange={()=>setNameError(false)
                    }
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
                    <label htmlFor="male">
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            id="male" 
                            
                        /> 
                        Masculino
                    </label>
                    <label htmlFor="female">
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            id="female" 
                            
                        />
                        Femenino
                    </label> 
                    {generError && <span className="error_message">Por favor selecciona tu género</span>}
                </fieldset>

                <fieldset>
                    <legend>Que opcion te interesa mas:</legend>
                        <label htmlFor="sport">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="sport"
                                id="sport"
                                onChange={handleHobbyChange}
                            />
                            Deportes
                        </label>
                        <label htmlFor="music">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="music"
                                id="music"
                                onChange={handleHobbyChange}
                            />
                            Musica
                        </label>
                        <label htmlFor="art">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="art"
                                id="art"
                                onChange={handleHobbyChange}
                            />
                            Arte
                        </label>
                         <label htmlFor="technology">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="technology"
                                id="technology"
                                onChange={handleHobbyChange}
                            />
                            Tecnologia
                        </label>
                        {hobbyError && <span className="error_message">Por favor selecciona al menos un hobby</span>}
                </fieldset>

                <label htmlFor="birthday">Seleciona tu fecha de nacimiento</label>
                <input 
                    type="date"
                    id="birthday" 
                    onChange={handleBirthdayChange}
                    className={birthdayError ? "error" : ""}
                />
                {birthdayError && <span className="error_message">{birthdayError}</span>}
                
                <button 
                type="submit"
                disabled={!isFormValid}
                className={`boton ${isFormValid ? "boton-habilitado" : "boton-deshabilitado"}`}
                >Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
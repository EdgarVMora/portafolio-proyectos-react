import { useState } from "react"
import "./mejorasFormulario.css" 

const MejorasFormulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    genero: "",
    hobbies: [],
    fechaDeNacimiento: "",
  })

  const [fieldTouched, setFieldTouched] = useState({
    nombre: false,
    apellido: false,
    correo: false,
    contrasena: false,
    genero: false,
  })

  const [errorMessage, setErrorMessage] = useState ({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    genero: "",
    fechaDeNacimiento: "",
  })

  const validateField = (name, value) => {
    let message = ""
    if(!value){
        message = "Este campo es obligatorio"
    }else if (name === "correo" && !/\S+@\S+\.\S+/.test(value)){
      message = "El correo debe llevar un @ y un dominio valido"
    }else if (name === "contrasena") {
        if (value.length < 8) {
          message = "Debe tener al menos 8 caracteres";
        } else if (!/[A-Z]/.test(value)) {
          message = "Debe contener al menos una letra mayúscula";
        } else if (!/\d/.test(value)) {
          message = "Debe contener al menos un número";
        }
      } else if (name === "fechaDeNacimiento") {
        const selectedDate = new Date(value); 
        const today = new Date();
    
        if (isNaN(selectedDate.getTime())) {
          message = "La fecha no es válida";
        } else {
          let age = today.getFullYear() - selectedDate.getFullYear();
          const monthDifference = today.getMonth() - selectedDate.getMonth();
          const dayDifference = today.getDate() - selectedDate.getDate();
    
          if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
          }
    
          if (age < 18) {
            message = "Debes tener al menos 18 años";
          }
        }
      }
    
      setErrorMessage((prev) => ({
        ...prev,
        [name]: message,
      }));
    };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if(type === "checkbox"){
        setFormData((prev) => ({
            ...prev,
            hobbies: checked
            ? [...prev.hobbies, value] 
            : prev.hobbies.filter((item) => item !== value),
        }))
    }else { 
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    }

    validateField(name, value)
  }


  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setFieldTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
    
    if (value || errorMessage[name]) {
      validateField(name, value);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData)
  }

  const isFormComplete = () => {

    const hasErrors = Object.values(errorMessage).some((msg) => msg !== "");
  

    const requiredFields = ["nombre", "apellido", "correo", "contrasena", "fechaDeNacimiento"];
    const allFieldsFilled = requiredFields.every(
      (field) => formData[field] && formData[field] !== ""
    );
  
    return !hasErrors && allFieldsFilled;
  };

  return (
    <div className="contenedor_login">
<form className="estructura_login" onSubmit={handleSubmit}>
    <h2>Registro de usuario</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.nombre ? (formData.nombre ? "verde" : "rojo") : ""}
        />
        {errorMessage && <span className="error">{errorMessage.nombre}</span>}
      </div>
      <div className="campo">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Ingresa tus apellidos"
          value={formData.apellido}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.apellido ? (formData.apellido ? "verde" : "rojo") : ""}
        />
        {errorMessage && <span className="error">{errorMessage.apellido}</span>}
      </div>
      <div className="campo">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Ingresa tu email"
          value={formData.correo}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.correo ? (formData.correo ? "verde" : "rojo") : ""}
        />
        {errorMessage && <span className="error">{errorMessage.correo}</span>}
      </div>
      <div className="campo">
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="Ingresa una contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.contrasena ? (formData.contrasena ? "verde" : "rojo") : ""}
        />
        {errorMessage && <span className="error">{errorMessage.contrasena}</span>}

      </div>

      <div className="campo">
      <fieldset>
                    <legend>Seleciona tu genero:</legend>
                    <label htmlFor="male">
                        <input 
                            type="radio"
                            name="genero"
                            value="male"
                            onChange={handleChange}
                        /> 
                        Masculino
                    </label>
                    <label htmlFor="female">
                        <input 
                            type="radio"
                            name="genero"
                            value="female"
                            onChange={handleChange}
                        />
                        Femenino
                    </label> 
                    <label htmlFor="otro">
                        <input 
                            type="radio"
                            name="genero"
                            value="otro"
                            onChange={handleChange}
                        />
                        Otro
                    </label> 
                </fieldset>
                {errorMessage.genero && <span className="error">{errorMessage.genero}</span>}
      </div>

      <div className="campo">
      <fieldset>
                    <legend>Que opcion te interesa mas:</legend>
                        <label htmlFor="deporte">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="deporte"
                                checked={formData.hobbies.includes("deporte")}
                                onChange={handleChange}
                                
                            />
                            Deportes
                        </label>
                        <label htmlFor="musica">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="musica"
                                checked={formData.hobbies.includes("musica")}
                                onChange={handleChange}
                                
                            />
                            Musica
                        </label>
                        <label htmlFor="arte">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="arte"
                                checked={formData.hobbies.includes("arte")}
                                onChange={handleChange}
                                
                            />
                            Arte
                        </label>
                         <label htmlFor="tecnologia">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="tecnologia"
                                checked={formData.hobbies.includes("tecnologia")}
                                onChange={handleChange}
                            />
                            Tecnologia
                        </label>
                </fieldset>    
      </div>
      <div className="campo">
      <label htmlFor="birthday">Seleciona tu fecha de nacimiento
                <input 
                    type="date"
                    name="fechaDeNacimiento"
                    value={formData.fechaDeNacimiento} 
                    onChange={(e) => {
                        handleChange(e);
                        validateField(e.target.name, e.target.value);
                    }}
                    className={errorMessage.fechaDeNacimiento ? "error" : ""}
                />
                </label>
                {errorMessage.fechaDeNacimiento && <span className="error">{errorMessage.fechaDeNacimiento}</span>}
      </div>
      <button type="submit" disabled={!isFormComplete()}>
        Enviar
      </button>
    </form>
    </div>
    
  )
}

export default MejorasFormulario;

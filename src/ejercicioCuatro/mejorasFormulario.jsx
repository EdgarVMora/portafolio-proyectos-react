import { useState } from "react"
import "./mejorasFormulario.css" 

const MejorasFormulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    genero: "",
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
  })

  const validateField = (name, value) => {
    let message = ""
    if(!value){
        message = "Este campo es obligatorio"
    } else if (name === "contrasena" && value.length < 6) {
        message = "Debe tener al menos 6 caracteres";
      }
    setErrorMessage((prev)=> ({
        ...prev,
        [name]: message,
    }))
  }

  const isFormComplete =
    formData.nombre && formData.apellido && formData.correo && formData.contrasena


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    validateField(name, value)
  }


  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFieldTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
    validateField(name, value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData)
  }

  return (
    <div className="contenedor_login">
<form className="estructura_login" onSubmit={handleSubmit}>
    <h2>Registro</h2>
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
        {errorMessage && <span className="error">{errorMessage.email}</span>}
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
                        <label htmlFor="sport">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="sport"
                                id="sport"
                                
                            />
                            Deportes
                        </label>
                        <label htmlFor="music">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="music"
                                id="music"
                                
                            />
                            Musica
                        </label>
                        <label htmlFor="art">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="art"
                                id="art"
                                
                            />
                            Arte
                        </label>
                         <label htmlFor="technology">
                            <input 
                                type="checkbox"
                                name="hobby"
                                value="technology"
                                id="technology"
                            />
                            Tecnologia
                        </label>
                </fieldset>    
      </div>
      <div className="campo">
      <label htmlFor="birthday">Seleciona tu fecha de nacimiento</label>
                <input 
                    type="date"
                    id="birthday" 
                />
      </div>
      <button type="submit" disabled={!isFormComplete}>
        Enviar
      </button>
    </form>
    </div>
    
  )
}

export default MejorasFormulario;

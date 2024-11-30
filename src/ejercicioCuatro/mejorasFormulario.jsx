import { useState } from "react"
import "./mejorasFormulario.css" 

const MejorasFormulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
  })

  const [fieldTouched, setFieldTouched] = useState({
    nombre: false,
    apellido: false,
    correo: false,
    contrasena: false,
  })


  const isFormComplete =
    formData.nombre && formData.apellido && formData.correo && formData.contrasena


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleBlur = (e) => {
    const { name } = e.target;
    setFieldTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData)
  }

  return (
    <div className="contenedor_login">
<form className="estructura_login" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.nombre ? (formData.nombre ? "verde" : "rojo") : ""}
        />
      </div>
      <div className="campo">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.apellido ? (formData.apellido ? "verde" : "rojo") : ""}
        />
      </div>
      <div className="campo">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.correo ? (formData.correo ? "verde" : "rojo") : ""}
        />
      </div>
      <div className="campo">
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldTouched.contrasena ? (formData.contrasena ? "verde" : "rojo") : ""}
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

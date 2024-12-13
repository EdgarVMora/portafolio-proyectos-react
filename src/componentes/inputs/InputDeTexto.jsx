

function TextInput ({
    type,
    id,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    fieldTouched,
    error
}){
return (
    <div className="campo">
<label htmlFor={id}>Nombre:</label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={fieldTouched ? (value ? "verde" : "rojo") : ""}
        />
        {error && <span className="error">{error}</span>}
      </div>
)
}

export default TextInput


function TextInput ({
    type,
    id,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    fieldTouched,
    error
}){
return (
    <div className="campo">
<label htmlFor={id}>{label}:</label>
        <input
          type={type}
          id={id}
          label={label}
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
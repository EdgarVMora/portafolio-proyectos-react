function RadioInput ({
  options,
  id,
  label,
  onChange
}){
    return(
    <>
      {Object.entries(options).map(([id, label]) => (
        <label htmlFor={id} key={id}>
          <input
            type="radio"
            label={label}
            id={id}
            value={id}
            onChange={onChange}
          />
          {label}
        </label>
      ))}
    </>
    )
}

export default RadioInput
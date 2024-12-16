function RadioInput ({
    options,
    onChange,
    name,
    selectedValue
  }){
    return(
      <>
      {options.map((option) => (
        <label key={option.id} htmlFor={option.id}>
          <input
            type="radio"
            id={option.id} 
            value={option.id} 
            onChange={onChange} 
          />
          {option.label}
        </label>
      ))}
    </>
    )
  }
      

  export default RadioInput
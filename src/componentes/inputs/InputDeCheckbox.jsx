import React from "react"
const Checkbox = ({ value, label, checked, onChange }) => {
    return (
      <label>
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    )
  }
  

  const CheckboxGroup = ({ options, formData, handleChange }) => {
    return (
      <fieldset>
        <legend>¿Qué opción te interesa más?</legend>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            label={option.label}
            checked={formData.hobbies.includes(option.value)}
            onChange={handleChange}
          />
        ))}
      </fieldset>
    )
  }
  
  export default CheckboxGroup
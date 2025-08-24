import { forwardRef } from 'react'

export const FormField = forwardRef(function FormField(props, ref) {
  return (
    <>
      <label htmlFor={props.id} className="form-label">{props.label}</label>
      <input
        ref={ref}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        className="form-control" />
    </>
  )
})

//import { useState } from 'react'

const Form = (props) => {
  
  
  const handleChange = (event) => {
    /* TODO - Logic for changing state based on form changes */
    //console.log('new value', event.target.value)

    const value = event.target.value
    
    props.setFormData({
      ...props.formData,
      [event.target.name]: value
      
    })
    
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /* TODO - Logic for calling props to handle submission and setting state changes */
    alert('Data was submitted: ' );
    props.handleSubmit()
    
  }

  return (
    <form onSubmit = {onFormSubmit}>
      
      {/* first input name */}
      <label> Name: </label>
      <input type='text' name= 'linkName' value= {props.formData.linkName} onChange={handleChange}/>
      
      {/* second input url */}
      <label> Url: </label>
      <input type= 'text' name= 'linkUrl' value= {props.formData.linkUrl} onChange={handleChange}/>

      <input type= 'submit' value= 'Submit'/>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    </form>
  )
}

export default Form

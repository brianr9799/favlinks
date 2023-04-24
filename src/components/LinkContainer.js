import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {


  const[formData, setFormData] = useState({linkName:'', linkUrl:''})
  const[linkData, setLinkData] = useState([])

  const handleRemove = (index) => {
    /* TODO - Create logic for setting the state to filter array and remove favLink at index */

    setLinkData(favlinks => {
      return favlinks.filter((_,i) => i !== index)
    })
    
    alert("removed");
  }

  const handleSubmit = () => {
    /* TODO - Create logic to set state and add new favLink to favLinks array in state */
    const newFavLinks = {name: formData.linkName,URL: formData.linkUrl }
    setLinkData([...linkData, newFavLinks])

  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      
      <Table removeLink={handleRemove} linkData={linkData}/>
      
      <br />

      <h3>Add New</h3>

      <Form handleSubmit ={handleSubmit} formData={formData} setFormData={setFormData}/>
      
    </div>
  )
}

export default LinkContainer

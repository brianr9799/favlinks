import { useState, useEffect } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {


  const[formData, setFormData] = useState({linkName:'', linkUrl:''})
  const[linkData, setLinkData] = useState([])

  const fetchLinks = async () => {
    /*
        TODO -fetch data from db for table
    */
    try{
      let response = await fetch('/links')
      console.log(response)
      let data = await response.json()
      setLinkData(data)
      console.log(data)
     } catch (error) {
          console.log(error)
        }
    }

  const deleteLink = async(index) => {
    //console.log(index +' index ')
    try{
      let response = await fetch('/links/:id')
      console.log(response,'deleteLink LC '+ index)
      let data = await response.json()
      console.log(data)
    }catch (error) {
      console.log(error)
    }
  }  
  const postLink = async (newLink) => {
   // let testLink = {
   //   name: "Test 5/1/23",
   //  URL: "test.com"
   // 
   // }
    try {
      //making the API call
      let response = await fetch('/new', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLink),
      })
      console.log(response)
      let message = response.text()
      console.log(message)
    }catch (error){
    console.log(error)
    }
  }

    useEffect(() => {
      fetchLinks()
      
    }, [])
  
  const handleRemove = (index) => {
    /* TODO - Create logic for setting the state to filter array and remove favLink at index */

    setLinkData(favlinks => {
      return favlinks.filter((_,i) => i !== index)
    })
    deleteLink(index)
    alert("removed");
    
  }

  const handleSubmit = () => {
    /* TODO - Create logic to set state and add new favLink to favLinks array in state */
    const newFavLinks = {name: formData.linkName,url: formData.linkUrl }
    setLinkData([...linkData, newFavLinks])

    //save data to Postgres
    postLink(newFavLinks)
    fetchLinks()
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

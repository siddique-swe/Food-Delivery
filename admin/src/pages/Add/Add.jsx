import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
  const [image,setImage] = useState(false);
  const [data,setData]= useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const onChangeHandler = (event)=>{
    const name= event.target.name;
    const value= event.target.value;
    setData(data=>({...data,[name]:value}))

  }
  const onSubmiHandler = async (event)=>{
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name",data.name)
    formdata.append("description",data.description)
    formdata.append("price",Number(data.price))
    formdata.append("category",data.category)
    formdata.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formdata);
    if(response.data.success){
        setData({
          name:"",
          description:"",
          price:"",
          category:"Salad"
        })
        setImage(false)
        toast.success(response.data.message)
    }
    else{
        toast.error(response.data.message)
    }

  }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmiHandler}>
          <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id ="image" hidden required />
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='type here name' />
          </div>
          <div className="add-product-description flex-col">
            <p> Product Description</p>
           <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here'></textarea>
          </div>
          <div className="add-category flex-col">
            <select onChange={onChangeHandler}  name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwitch">Sandwitch</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Producr Price</p>
            <input onChange={onChangeHandler} value={data.price } type="Number" name='price' placeholder='$20' />
          </div>
          <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add

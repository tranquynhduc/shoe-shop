import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { getProducts, saveProduct, TOKEN } from '../../../api/httpRequest';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import { add_product } from '../../Redux/Action';
import { MultiSelect } from "react-multi-select-component";


function AddProduct() {

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [sizeObject, setSizeObject] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeCreate = async () => {
    if (!image || !name || !sizeList || !price || !category || !description || !countInStock || !brand) {
      toast.warning("Vui lòng điền đầy đủ thông tin sản phẩm.")
    }
    try {
      const response = await saveProduct(data, TOKEN)
      toast.success("Thêm sản phẩm mới thành công.")
      navigate(-1);
      dispatch(add_product(response.data))
    } catch (error) {

    }
  }
  let sizeList = []
  sizeObject.forEach(({label, value}) => {
    sizeList.push(value)
  })
  console.log(sizeList);
  const data = {
    image,
    name,
    sizeList,
    price,
    brand,
    category,
    description,
    countInStock
  }


  const handleSubmitForm = (e) => {
    e.preventDefault();
  }
  const hanldeClickAdminHome = () => {
    navigate(-1);
  }
  const hanldeImageProduct = (e) => {
    const image = e.target.files[0];
    image.preview = URL.createObjectURL(image)
    setImage(image);
  }
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview)
    }
  }, [image])
  //select option
  const options = [
   {label: '28' , value: 28},
   {label: '29' , value: 29},
   {label: '30' , value: 30},
   {label: '31' , value: 31},
   {label: '32' , value: 32},
   {label: '33' , value: 33},

  ]
  return (
    <div>
      <div className='newUserHome'>
        <div className='newUser'>
          {/*  <div className='newUserItem'>
            {urlLink ? (<img className='userUpdateImg' src={urlLink} alt='a' />) : (<img className='userUpdateImg'  src={imageDefault}   alt='Upload' />)}
            <input placeholder='URL Link' value={urlLink} onChange={(e) => setUrlLink(e.target.value)} />
          </div> */}
          <div className='uploadImageProduct'>
            <label htmlFor='file'>
              {image || image.preview ? (<img className=' avatar' src={image || image.preview} alt='img' />) :
                (<img className=' avatar' src={imageDefault} />)}
            </label>
            <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeImageProduct} />
          </div>

          <form className='newUserForm' onSubmit={handleSubmitForm}  >
            <div className='newUserItem'>
              <label>Or Link image</label>
              <input type='text' placeholder='Url Link' value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Name Product</label>
              <input type='text' placeholder='Enter your Name Product' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Price</label>
              <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Count In Stock</label>
              <input type='number' placeholder='Count In Stock' value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Brand</label>
              <input type='text' placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
            </div>

            <div className='newUserItem'>
              <label>Category</label>
              <input type='text' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Size</label>
              <MultiSelect
                options={options}
                value={sizeObject}
                onChange={setSizeObject}
                labelledBy="Select"
              />
            </div>
          </form>
          <div className='newUserItem'>
            <label>Decription</label>
            <textarea className='detail_Texttarea' rows='10' placeholder='Description...' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button className='listUser_btn btn create' onClick={hanldeCreate} >Create</button>
          <button className='listUser_btn btn' onClick={hanldeClickAdminHome}  > Cancel </button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct

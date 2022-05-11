import React, { useEffect, useState } from 'react'
import '../Style/EditProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import { Link, useParams } from 'react-router-dom'
import { MdCloudUpload } from 'react-icons/md'
import {
    remove_product,
    select_product,
    update_product
} from '../../Redux/Action'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import posterDefault from '../../image/poster.png'
import { getProduct, updateProduct, TOKEN } from '../../../api/httpRequest'
import Loading from '../../Loading'
import { formatPrice } from './../../../utils/common'
import { MultiSelect } from 'react-multi-select-component'

function UpdateProduct() {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [countInStock, setCountInStock] = useState('')
    // const [urlLink, setUrlLink] = useState('');
    const [isForm, setIsForm] = useState(true)
    const navigate = useNavigate()
    const editProducts = useSelector(state => state.contactProducts.products)
    const dispatch = useDispatch()
    /*   const fetchProducts =async (_id) =>{
      try {
        const response= await getProduct(_id)
        dispatch(update_product(response.data))

      } catch (error) {

      }
    } */
    const { id } = useParams()
    const findIdProducts = editProducts.find(
        editProduct => editProduct._id === id
    )
    useEffect(() => {
        if (findIdProducts) {
            setImage(findIdProducts.image)
            setName(findIdProducts.name)
            setSize(findIdProducts.size)
            setPrice(findIdProducts.price)
            setBrand(findIdProducts.brand)
            setCategory(findIdProducts.category)
            setDescription(findIdProducts.description)
            setCountInStock(findIdProducts.countInStock)
        }
    }, [findIdProducts])

    const hanldeClickInformation = () => {
        setIsForm(true)
    }
    const hanldeClickInDecripstion = () => {
        setIsForm(false)
    }
    const data = {
        id,
        image,
        name,
        size,
        price,
        brand,
        category,
        description,
        countInStock
    }
    const hanldeClickUpdateProduct = async () => {
        try {
            const response = await updateProduct(id, data, TOKEN)
            navigate(-1)
            toast.success('Cập nhật dữ liệu thành công.')
            dispatch(update_product(response.data))
        } catch (error) {}
    }

    //set update image product
    const hanldeImageProduct = e => {
        const image = e.target.files[0]
        image.preview = URL.createObjectURL(image)
        setImage(image)
    }
    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview)
        }
    }, [image])
    const hanldeClickAdminHome = () => {
        navigate(-1)
    }
    let option = []
    {
        findIdProducts.sizeList.map(sizelist => {
            option = sizelist
        })
    }
    // console.log(option);
    return (
        <div className="container_edit">
            <div className="editProduct">
                <div className="topProduct ">
                    <div className="userShowLeft">
                        {image ? (
                            <img className=" avatar" src={image} alt={id} />
                        ) : (
                            <img
                                className=" avatar"
                                src={imageDefault}
                                alt="imgaProduct"
                            />
                        )}
                        <div className="userShowInforTitle">
                            <h3 className="edit_name">{findIdProducts.name}</h3>
                            <h6 className="edit_fullname price">
                                {formatPrice(findIdProducts.price)}{' '}
                            </h6>
                        </div>
                    </div>
                    <div className="left_btn topbtn">
                        <button
                            className="btn_information"
                            value={isForm}
                            onClick={hanldeClickInformation}
                        >
                            Information
                        </button>
                        <button
                            className="btn_setting"
                            value={!isForm}
                            onClick={hanldeClickInDecripstion}
                        >
                            Decripstion
                        </button>
                    </div>
                </div>
                <div className="bottomProduct"></div>
                {isForm ? (
                    <div className="bottom_edit">
                        <div className="left_bottom">
                            <div className="left-input">
                                <span className="lable_">Image:</span>
                                <input
                                    className="input_"
                                    type="text"
                                    placeholder={findIdProducts.image}
                                    value={image}
                                    onChange={e => setImage(e.target.value)}
                                />
                                <div className="left-input_">
                                    <span className="lable_">Name:</span>
                                    <input
                                        className="input_"
                                        type="text"
                                        placeholder={findIdProducts.name}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="left-input_">
                                    <span className="lable_">Size:</span>
                                    <select
                                        className="selectSize"
                                        name="Active"
                                        id="Active"
                                    >
                                        {findIdProducts.sizeList.map(
                                            sizelist => {
                                                return (
                                                    <option
                                                        key={sizelist}
                                                        value={sizelist}
                                                    >
                                                        {sizelist}
                                                    </option>
                                                )
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="left-input_">
                                <span className="lable_">Price:</span>
                                <input
                                    className="input_"
                                    type="number"
                                    placeholder={formatPrice(
                                        findIdProducts.price
                                    )}
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="left-input_">
                                <span className="lable_">Count In Stock</span>
                                <input
                                    className="input_"
                                    type="number"
                                    placeholder={findIdProducts.countInStock}
                                    value={countInStock}
                                    onChange={e =>
                                        setCountInStock(e.target.value)
                                    }
                                />
                            </div>
                            <div className="left-input_">
                                <span className="lable_">brand</span>
                                <input
                                    className="input_"
                                    type="text"
                                    placeholder={findIdProducts.brand}
                                    value={brand}
                                    onChange={e => setBrand(e.target.value)}
                                />
                            </div>
                            <div className="left-input_">
                                <span className="lable_">Category</span>
                                <input
                                    className="input_"
                                    type="text"
                                    placeholder={findIdProducts.category}
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="right_bottom">
                            <div className="right_body">
                                <div className="uploadImageProduct">
                                    <span htmlFor="file">
                                        {image ? (
                                            <img
                                                className=" avatar"
                                                src={image}
                                                alt={id}
                                            />
                                        ) : (
                                            <img
                                                className=" avatar"
                                                src={imageDefault}
                                                alt={id}
                                            />
                                        )}
                                    </span>
                                    <input
                                        type="file"
                                        id="file"
                                        style={{ display: 'none' }}
                                        onChange={hanldeImageProduct}
                                    />
                                </div>
                            </div>
                            <button
                                className="listUser_btn productBtn "
                                onClick={hanldeClickUpdateProduct}
                            >
                                Update
                            </button>
                            <button
                                className="listUser_btn btn"
                                onClick={hanldeClickAdminHome}
                            >
                                {' '}
                                Cancel{' '}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bottom_edit">
                        <div className="leftDecreption">
                            <img src={posterDefault} alt="poster" />
                        </div>
                        <div className="rightDecreption">
                            <div className="left-input_">
                                <span className="lable_">Decripstion:</span>
                                <textarea
                                    cols="50"
                                    rows="20"
                                    type="text"
                                    className="ProductUpdatedetail"
                                    placeholder={findIdProducts.description}
                                    value={description}
                                    onChange={e =>
                                        setDescription(e.target.value)
                                    }
                                ></textarea>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UpdateProduct

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const [myProduct, setMyProducts] = useState([])

    useEffect(() => {
        axios.get(`https://furniture-mart-server-xi.vercel.app/products/${user?.email}`)
            .then(data => setMyProducts(data.data))
    }, [user?.email])

    const handlerForDeleteProduct = (id) => {
        const sure = window.confirm('Are you sure you want to delete this product?')
        if (sure) {
            fetch(`https://furniture-mart-server-xi.vercel.app/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingProduct = myProduct.filter(product => product._id !== id)
                    setMyProducts(remainingProduct)
                    toast.success('product deleted successful.')
                })
        }
    }

    const handleForAdvertise = (id) => {
        const updateAdvertise = {
            advertise: '1'
        }

        fetch(`https://furniture-mart-server-xi.vercel.app/advertise/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateAdvertise)
        })
            .then(res => res.json())
            .then(data => {
                const remainingProduct = myProduct.filter(product => product._id !== id)
                setMyProducts(remainingProduct)
                toast.success("you successfully advertise this product")
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='mb-5'>
            <h1 className='section_heading mb-5'>My Products</h1>
            <div className='table_for'>
                <Table striped>
                    <thead>
                        <tr className='table-headers'>
                            <th >#</th>
                            <th >P. Name</th>
                            <th >Price</th>
                            <th >Post Date</th>
                            <th >Status</th>
                            <th >Advertise</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProduct.map((product, idk) =>
                                <tr className='table-data' key={idk}>

                                    <td>{idk + 1}</td>
                                    <td>{product.product_title}</td>
                                    <td>{product.selling_price}</td>
                                    <td>{product.post_date.slice(0, 15)}</td>
                                    <td>{product.status !== "sold" ?
                                        <p>available</p>
                                        :
                                        <p>sold</p>
                                    }</td>
                                    <td>
                                        {product.status === 'available' ?
                                            <>
                                                {
                                                    product.advertise === '0' ?
                                                        <button className='row_btn' onClick={() => handleForAdvertise(product._id)}>advertise</button>
                                                        :
                                                        <p>advertised</p>
                                                }

                                            </>
                                            :
                                            null
                                        }</td>
                                    <td><button className='trash-icons' onClick={() => handlerForDeleteProduct(product._id)}><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                {
                    myProduct.length !== 0 ||
                    <div className=' text-center mt-5'><p className='fail_toggle'>no data to show</p></div>

                }
            </div>

        </div>
    );
};

export default MyProducts;
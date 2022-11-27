import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const [myProduct, setMyProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${user?.email}`)
            .then(data => setMyProducts(data.data))
    }, [user?.email])

    const handlerForDeleteProduct = (id) => {
        const sure = window.confirm('Are you sure you want to delete this product?')
        if (sure) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingProduct = myProduct.filter(product => product._id !== id)
                    setMyProducts(remainingProduct)

                })
        }
    }


    return (
        <div className='my-5'>
            <h1 className='section_heading mb-5'>My Products</h1>
            <Table striped>
                <thead>
                    <tr className='table-headers'>
                        <th>#</th>
                        <th>P. Name</th>
                        <th>Price</th>
                        <th>Post Date</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Action</th>
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
                                <td>{product.status !== 0 ?
                                    "available"
                                    :
                                    "sold"
                                }</td>
                                <td>
                                    {product.status !== 0 ?
                                        <button>advertise</button>
                                        :
                                        null
                                    }</td>
                                <td><button className='trash-icons' onClick={() => handlerForDeleteProduct(product._id)}><FaTrashAlt></FaTrashAlt></button></td>


                            </tr>


                        )

                    }
                </tbody>
            </Table>

        </div>
    );
};

export default MyProducts;
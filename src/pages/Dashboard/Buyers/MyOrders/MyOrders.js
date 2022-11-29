import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://furniture-mart-server-pink.vercel.app/bookings/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });

            const data = await res.json();
            return data;
        }
    })

    const handlerForDeleteOrder = (id) => {
        const sure = window.confirm('Are you sure you want to delete this order?')
        if (sure) {
            fetch(`https://furniture-mart-server-pink.vercel.app/order/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                })
        }
    }

    return (
        <div className='my-5'>
            <h1 className='section_heading mb-5'>My Products</h1>
            <Table striped>
                <thead>
                    <tr className='table-headers'>
                        <th>SL.</th>
                        <th>P. Photo</th>
                        <th>P. Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((book, idk) =>
                            <tr className='table-data' key={idk}>
                                <td>{idk + 1}</td>
                                <td><img className='myOrder-image' src={book.photo} alt="" /></td>
                                <td>{book.product_title}</td>
                                <td>{book.product_price}</td>
                                <td>{
                                    book.payment_status === "1" ?
                                        <p className='success_toggle'>paid</p>
                                        :
                                        <button className='row_btn'><Link to={`/dashboard/payment/${book._id}`}>Pay</Link></button>
                                }</td>
                                <td><button className='trash-icons' onClick={() => handlerForDeleteOrder(book._id)}><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;
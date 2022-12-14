import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)


    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://furniture-mart-server-xi.vercel.app/bookings/${user?.email}`, {
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
            fetch(`https://furniture-mart-server-xi.vercel.app/order/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                })
        }
    }

    return (
        <div className='my-5'>
            <h1 className='section_heading mb-5'>My Orders</h1>
            <div className="table_for">
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
                    {


                        <tbody>
                            {bookings.map((book, idk) =>
                                <tr tr className='table-data' key={idk} >
                                    <td>{idk + 1}</td>
                                    <td><img className='myOrder-image' src={book.photo} alt="" /></td>
                                    <td>{book.product_title}</td>
                                    <td>{book.price}</td>
                                    <td>{
                                        book.payment_status === "1" ?
                                            <p className='success_toggle'>paid</p>
                                            :
                                            <button className='row_btn'><Link to={`/dashboard/payment/${book._id}`}>Pay</Link></button>
                                    }</td>
                                    <td><button className='trash-icons' onClick={() => handlerForDeleteOrder(book._id)}><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>
                            )}
                        </tbody>

                    }


                </Table>

                {
                    bookings.length !== 0 ||
                    <div className=' text-center mt-5'><p className='fail_toggle'>no data to show</p></div>

                }
            </div>

        </div >
    );
};

export default MyOrders;
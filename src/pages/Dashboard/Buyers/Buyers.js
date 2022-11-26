import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrashAlt } from 'react-icons/fa';



const Buyers = () => {
    const { data: Buyers = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBuyers');
            const data = await res.json();
            return data;
        }
    })



    const handlerForDeleteBuyers = (id) => {
        const sure = window.confirm('Are you sure you want to delete this review')
        if (sure) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // const remainingSellers = sellers.filter(sell => sell._id !== sellers._id)
                    // console.log(remainingSellers)
                    // setReviews(remainingReviews)
                })
        }

    }
    console.log(Buyers)
    return (
        <div className='my-5'>
            <h1 className='section_heading mb-5'>All Buyers</h1>

            <Table striped>
                <thead>
                    <tr className='table-headers'>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Buyers.map((Buyer, idk) =>
                            <tr className='table-data' key={idk}>
                                <td>{idk + 1}</td>
                                <td>{Buyer.name}</td>
                                <td>{Buyer.email}</td>
                                <td><button className='trash-icons' onClick={()=>handlerForDeleteBuyers(Buyer._id)}><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                        )}
                </tbody>
            </Table>

        </div>
    );
};

export default Buyers;
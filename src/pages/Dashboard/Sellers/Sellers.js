import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrashAlt } from 'react-icons/fa';



const Sellers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers');
            const data = await res.json();
            return data;
        }
    })
    console.log(sellers)
    return (
        <div className='my-5'>
            <h1 className='section_heading mb-5'>All Sellers</h1>

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
                        sellers.map((seller, idk) =>
                            <tr className='table-data' key={idk}>
                                <td>{idk + 1}</td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><FaTrashAlt className='trash-icons'></FaTrashAlt></td>
                            </tr>
                        )}
                </tbody>
            </Table>

        </div>
    );
};

export default Sellers;
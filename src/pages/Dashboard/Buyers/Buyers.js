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
    console.log(Buyers)
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
                        Buyers.map((Buyer, idk) =>
                            <tr className='table-data' key={idk}>
                                <td>{idk + 1}</td>
                                <td>{Buyer.name}</td>
                                <td>{Buyer.email}</td>
                                <td><FaTrashAlt className='trash-icons'></FaTrashAlt></td>
                            </tr>
                        )}
                </tbody>
            </Table>

        </div>
    );
};

export default Buyers;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const Buyers = () => {
    const { data: Buyers = [],refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://furniture-mart-server-xi.vercel.app/allBuyers');
            const data = await res.json();
            return data;
        }
    })
    const handlerForDeleteBuyers = (id) => {
        const sure = window.confirm('Are you sure you want to delete this User')
        if (sure) {
            fetch(`https://furniture-mart-server-xi.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success("you successfully delete this user")
                })
        }

    }
    return (
        <div className='mb-5'>
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
                                <td><button className='trash-icons' onClick={() => handlerForDeleteBuyers(Buyer._id)}><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                        )}
                </tbody>

            </Table>
            {
                Buyers.length !== 0 ||
                <div className=' text-center mt-5'><p className='fail_toggle'>no data to show</p></div>

            }

        </div>
    );
};

export default Buyers;
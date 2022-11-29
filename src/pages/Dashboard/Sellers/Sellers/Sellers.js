import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';



const Sellers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers');
            const data = await res.json();
            return data;
        }
    })


    const handlerForDeleteSeller = (id, email) => {
        const sure = window.confirm('Are you sure you want to delete this seller? this sellers products also delete!')
        if (sure) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    fetch(`http://localhost:5000/user/delete/${email}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {

                            toast.success('You successfully delete the seller and sellers products.')
                        })
                })
        }
    }
    const handlerForVerifySeller = (email) => {
        const user = {
            verify: "true"
        }
        const sure = window.confirm('Are you sure you want to Verify this Seller?')
        if (sure) {
            fetch(`http://localhost:5000/seller/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('You successfully verify this seller')
                })
        }

    }

    return (
        <div className='my-5'>
            <h1 className='section_heading mb-5'>All Sellers</h1>
            <Table striped>
                <thead>
                    <tr className='table-headers'>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Verify</th>
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
                                <td>
                                    {console.log(seller?.verify)}
                                    {
                                        seller?.verify === 'true' ?
                                            <p className='success_toggle'>verified</p>
                                            :
                                            <button className='trash-icons row_btn' onClick={() => handlerForVerifySeller(seller.email)}>Verify</button>
                                    }
                                </td>
                                <td><button className='trash-icons' onClick={() => handlerForDeleteSeller(seller._id, seller.email)}><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                        )}
                </tbody>
            </Table>

        </div>
    );
};

export default Sellers;


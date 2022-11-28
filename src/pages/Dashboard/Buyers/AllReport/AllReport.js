import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';

const AllReport = () => {


    const { data: reports = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSellers');
            const data = await res.json();
            return data;
        }
    })
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
                {/* <tbody>
                    {
                        reports.map((report, idk) =>
                            <tr className='table-data' key={idk}>
                                <td>{idk + 1}</td>
                                <td>{report.name}</td>
                                <td>{report.email}</td>
                                <td><button className='trash-icons' onClick={() => handlerForDeleteSeller(seller._id)}><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                        )}
                </tbody> */}
            </Table>

        </div>
    );
};

export default AllReport;
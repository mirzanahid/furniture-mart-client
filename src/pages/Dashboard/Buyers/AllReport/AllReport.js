import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const AllReport = () => {


    const { data: reports = [] } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/report');
            const data = await res.json();
            return data;
        }
    })
    console.log(reports)

   const handlerForDeleteReportedProduct=()=>{

   }
    return (
        <div className='my-5'>
            <h1 className='section_heading mb-5'>All Sellers</h1>
            <Table striped>
                <thead>
                    <tr className='table-headers'>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reports.map((report, idk) =>
                            <tr className='table-data' key={idk}>
                                <td>{idk + 1}</td>
                                <td>{report.name}</td>
                                <td>{report.email}</td>
                                <td><button className='trash-icons' onClick={() => handlerForDeleteReportedProduct(report._id)}><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                        )}
                </tbody>
            </Table>

        </div>
    );
};

export default AllReport;
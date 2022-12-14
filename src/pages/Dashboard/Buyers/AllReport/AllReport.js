import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const AllReport = () => {


    const { data: reports = [], refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://furniture-mart-server-xi.vercel.app/report');
            const data = await res.json();
            return data;
        }
    })

    const handlerForDeleteReport = (id) => {
        const sure = window.confirm('Are you sure you want to delete this Report?')
        if (sure) {
            fetch(`https://furniture-mart-server-xi.vercel.app/report/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success('You successfully deleted the report')
                })
        }


    }


    const handlerForDeleteReportedProduct = (reportItemId, reportId) => {
        const sure = window.confirm('Are you sure you want to delete this Reported Item?')
        if (sure) {
            fetch(`https://furniture-mart-server-xi.vercel.app/reported/item/${reportItemId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    fetch(`https://furniture-mart-server-xi.vercel.app/report/${reportId}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch()
                            toast.success('You successfully deleted the Reported Item')
                        })


                })
        }
    }


    return (
        <div className='mb-5'>
            <h1 className='section_heading mb-5'>All Sellers</h1>
            <div className="table_for">
                <Table striped>
                    <thead>
                        <tr className='table-headers'>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Id</th>
                            <th>Action Report</th>
                            <th>Action Report Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((report, idk) =>
                                <tr className='table-data' key={idk}>
                                    <td>{idk + 1}</td>
                                    <td>{report.product_title}</td>
                                    <td>{report.product_id}</td>
                                    <td><button className='trash-icons' onClick={() => handlerForDeleteReport(report._id)}><FaTrashAlt></FaTrashAlt></button></td>
                                    <td><button className='trash-icons' onClick={() => handlerForDeleteReportedProduct(report.product_id, report._id)}><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                {
                    reports.length !== 0 ||
                    <div className=' text-center mt-5'><p className='fail_toggle'>no data to show</p></div>

                }

            </div>


        </div>
    );
};

export default AllReport;
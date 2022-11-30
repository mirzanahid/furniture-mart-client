import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyReports = () => {
    const { user } = useContext(AuthContext)


    const { data: myReports = [], refetch } = useQuery({
        queryKey: ['myReports'],
        queryFn: async () => {
            const res = await fetch(`https://furniture-mart-server-xi.vercel.app/myreport/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });

            const data = await res.json();
            return data;
        }
    })
    const handlerForMyReportDelete = (reportItemId) => {
        const sure = window.confirm('Are you sure you want to delete this Reported Item?')
        if (sure) {
            fetch(`https://furniture-mart-server-xi.vercel.app/${reportItemId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success('You successfully deleted the your reported')


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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReports.map((myReport, idk) =>
                                <tr className='table-data' key={idk}>
                                    <td>{idk + 1}</td>
                                    <td>{myReport.product_title}</td>
                                    <td>{myReport.product_id}</td>
                                    <td><button className='trash-icons' onClick={() => handlerForMyReportDelete(myReport._id)}><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                {
                    myReports.length !== 0 ||
                    <div className=' text-center mt-5'><p className='fail_toggle'>no data to show</p></div>

                }
            </div>
        </div>
    );
};

export default MyReports;
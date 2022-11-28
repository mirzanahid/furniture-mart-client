import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const CategoriesSingleModal = ({ setShow, show, categorySingle }) => {

    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleClose = () => setShow(false);

    const handleForBook = data => {
        const bookingProduct = {
            product_title: categorySingle.product_title,
            phone: data.phone,
            email: user?.email,
            name: user?.displayName,
            price: categorySingle.selling_price,
            photo: categorySingle.photo,
            product_id: categorySingle._id,
            meeting_location: data.meetingLocation,
            payment_status: "0"
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookingProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('product booked successfully')
                    handleClose()
                    console.log('booking done')
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <div className="signup-login-form book_now_form">
                    <button onClick={handleClose} className='faTimes btn-close' > </button>
                    <Form onSubmit={handleSubmit(handleForBook)} >
                        <h2 className='signup-heading'>Book Now</h2>

                        <Form.Group className="mb-3" controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" {...register("productName")} defaultValue={categorySingle.product_title} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="productName">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" {...register("productPrice")} defaultValue={categorySingle.selling_price + "tk"} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" {...register("name")} defaultValue={displayName} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" {...register("email")} defaultValue={email} disabled />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="phoneNo">
                            <Form.Label>Phone No:</Form.Label>
                            <Form.Control type="text" {...register("phoneNo", { required: "this field is required" })} placeholder="Enter Your Phone Number" />
                            {errors.phoneNo && <p className='error-text' role="alert">{errors.phoneNo?.message}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="meetingLocation">
                            <Form.Label>Meeting Location:</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter Meeting Location"
                                style={{ height: '100px' }}
                                {...register("meetingLocation", { required: "this field is required" })}
                            />
                            {errors.meetingLocation && <p className='error-text' role="alert">{errors.meetingLocation?.message}</p>}
                        </Form.Group>
                        <input className='submit-btn' value="Submit" type="submit" />
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default CategoriesSingleModal;
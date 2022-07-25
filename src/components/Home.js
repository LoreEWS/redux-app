import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

const Home = () => {

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id});
        toast.success("Contact deleted successfully!");
    };
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-5 text-end">
                <Link to="/add" className="btn btn-outline-primary">
                    <FaPlus />
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="text-white bg-primary text-center">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            contacts.map((contact, id) => (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className="btn btn-small btn-success mx-2">
                                            <MdEdit />
                                        </Link>
                                        <button type="button" onClick={() => deleteContact(contact.id)} className="btn btn-small btn-danger"><MdDelete /></button>
                                    </td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home
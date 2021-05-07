import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './viewNursery.component.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { EditNursery } from '../Functions/EditNursery/editNursery.component';
import notify from '../../Util/notify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class ViewNursery extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getNursery() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewNursery`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    componentDidMount() {
        this.getNursery();
    }

    handleClick = (id, value) => {
        let actionData = {
            nid: id,
            value: value
        }
        axios.post(`${BASE_URL}/action.php`, actionData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                notify.showSuccess('Nursery Deleted....')
                this.getNursery();

            })

    }

    render() {
        return (
            <>
                <div className="main-content">
                    <main>
                        <h2 className="dash-title">Nursery-List</h2>
                        <Link to="/dashboard/AddNursery"><button className="primary" style={{ cursor: 'pointer' }}>Add Nursery</button></Link>
                        <div className="list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nursery Name</th>
                                        <th>Nursery Image</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((result, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{result.name}</td>
                                                    <td><img src={`../images/${result.iname}`} alt="cactus" /></td>
                                                    <td>{result.phone}</td>
                                                    <td>{result.nur_email}</td>
                                                    <td>{result.address}</td>
                                                    <td>{result.description}</td>
                                                    <td>
                                                        <Popup trigger={<button className="edit" ><i className="fas fa-pencil-alt"> Edit</i></button>} position="right center" modal onClose={() => { this.getNursery() }}>
                                                            {close => (
                                                                <div className="modal">
                                                                    <button className="close" onClick={close}>&times;</button>
                                                                    <EditNursery editData={result} close={close} />
                                                                </div>
                                                            )}
                                                        </Popup>
                                                        <button className="delete" onClick={() => { this.handleClick(result.nid, 'deleteNursery') }}><i className="fas fa-trash-alt"> Delete</i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </>
        )
    }
}
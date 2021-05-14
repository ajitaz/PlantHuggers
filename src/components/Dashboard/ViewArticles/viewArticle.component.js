import React, { Component } from 'react';
import './viewArticle.component.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { EditNursery } from '../Functions/EditNursery/editNursery.component';
import notify from '../../Util/notify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export class ViewArticle extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getArticle() {
        axios.get(`${BASE_URL}/viewContent.php?option=viewArticle`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    componentDidMount() {
        this.getArticle();
    }

    handleClick = (id, value) => {
        let actionData = {
            aid: id,
            value: value
        }
        axios.post(`${BASE_URL}/action.php`, actionData, {
            headers: {
                "Content-Type": "application/json"
            }, params: {},
            responseType: 'json'
        })
            .then(res => {
                notify.showSuccess('Article Deleted....')
                this.getArticle();

            })

    }

    render() {
        return (
            <>
                <div className="main-content">
                    <main>
                        <h2 className="dash-title">Article-List</h2>
                        <div className="list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Article Title</th>
                                        <th>Cover Image</th>
                                        <th>Description</th>
                                        <th>Author-Id</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((result, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{result.title}</td>
                                                    <td><img src={`../images/${result.iname}`} alt="cactus" /></td>
                                                    <td>{result.a_description}</td>
                                                    <td>{result.author_id}</td>
                                                    <td>{result.cname}</td>
                                                    <td>
                                                        {/* <Popup trigger={<button className="edit" ><i className="fas fa-pencil-alt"> Edit</i></button>} position="right center" modal onClose={() => { this.getNursery() }}>
                                                            {close => (
                                                                <div className="modal">
                                                                    <button className="close" onClick={close}>&times;</button>
                                                                    <EditNursery editData={result} close={close} />
                                                                </div>
                                                            )}
                                                        </Popup> */}
                                                        <button className="delete" onClick={() => { this.handleClick(result.aid, 'deleteArticle') }}><i className="fas fa-trash-alt"> Delete</i></button>
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
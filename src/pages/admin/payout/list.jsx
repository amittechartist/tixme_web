import React, { useEffect, useState } from "react";
import JoinStartButton from "../../../common/elements/JoinStartButton";
import WhiteButton from '../../../component/Whitestarbtn';
import { useParams } from 'react-router-dom';
import { Button, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import withReactContent from 'sweetalert2-react-content';
import { apiurl, admin_url, organizer_url } from '../../../common/Helpers';
import { Link } from "react-router-dom";
const Dashboard = ({ title }) => {
    const { id, name } = useParams();
    const [Loader, setLoader] = useState(false);
    const [Listitems, setListitems] = useState([]);
    const fetchList = async () => {
        try {
            setLoader(true)
            const requestData = {
                country: name,
            };
            fetch(apiurl + 'admin/payout-request-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the Content-Type header to JSON
                },
                body: JSON.stringify(requestData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == true) {
                        setListitems(data.data);
                    }
                    setLoader(false)
                })
                .catch(error => {
                    console.error('Insert error:', error);
                    setLoader(false)
                });
        } catch (error) {
            console.error('Api error:', error);
            setLoader(false)
        }
    }
    console.warn(Listitems);
    const Handelnewmodal = async () => {
    }
    useEffect(() => {
        fetchList();
    }, [name]);
    return (
        <>
            <div className="content-body" style={{ background: '#F1F1F1' }}>
                <div className="container-fluid">
                    <div className="page-titles">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{title}</li>
                        </ol>
                    </div>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <Card className="py-4">
                                <Card.Body>
                                    <Row className="justify-content-center">
                                        <Col md={12}>
                                            {Loader ? (
                                                <div className="linear-background w-100"> </div>
                                            ) : (
                                                <>
                                                    {Listitems.length > 0 ? (
                                                        <>
                                                            <div class="table-responsive">
                                                                <table class="table table-responsive-md">
                                                                    <thead>
                                                                        <tr className="bb2s">
                                                                            <th style={{ width: '80px' }}><strong>#</strong></th>
                                                                            <th><strong>Date</strong></th>
                                                                            <th><strong>Amount</strong></th>
                                                                            <th><strong>Status</strong></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                        {Listitems.map((item, index) => (
                                                                            <tr className="blr2s">
                                                                                <td><strong>{index + 1}</strong></td>
                                                                                <td>{item.date} {item.time}</td>
                                                                                <td>{item.amount}</td>
                                                                                <td>
                                                                                    {item.status == 0 ? (
                                                                                        <span class="badge light badge-warning">Pending</span>
                                                                                    ) : ''}
                                                                                    {item.status == 1 ? (
                                                                                        <span class="badge light badge-success">Success</span>
                                                                                    ) : ''}
                                                                                    {item.status == 2 ? (
                                                                                        <span class="badge light badge-danger">Canceled</span>
                                                                                    ) : ''}
                                                                                </td>
                                                                            </tr>
                                                                        ))}

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div class="no-data-box">
                                                            <p>No Data Found !</p>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div >

        </>
    )
}
export default Dashboard;
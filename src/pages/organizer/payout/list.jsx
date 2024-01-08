import React, { useEffect, useState } from "react";
import JoinStartButton from "../../../common/elements/JoinStartButton";
import WhiteButton from '../../../component/Whitestarbtn';
import { Button, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FiPlus } from "react-icons/fi";
import withReactContent from 'sweetalert2-react-content';
import { apiurl, admin_url, organizer_url } from '../../../common/Helpers';
import { Link } from "react-router-dom";
const Dashboard = ({ title }) => {
    const [Loader, setLoader] = useState(false);
    const [newmodal, setNewModal] = useState(false);
    const [Listitems, setListitems] = useState([]);
    const [amount, setamount] = useState();
    const OrganizerId = localStorage.getItem('organizerid');
    const fetchList = async () => {
        try {
            setLoader(true)
            const requestData = {
                id: OrganizerId,
            };
            fetch(apiurl + 'order/payout-request-list', {
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
                    setNewModal(false)
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
        setNewModal(true)
    }
    const HandelOrganizerform = async () => {
        try {
            if (!amount) {
                return toast.error('Amount is required');
            }
            const requestData = {
                id: OrganizerId,
                amount: amount
            };
            setLoader(true);
            fetch(apiurl + 'order/payout-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            }).then(response => response.json()).then(data => {
                setLoader(false);
                if (data.success == true) {
                    toast.success(data.message);
                    setamount('')
                    fetchList();
                } else {
                    toast.error(data.message);
                }
                setLoader(false);
            }).catch(error => {
                setLoader(false);
                console.error('Insert error:', error);
            });

        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchList();
    }, []);
    return (
        <>
            <Modal isOpen={newmodal} toggle={() => setNewModal(!newmodal)}>
                <ModalHeader toggle={!newmodal}>New payout request</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <p>Enter amount <span className="text-danger">*</span></p>
                        <input className="form-control" type="text" value={amount} placeholder="Enter amount" onChange={(e) => setamount(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        {Loader ? (
                            <Button className='signup-page-btn'>Please wait...</Button>
                        ) : (
                            <span onClick={HandelOrganizerform}><WhiteButton title={'Submit'} /></span>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setNewModal(!newmodal)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal >
            <div className="content-body" style={{ background: '#F1F1F1' }}>
                <div className="container-fluid">
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <Card className="py-4">
                                <Card.Body>
                                    <Row className="justify-content-center">
                                        <Col md={12} className="text-end mb-3">
                                            <button className="theme-btn px-3" onClick={() => setNewModal(!newmodal)}>
                                                <span className="theme-btn-icon"><FiPlus /></span> <span>New request</span>
                                            </button>
                                        </Col>
                                        <Col md={12}>
                                            {Loader ? (
                                                <div className="linear-background w-100"> </div>
                                            ) : (
                                                <>
                                                    {Listitems ? (
                                                        <>
                                                            <div class="table-responsive">
                                                                <table class="table table-responsive-md">
                                                                    <thead>
                                                                        <tr>
                                                                            <th style={{ width: '80px' }}><strong>#</strong></th>
                                                                            <th><strong>Date</strong></th>
                                                                            <th><strong>Amount</strong></th>
                                                                            <th><strong>Status</strong></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                        {Listitems.map((item, index) => (
                                                                            <tr>
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
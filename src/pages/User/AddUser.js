
import PropTypes from "prop-types";
import React from "react";
import {
    Row,
    Col,
    Container,
    Card,
    CardBody
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import ContentHeader from "../../components/Common/ContentHeader";

const AddUser = props => {
    //meta title
    document.title = "Domain Setting | Skote - React Admin & Domain Setting Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs
                        title={props.t("Add User")}
                        breadcrumbItem={props.t("Add User")}
                    />
                    <Card>
                        <CardBody>
                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <label className="form-label">Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                <div className="mt-4">
                                        <label className="form-label">Password</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Password"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                <div className="mt-4">
                                        <label className="form-label">Role</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Role"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center mt-4">
                                        <button className="btn btn-primary">Add User</button>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    );
};

AddUser.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
};

export default withTranslation()(AddUser);

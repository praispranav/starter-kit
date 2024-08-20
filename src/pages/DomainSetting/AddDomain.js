
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

const AddDomain = props => {
    //meta title
    document.title = "Domain Setting | Skote - React Admin & Domain Setting Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs
                        title={props.t("Domain Settings")}
                        breadcrumbItem={props.t("Add Domain Setting")}
                    />
                    <Card>
                        <CardBody>
                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <label className="form-label">Domain Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Domain Name"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <label className="form-label">Site Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Site Name"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <label className="form-label">Volumn</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Volumn"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <label className="form-label">Google tag manager</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Google tag manager"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <label className="form-label">Facebook pixel</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Facebook pixel"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <label className="form-label">Tiktok pixel</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Tiktok pixel"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <label className="form-label">Generator</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Generator"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <label className="form-label">Favicon</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Favicon"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center mt-4">
                                        <button className="btn btn-primary">Add Setting</button>
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

AddDomain.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
};

export default withTranslation()(AddDomain);
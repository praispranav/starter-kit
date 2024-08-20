
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

const AddQuiz = props => {
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
                                        <label className="form-label">Quiz Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Quiz Name"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <label className="form-label">Vertical</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Vertical"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center mt-4">
                                        <button className="btn btn-primary">Add Quiz</button>
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

AddQuiz.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
};

export default withTranslation()(AddQuiz);

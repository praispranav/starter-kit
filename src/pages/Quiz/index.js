
import PropTypes from "prop-types";
import React from "react";
import {
  Container
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

const Quiz = props => {
  //meta title
  document.title = "Quiz | Skote - React Admin & Quiz Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Quiz")}
            breadcrumbItem={props.t("Quiz")}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

Quiz.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Quiz);

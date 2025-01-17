
import PropTypes from "prop-types";
import React from "react";
import {
  Container
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

const Theme = props => {
  //meta title
  document.title = "Config | Skote - React Admin & Config Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Theme")}
            breadcrumbItem={props.t("Theme")}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

Theme.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Theme);

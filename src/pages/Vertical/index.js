
import PropTypes from "prop-types";
import React from "react";
import {
  Container
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import ContentHeader from "components/Common/ContentHeader";

const Vertical = props => {
  //meta title
  document.title = "Vertical | Skote - React Admin & Vertical Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Vertical")}
            breadcrumbItem={props.t("Vertical")}
          />
          <ContentHeader route={"add-vertical"} addNew={"Vertical"} />
        </Container>
      </div>
    </React.Fragment>
  );
};

Vertical.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Vertical);


import PropTypes from "prop-types";
import React from "react";
import {
  Container
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import ContentHeader from "../../components/Common/ContentHeader";

const User = props => {
  //meta title
  document.title = "Domain Setting | Skote - React Admin & Domain Setting Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("User")}
            breadcrumbItem={props.t("User")}
          />
          <ContentHeader route={"add-user"} addNew={"User"} />
        </Container>
      </div>
    </React.Fragment>
  );
};

User.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(User);

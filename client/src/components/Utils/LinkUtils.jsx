import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

class ButtonLink extends Component {
  getIcon = icon => {
    if (icon) {
      return <FontAwesomeIcon icon={icon} />;
    }
    return <></>;
  };

  render() {
    let size = this.props.size ? " btn-" + this.props.size : "";
    return (
      <Link
        to={this.props.to}
        className={"btn btn-" + this.props.color + size}
        type="button"
      >
        {this.getIcon(this.props.icon)} {this.props.children}
      </Link>
    );
  }
}

ButtonLink.defaultProps = {
  color: "primary"
};
ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "danger",
    "link"
  ]),
  icon: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"])
};
export { ButtonLink };

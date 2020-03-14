import React from "react";
import {
  FormGroup,
  Input,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
var classNames = require("classnames");

export const TextInput = ({ label, name, placeholder, innerRef, errors }) => {
  return (
    <FormGroup>
      <Label for="name">{label}</Label>
      <Input
        name={name}
        innerRef={innerRef}
        placeholder={placeholder}
        className={classNames({
          "is-invalid": errors[name]
        })}
      />
      {errors[name] && errors[name].type === "required" && (
        <small className="text-warning">{label + " is required"}</small>
      )}
    </FormGroup>
  );
};

export const SocialInput = ({ type, name, placeholder, innerRef, errors }) => {
  let label;
  let icon;
  if (type === "facebook") {
    label = "Facebook";
    icon = faFacebook;
  } else if (type === "instagram") {
    label = "Instagram";
    icon = faInstagram;
  } else if (type === "twitter") {
    label = "Twitter";
    icon = faTwitter;
  } else {
    label = "Website";
    icon = faGlobe;
  }
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={icon} />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          name={name}
          innerRef={innerRef}
          placeholder={placeholder}
          className={classNames({
            "is-invalid": errors[name]
          })}
        />
      </InputGroup>

      {errors[name] && errors[name].type === "required" && (
        <small className="text-warning">{label + " is required"}</small>
      )}
    </FormGroup>
  );
};

export const CheckboxInput = ({ label, name, innerRef }) => {
  return (
    <FormGroup check className="custom-control custom-checkbox mb-3">
      <Input
        type="checkbox"
        name={name}
        id={name}
        innerRef={innerRef}
        className="custom-control-input"
      />
      <Label for={name} check className="custom-control-label">
        {label}
      </Label>
    </FormGroup>
  );
};

export const SelectInput = ({ label, name, innerRef, errors, ...props }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="select"
        name={name}
        id={name}
        innerRef={innerRef}
        className={classNames({
          "is-invalid": errors[name]
        })}
      >
        {props.children}
      </Input>
      {errors[name] && errors[name].type === "required" && (
        <small className="text-warning">{label + " is required"}</small>
      )}
    </FormGroup>
  );
};

export const TextAreaInput = ({
  label,
  name,
  placeholder,
  innerRef,
  errors
}) => {
  return (
    <FormGroup>
      <Label for="name">{label}</Label>
      <Input
        name={name}
        innerRef={innerRef}
        placeholder={placeholder}
        type="textarea"
        className={classNames({
          "is-invalid": errors[name]
        })}
      />
      {errors[name] && errors[name].type === "required" && (
        <small className="text-warning">{label + " is required"}</small>
      )}
    </FormGroup>
  );
};

export const RadioButtonGroupInput = ({ label, errors, name, ...props }) => {
  return (
    <div className="mb-3">
      <Label>{label}</Label>
      {props.children}
      {errors[name] && errors[name].type === "required" && (
        <small className="text-warning">{label + " is required"}</small>
      )}
    </div>
  );
};

export const RadioButtonInput = ({ label, name, innerRef, value }) => {
  return (
    <div className="custom-control custom-radio">
      <Input
        type="radio"
        name={name}
        innerRef={innerRef}
        value={value}
        className="custom-control-input"
        id={name + "-" + value}
      />
      <Label className="custom-control-label" htmlFor={name + "-" + value}>
        {label}
      </Label>
    </div>
  );
};

export const ToggleButtonInput = ({ label, name, innerRef, value }) => {
  return (
    <FormGroup className="d-flex">
      <Label className="custom-toggle">
        <Input type="checkbox" name={name} innerRef={innerRef} value={value} />
        <span className="custom-toggle-slider rounded-circle" />
      </Label>
      <span className="ml-2">{label}</span>
    </FormGroup>
  );
};

export const DatePickerInput = ({ label, name, innerRef, errors }) => {
  return (
    <FormGroup>
      <Label for="name">{label}</Label>
      <InputGroup className="input-group">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon="calendar-alt" />
          </InputGroupText>
        </InputGroupAddon>
        <Input type="date" name={name} innerRef={innerRef} />
      </InputGroup>
      {errors[name] && errors[name].type === "required" && (
        <small className="text-warning">{label + " is required"}</small>
      )}
    </FormGroup>
  );
};

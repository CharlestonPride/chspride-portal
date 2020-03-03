import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { useField } from "formik";
var classNames = require("classnames");

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormGroup>
        <Label for={props.id || props.name}>{label}</Label>
        <Input
          {...field}
          {...props}
          className={classNames({
            "is-invalid": meta.touched && meta.error
          })}
        />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </FormGroup>
    </>
  );
};

export const CheckboxInput = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <FormGroup check>
        <Label check>
          <Input {...field} {...props} type="checkbox" />
          {children}
        </Label>
      </FormGroup>
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </>
  );
};

export const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormGroup>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <Input
          type="select"
          {...field}
          {...props}
          className={classNames({
            "is-invalid": meta.touched && meta.error
          })}
        />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </FormGroup>
    </>
  );
};

export const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormGroup>
        <Label for={props.id || props.name}>{label}</Label>
        <Input
          {...field}
          {...props}
          type="textarea"
          className={classNames({
            "is-invalid": meta.touched && meta.error
          })}
        />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </FormGroup>
    </>
  );
};

export const DateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormGroup>
        <Label for={props.id || props.name}>{label}</Label>
        <Input
          {...field}
          {...props}
          type="date"
          className={classNames({
            "is-invalid": meta.touched && meta.error
          })}
        />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </FormGroup>
    </>
  );
};

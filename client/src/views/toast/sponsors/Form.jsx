import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Spinner,
  Row,
  Col,
  Label
} from "reactstrap";
import useAxios from "axios-hooks";
import { TextInput } from "../../../components/Forms/FormInputs";
import { CheckboxInput } from "components/Forms/FormInputs";
import {
  SelectInput,
  TextAreaInput,
  RadioButtonInput,
  DatePickerInput,
  RadioButtonGroupInput,
  SocialInput
} from "components/Forms/FormInputs";

export default function Form() {
  const { id } = useParams();
  let history = useHistory();

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    "/api/toast/sponsors/" + id
  );

  const [
    { data: postData, loading: postLoading, error: postError },
    executePost
  ] = useAxios(
    {
      url: "/api/toast/sponsors/",
      method: "POST"
    },
    { manual: true }
  );

  function saveData(data) {
    alert(JSON.stringify(data));
    // executePost({
    //   data: {
    //     ...data
    //   }
    // });
  }

  const { register, reset, errors, handleSubmit } = useForm();

  useEffect(() => {
    if (getData) {
      reset(getData);
    }
  }, [getData]);

  useEffect(() => {
    if (postData && !postLoading && !postError) {
      history.push("../");
    }
  }, [postData]);

  if (getLoading || postLoading) {
    return <Spinner type="grow" color="primary" />;
  }
  if (getError || postError) {
    return <Alert color="danger">An Error occurred! </Alert>;
  }

  return (
    <Card>
      <CardHeader>{(id === "new" ? "Add" : "Edit") + " Sponsor"}</CardHeader>
      <CardBody>
        <form id="form" onSubmit={handleSubmit(saveData)}>
          <Row>
            <Col>
              <TextInput
                name="name"
                label="Name of Sponsor"
                placeholder="Bob's Burgers"
                innerRef={register({ required: true })}
                errors={errors}
              />
            </Col>
            <Col>
              <TextInput
                name="level"
                label="Sponsorship Level"
                placeholder="Presenting"
                innerRef={register({ required: true })}
                errors={errors}
              />
            </Col>
          </Row>
          <Label>Social</Label>
          <Row>
            <Col>
              <SocialInput
                name="social.facebook"
                type="facebook"
                placeholder="bobsburgers"
                innerRef={register}
                errors={errors}
              />
            </Col>
            <Col>
              <SocialInput
                name="social.instagram"
                type="instagram"
                placeholder="bobsburgers"
                innerRef={register}
                errors={errors}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SocialInput
                name="social.twitter"
                type="twitter"
                placeholder="bobsburgers"
                innerRef={register}
                errors={errors}
              />
            </Col>
            <Col>
              <SocialInput
                name="social.website"
                type="website"
                placeholder="https://bobsburgers.com"
                innerRef={register}
                errors={errors}
              />
            </Col>
          </Row>
          <CheckboxInput name="test" label="Test" innerRef={register} />
          <SelectInput
            name="color"
            label="Color"
            innerRef={register}
            errors={errors}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </SelectInput>
          <TextAreaInput
            name="level"
            label="Sponsorship Level"
            placeholder="Presenting"
            innerRef={register({ required: true })}
            errors={errors}
          />
          <RadioButtonGroupInput name="size" label="Size" errors={errors}>
            <RadioButtonInput
              name="size"
              label="<6"
              value="sm"
              innerRef={register({ required: true })}
            />
            <RadioButtonInput
              name="size"
              label="6-7"
              value="md"
              innerRef={register({ required: true })}
            />
            <RadioButtonInput
              name="size"
              label="7-8"
              value="lg"
              innerRef={register({ required: true })}
            />
            <RadioButtonInput
              name="size"
              label="8+"
              value="xl"
              innerRef={register({ required: true })}
            />
          </RadioButtonGroupInput>

          <DatePickerInput
            label="Start Date"
            name="startDate"
            innerRef={register({ required: true })}
            errors={errors}
          />
        </form>
      </CardBody>
      <CardFooter>
        <Button form="form" type="submit" color="primary">
          Submit
        </Button>
        <Button color="secondary">Cancel</Button>
      </CardFooter>
    </Card>
  );
}

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
  Spinner
} from "reactstrap";
import useAxios from "axios-hooks";

export default function Form(props) {
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
    executePost({
      data: {
        ...data
      }
    });
  }

  const { register, reset, errors, handleSubmit } = useForm();
  useEffect(() => {
    if (getData) {
      reset({ ...getData });
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
    console.log(getError);
    console.log(postError);
    return <Alert color="danger">An Error occurred! </Alert>;
  }

  return (
    <Card>
      <CardHeader>{(id === "new" ? "Add" : "Edit") + " Sponsor"}</CardHeader>
      <CardBody>
        <form id="form" onSubmit={handleSubmit(saveData)}>
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && "Your input is required"}
          <input
            type="text"
            placeholder="Last name"
            name="Last name"
            ref={register({ required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="Email"
            name="Email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            name="Mobile number"
            ref={register({ required: true, minLength: 6, maxLength: 12 })}
          />
          <select name="Title" ref={register({ required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          <input
            name="Developer"
            type="radio"
            value="Yes"
            ref={register({ required: true })}
          />
          <input
            name="Developer"
            type="radio"
            value="No"
            ref={register({ required: true })}
          />
        </form>
      </CardBody>
      <CardFooter>
        <Button form="form" type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

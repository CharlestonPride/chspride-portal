import React from "react";
import { useForm } from "react-hook-form";
import { useFetch } from "../../fetchHelpers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Form(props) {
  const { id } = useParams();
  const { response, error, isLoading } = useFetch("/api/directors/" + id);
  console.log(response);
  const { register, reset, errors } = useForm();
  useEffect(() => {
    if (response) {
      reset({ firstName: response.firstName });
    }
  }, [response]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

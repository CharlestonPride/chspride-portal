import React from "react";
import { useForm } from "react-hook-form";
import { useFetch } from "../../../fetchHelpers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Form(props) {
  const { id } = useParams();
  const { response, error, isLoading } = useFetch("/api/toast/sponsors/" + id);
  console.log(response);
  const { register, reset, errors, handleSubmit } = useForm();
  useEffect(() => {
    if (response) {
      reset({ name: response.name });
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
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <input type="submit" />
    </form>
  );
}

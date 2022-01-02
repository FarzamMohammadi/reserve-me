import React, { Component, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { VALIDATOR_REQUIRE } from "./components/validators";
import { useForm } from "./components/form-hook";
import { RouteComponentProps } from "react-router-dom";

import "./BookService.css";

const NewBooking = (props) => {
  const serviceName = props.match.params.serviceName;
  const providerName = props.match.params.providerName;

  const [formState, inputHandler] = useForm({
    serviceProvider: {
      value: serviceName,
    },
    serviceName: {
      value: providerName,
    },
    dateTime: {
      value: new Date(),
    },
    serviceSeeker: {
      value: "",
    },
  });

  const bookSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formState.inputs);

    try {
      console.log(formState);
      const response = await fetch("http://localhost:5000/service/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ServiceProvider: formState.inputs.serviceProvider.value,
          ServiceName: formState.inputs.serviceName.value,
          DateTime: formState.inputs.dateTime.value,
          ServiceSeeker: formState.inputs.serviceSeeker.value,
        }),
      });

      console.log("im here2");

      const resData = await response.json();
      console.log(resData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="book-form" onSubmit={bookSubmitHandler}>
      <Input
        title="Service Provider"
        id="serviceProvider"
        value={providerName}
        onInput={inputHandler}
      />
      <Input
        title="Service Name"
        id="serviceName"
        value={serviceName}
        onInput={inputHandler}
      />
      <Input title="Your Name" id="serviceSeeker" onInput={inputHandler} />
      <Input
        title="Booking Date"
        id="dateTime"
        onInput={inputHandler}
        type="date"
      />
      <Button>Book Service</Button>
    </form>
  );
};

export default NewBooking;

import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import * as styledComp from "./projectDetails.style";
import { TextField } from "@mui/material";
import MUITextField from "../../mui-components/MUITextField/MUITextField";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddProjectDetailsForm from "../../forms/AddProjectDetails/AddProjectDetailsForm";

const schema = yup.object().shape({
  projectName: yup
    .string()
    .required("Project Name is required")
    .defined("Project Name is required"),
});

export interface formInterface {
  projectName: string;
}
export default function ProjectDetails() {
  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   reset,
  //   setValue,
  //   getValues,
  //   setError,
  //   formState: { errors },
  //   formState,
  // } = useForm({
  //   resolver: yupResolver(schema),
  //   mode: "all",
  // });
  const formMethods = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const formSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        // height: 240,
      }}
    >
      <b>PROJECT DETAILS AREA</b>
      <br />
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(formSubmit)}>
          <AddProjectDetailsForm />
          <input type="submit" />
        </form>
      </FormProvider>
    </Paper>
  );
}

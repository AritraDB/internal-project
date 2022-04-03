import React from 'react';
import MUITextField from '../../mui-components/MUITextField/MUITextField';
import { useFormContext } from 'react-hook-form';

export default function AddProjectDetailsForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    setError,
    formState: { errors },
    formState,
  } = useFormContext();

  return (
    <>
      <MUITextField
        label={'Project Name'}
        name={'projectName'}
        control={control}
        defaultValue={''}
        required
        errors={errors.projectName}
      />
      <br />
    </>
  );
}

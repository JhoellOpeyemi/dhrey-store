import { InputLabel, Input, ErrorMessage } from "./InputField.styled";

export const InputField = ({ label, name, register, required, errors }) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberPattern = "[+]{1}[0-9]{11,14}";

  return (
    <>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {name === "email" ? (
        <>
          <Input
            id={name}
            type="email"
            {...register(name, { required, pattern: emailPattern })}
          />
          {errors["email"]?.type === "pattern" && (
            <ErrorMessage>Please enter a valid email</ErrorMessage>
          )}
        </>
      ) : name === "phoneNumber" ? (
        <Input
          id={name}
          type="tel"
          {...register(name, { required, pattern: phoneNumberPattern })}
        />
      ) : (
        <Input id={name} type="text" {...register(name, { required })} />
      )}
      {errors[`${name}`]?.type === "required" && (
        <ErrorMessage>Please enter your {label}</ErrorMessage>
      )}
    </>
  );
};

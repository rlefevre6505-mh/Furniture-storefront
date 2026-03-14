// import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Signup.css";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(`Submitted email: ${data.email} and password: ${data.password}`);
    //TODO: add logic to send the email and password to the backend for processing
  }

  return (
    <div className="signup">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_div">
          <label>
            Email
            <input
              type="email"
              placeholder="name@example.com"
              // required
              {...register("email", { required: "Email address required" })}
            ></input>
          </label>
          {errors.email && <p className="form_error">{errors.email.message}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            // required
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 18,
                message: "Password must be 18 or fewer characters",
              },
            })}
          ></input>
          {errors.password && (
            <p className="form_error">{errors.password.message}</p>
          )}
        </div>
      </form>
    </div>
  );
}

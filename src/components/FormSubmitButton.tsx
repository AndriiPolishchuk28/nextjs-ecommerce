"use client";

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({ children, className, ...props }: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
    {...props}
      disabled={pending}
      type="submit"
      className={`btn-primary btn ${className}`}
    >
      {pending && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
};

export default FormSubmitButton;

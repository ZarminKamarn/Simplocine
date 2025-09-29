interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ name, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} {...props}>
      {name}
    </button>
  );
}

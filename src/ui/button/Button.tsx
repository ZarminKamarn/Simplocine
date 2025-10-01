import "./button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  isSelected?: boolean;
  usage?: "details-selector" | null;
}

export function Button({
  name,
  type = "button",
  isSelected = false,
  usage = null,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`${isSelected && "selected-btn"} ${
        usage === "details-selector" && "inner-link-details-btn"
      }`}
    >
      {name}
    </button>
  );
}

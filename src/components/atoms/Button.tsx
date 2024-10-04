import { ComponentPropsWithoutRef } from "react"

type ButtonProps = {
  variant: "primary" | "outline"
} & ComponentPropsWithoutRef<"button">;

export default function Button({variant, ...props}: ButtonProps) {
  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-blue-600 text-white";
  }
  else {
    variantStyles = "text-blue-600 border border-blue-600";
  }

  return (
    <button 
      {...props}
      className={`${variantStyles} py-3 px-5 rounded-lg`}
    >{props.children}</button>
  );
}
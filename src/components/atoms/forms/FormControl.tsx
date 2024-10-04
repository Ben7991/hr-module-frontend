import { ComponentPropsWithoutRef } from "react";

type FormControlProps = ComponentPropsWithoutRef<"input">;

export default function FormControl({children, ...props}: FormControlProps) {
  return (
    <div className="border border-[#d0d0d0] rounded-lg flex gap-2 overflow-hidden items-center px-4">
      <input {...props} className="outline-none py-2 flex-grow"/>
      { children }
    </div>
  );
}
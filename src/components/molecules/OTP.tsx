import { useRef } from "react";

export default function OTP() {
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);
  const fifthInputRef = useRef<HTMLInputElement>(null);
  const sixthInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex gap-2 w-[inherit] overflow-hidden">
      <input 
        type="text" 
        className="p-2 border border-[#d0d0d0] rounded-lg w-16 text-center text-4xl"
        maxLength={1}
        onKeyUp={() => secondInputRef.current?.focus()} />
      <input 
        type="text" 
        className="p-2 border border-[#d0d0d0] rounded-lg w-16 text-center text-4xl"
        maxLength={1}
        ref={secondInputRef}
        onKeyUp={() => thirdInputRef.current?.focus()} />
      <input 
        type="text" 
        className="p-2 border border-[#d0d0d0] rounded-lg w-16 text-center text-4xl"
        maxLength={1}
        ref={thirdInputRef}
        onKeyUp={() => fourthInputRef.current?.focus()} />
      <input 
        type="text" 
        className="p-2 border border-[#d0d0d0] rounded-lg w-16 text-center text-4xl"
        maxLength={1}
        ref={fourthInputRef}
        onKeyUp={() => fifthInputRef.current?.focus()} />
      <input 
        type="text" 
        className="p-2 border border-[#d0d0d0] rounded-lg w-16 text-center text-4xl"
        maxLength={1}
        ref={fifthInputRef}
        onKeyUp={() => sixthInputRef.current?.focus()} />
      <input 
        type="text" 
        className="p-2 border border-[#d0d0d0] rounded-lg w-16 text-center text-4xl"
        maxLength={1}
        ref={sixthInputRef} />
    </div>
  );
}
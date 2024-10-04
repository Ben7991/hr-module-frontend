import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

import FormControl from "../../components/atoms/forms/FormControl";
import FormGroup from "../../components/atoms/forms/FormGroup";
import Label from "../../components/atoms/forms/Label";
import AuthPageHeader from "../../components/molecules/AuthPageHeader";
import Button from "../../components/atoms/Button";
import AuthLayout from "../../components/layouts/AuthLayout";
import manAtWork from "../../assets/img/hr-1.png";

export default function PasswordReset() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout image={manAtWork} showSignUp>
      <AuthPageHeader 
        subtitle="Password recovery"
        mainTitle="Password reset">
        <p className="mt-1">Kindly enter a new password</p>
      </AuthPageHeader>
      <form>
        <FormGroup className="mb-6">
          <Label className="mb-2 inline-block" htmlFor="newPassword">New password</Label>
          <FormControl type={showPassword ? "text" : "password"} id="newPassword">
            <button className="text-2xl" type="button"
              onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <BsEyeSlash/> : <BsEye/>}
            </button>
          </FormControl>
        </FormGroup>
        <FormGroup className="mb-6">
          <Label className="mb-2 inline-block" htmlFor="confirmPassword">Confirm new password</Label>
          <FormControl type={showConfirmPassword ? "text" : "password"} id="confirmPassword">
            <button className="text-2xl" type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {!showConfirmPassword ? <BsEyeSlash/> : <BsEye/>}
            </button>
          </FormControl>
        </FormGroup>
        <div className="flex flex-col items-stretch mt-14">
          <Button variant="primary">Reset</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import FormControl from "../../components/atoms/forms/FormControl";
import FormGroup from "../../components/atoms/forms/FormGroup";
import Label from "../../components/atoms/forms/Label";
import AuthPageHeader from "../../components/molecules/AuthPageHeader";
import Button from "../../components/atoms/Button";
import AuthLayout from "../../components/layouts/AuthLayout";
import manAtWork from "../../assets/img/hr-1.png";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout image={manAtWork} showSignUp>
      <AuthPageHeader 
        subtitle="Welcome back!!"
        mainTitle="Please Sign In"/>
      <form>
        <FormGroup className="mb-6">
          <Label className="mb-1 inline-block">Email address</Label>
          <FormControl placeholder="Enter email address" />
        </FormGroup>
        <FormGroup className="mb-6">
          <Label className="mb-1 inline-block">Password</Label>
          <FormControl type={showPassword ? "text" : "password"} id="newPassword">
            <button className="text-2xl" type="button"
              onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <BsEyeSlash/> : <BsEye/>}
            </button>
          </FormControl>
        </FormGroup>
        <div className="flex items-center justify-between mb-14">
          <Label className="flex gap-2">
            <input type="checkbox" />
            Remember me
          </Label>
          <Link to="/forgot-password" className="text-blue-500 hover:underline flex gap-1 items-center">I forgot my password<HiArrowNarrowRight/></Link>
        </div>
        <div className="flex flex-col items-stretch">
          <Button variant="primary" type="submit">Sign In</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
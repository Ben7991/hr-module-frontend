import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

import Label from "../../components/atoms/forms/Label";
import AuthLayout from "../../components/layouts/AuthLayout";
import AuthPageHeader from "../../components/molecules/AuthPageHeader";
import cantRemember from "../../assets/img/hr-3.png";
import FormGroup from "../../components/atoms/forms/FormGroup";
import FormControl from "../../components/atoms/forms/FormControl";
import Button from "../../components/atoms/Button";

export default function ForgotPassword() {
  return (
    <AuthLayout image={cantRemember}>
      <AuthPageHeader 
        subtitle="Password recovery"
        mainTitle="Forgot your password?">
        <p className="mt-1">Kindly enter the email address linked to this account and we will send you a code to enable you change your password</p>
      </AuthPageHeader>
      <form>
        <FormGroup className="mb-6">
          <div className="flex items-center justify-between">
            <Label className="mb-2 inline-block" htmlFor="email">Email address</Label>
            <Link to="/" className="text-blue-500 hover:underline flex gap-1 items-center">Login<HiArrowNarrowRight/></Link>
          </div>
          <FormControl placeholder="Enter email address" type="email" id="email" />
        </FormGroup>
        <div className="flex flex-col items-stretch mt-14">
          <Button variant="primary" type="submit">Send</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
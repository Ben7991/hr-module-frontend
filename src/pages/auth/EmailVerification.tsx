import AuthLayout from "../../components/layouts/AuthLayout";
import AuthPageHeader from "../../components/molecules/AuthPageHeader";
import cantRemember from "../../assets/img/hr-3.png";
import Button from "../../components/atoms/Button";
import OTP from "../../components/molecules/OTP";

export default function EmailVerification() {
  return (
    <AuthLayout image={cantRemember}>
      <AuthPageHeader 
        subtitle="Password recovery"
        mainTitle="Email verification">
        <p className="mt-1">Kindly enter the 6 digit code that has been sent to your email address</p>
      </AuthPageHeader>
      <form>
        <div className="flex gap-3 h-14 w-[100%]">
          <OTP />
        </div>
        <div className="flex flex-col items-stretch mt-14">
          <Button variant="primary" type="submit">Send</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
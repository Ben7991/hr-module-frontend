import AuthLayout from "../../components/layouts/AuthLayout";
import AuthPageHeader from "../../components/molecules/AuthPageHeader";
import pressingPhone from "../../assets/img/hr-2.png";
import Button from "../../components/atoms/Button";
import OTP from "../../components/molecules/OTP";

export default function TwoFA() {
  return (
    <AuthLayout image={pressingPhone}>
      <AuthPageHeader 
        subtitle="2FA"
        mainTitle="Please enter the 2FA code sent to your mail." />
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
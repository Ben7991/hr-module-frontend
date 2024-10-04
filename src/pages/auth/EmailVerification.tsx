import AuthLayout from "../../components/layouts/AuthLayout";
import AuthPageHeader from "../../components/molecules/AuthPageHeader";
import cantRemember from "../../assets/img/hr-3.png";
import FormControl from "../../components/atoms/forms/FormControl";
import Button from "../../components/atoms/Button";

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
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
        </div>
        <div className="flex flex-col items-stretch mt-14">
          <Button variant="primary" type="submit">Send</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
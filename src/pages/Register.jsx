import AuthLayout from "../components/Auth/AuthLayout";
import RegisterForm from "../components/Auth/RegisterForm"


const Register = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join our premium community."
      
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
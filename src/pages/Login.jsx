import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue shopping."     
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
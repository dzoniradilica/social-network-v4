import Input from "./components/UI/Input";

export default function Login() {
  return (
    <div className="center">
      <form className="form">
        <h2>Login</h2>
        <Input inputName="Email" name="login_email" type="email" />
        <Input inputName="Password" name="login_password" type="password" />
      </form>
    </div>
  );
}

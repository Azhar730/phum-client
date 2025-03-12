import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading(`logging in......`);
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login Successful", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err: any) {
      toast.error(err, {
        id: toastId,
        duration: 2000,
      });
    }
  };
  const defaultValues= {
    userId: 'A-0001',
    password: 'admin123'
}

  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{ height: "100vh", backgroundColor: "GrayText" }}
    >
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID"></PHInput>
        <PHInput type="text" name="password" label="Password"></PHInput>
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;

import { Button, Grid2 as Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormProps } from "./form";

type LoginFormType = {
  email: string;
  password: string;
};

export default function LoginForm(props: FormProps<LoginFormType>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: { email: "staff@test.com", password: "123456" },
  });

  return (
    <>
      <Grid size={12}>
        <TextField
          label="อีเมล"
          variant="outlined"
          fullWidth
          size="small"
          type="email"
          {...register("email", {
            required: { value: true, message: "*Required" },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Grid>
      <Grid size={12}>
        <TextField
          label="รหัสผ่าน"
          variant="outlined"
          fullWidth
          size="small"
          {...register("password", {
            required: { value: true, message: "*Required" },
          })}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </Grid>
      <Grid size={12} mt={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit(props.onSubmit)}
        >
          เข้าสู่ระบบ
        </Button>
      </Grid>
    </>
  );
}

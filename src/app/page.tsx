"use client";

import { Grid2 as Grid } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services";
import LoginForm from "@/components/forms/Login.form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const { mutate } = useMutation<
    unknown,
    unknown,
    {
      email: string;
      password: string;
    }
  >({
    mutationKey: ["login"],
    mutationFn: ({ email, password }) =>
      authService.login(email, password).then((res) => res.data),
  });

  return (
    <Grid
      container
      columns={{ md: 12, sm: 9, xs: 6 }}
      height={"100%"}
      sx={{ backgroundColor: "#f3f3f3" }}
    >
      <Grid
        container
        size={{ md: 4, sm: 5, xs: 4 }}
        offset={{ md: 4, sm: 2, xs: 1 }}
        spacing={2}
        alignSelf={"center"}
      >
        <LoginForm
          onSubmit={({ email, password }) => {
            mutate({ email, password });
            router.push("/products");
          }}
        />
      </Grid>
    </Grid>
  );
}

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { setToken } from "@/redux/features/authSlice";
import Loader from "./Loader";

const AuthLayout = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
    } else {
      router.push("/login");
    }
  }, [dispatch, router]);

  if (!token) return <Loader />;

  return <>{children}</>;
};

export default AuthLayout;

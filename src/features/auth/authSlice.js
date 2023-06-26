import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Membuat async thunk untuk melakukan login
export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://vijayasena.marsanix.com/api/login",
        {
          email: user.email,
          password: user.password,
        }
      );
      console.info(response.data);

      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login Gagal, Cek Kembali Email dan Password",
      });
      if (error.response) {
        const message = error.reponse.data.msg;

        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://vijayasena.marsanix.com/api/me");
    console.info(response.data);

    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.reponse.data.msg;

      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete("http://vijayasena.marsanix.com/api/logout");
});

// Membuat slice Redux untuk manajemen autentikasi login
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    // Menangani aksi login yang sedang berlangsung
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    // Menangani aksi LoginUser berhasil
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      localStorage.setItem("users", JSON.stringify({ users: action.payload }));
    });

    // Menangani aksi LoginUser gagal
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Menangani aksi login yang sedang berlangsung
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    // Menangani aksi getMe berhasil
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      // localStorage.setItem("users", JSON.stringify({ users: action.payload }));
    });

    // Menangani aksi getMe gagal
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

// Ekspor aksi login dan reducer autentikasi

export const { reset } = authSlice.actions;
export default authSlice.reducer;

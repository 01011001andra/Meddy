import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

// Membuat async thunk untuk melakukan login
export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/login",
      credentials
    );
    console.info(response.data);

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Login Gagal, Cek Kembali Email dan Password',
    })
    throw error.response.data;
  }
});

// Membuat slice Redux untuk manajemen autentikasi login
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Menangani aksi login yang sedang berlangsung
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Menangani aksi login berhasil
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });
    // Menangani aksi login gagal
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// Ekspor aksi login dan reducer autentikasi

export default authSlice.reducer;

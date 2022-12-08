import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: {},
  loading: true,
  getLoad: false,
  allServices: [],
  allOrder: [],

  userOrders: [],
};

// async task

export const getAllOrders = createAsyncThunk("order/getAllOrders", async () => {
  const response = await axios.get(
    `https://energetic-pear-threads.cyclic.app/api/orders/allorder`
  );
  return response.data.reverse();
});
export const getAllServices = createAsyncThunk(
  "order/getAllServices",
  async () => {
    const response = await axios.get(
      `https://energetic-pear-threads.cyclic.app/api/products/getProduct`
    );
    // console.log('all service from redux',response.data)
    return response.data;
  },[]
);
export const userOrder = createAsyncThunk("order/userOrder", async (id) => {
  // console.log('hey from reux', id)
  const response = await axios.get(
    `https://energetic-pear-threads.cyclic.app/api/orders/user/${id}`
  );
  // console.log('hey from reux', response.data)
  return response.data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      console.log("calling ");
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getAllOrders.pending, (state, { payload }) => {
        state.getLoad = true;
      })
      .addCase(getAllOrders.rejected, (state, { payload }) => {
        state.getLoad = false;
      })
      .addCase(getAllOrders.fulfilled, (state, { payload }) => {
        // state.allUser = payload;
        state.allOrder = payload;
        state.getLoad = false;
      })

      .addCase(getAllServices.pending, (state, { payload }) => {
        state.getLoad = true;
      })
      .addCase(getAllServices.rejected, (state, { payload }) => {
        state.getLoad = false;
      })
      .addCase(getAllServices.fulfilled, (state, { payload }) => {
        state.allServices = payload;
        state.getLoad = false;
      })

      .addCase(userOrder.pending, (state, { payload }) => {
        state.getLoad = true;
      })
      .addCase(userOrder.rejected, (state, { payload }) => {
        state.getLoad = false;
      })
      .addCase(userOrder.fulfilled, (state, { payload }) => {
        // state.allUser = payload;
        state.userOrders = payload;
        state.getLoad = false;
      });
  },
});

export const { setLoading } = dataSlice.actions;
export const allData = (state) => state.data;
export default dataSlice.reducer;

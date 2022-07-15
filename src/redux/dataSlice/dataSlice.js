import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    user: {},
    loading: true,
    getLoad: false,
    allServices: [],
    allOrder:[],
    allProducts:[],
    userOrders:[],


}

// async task


export const getAllOrders = createAsyncThunk(
   
    'order/getAllOrders',
    async () => {
        const response = await axios.get(`http://localhost:7070/api/orders/allorder`);
        return response.data
      
      
    }
 
)
export const getProduct = createAsyncThunk(
   
    'order/getProduct',
    async () => {
        const response = await axios.get(`http://localhost:7070/api/products/getProduct`);
        return response.data
      
      
    }
 
)
export const userOrder = createAsyncThunk(
  
    'order/userOrder',
    async (id) => {
        // console.log('hey from reux', id)
        const response = await axios.get(`http://localhost:7070/api/orders/user/${id}`);
        // console.log('hey from reux', response.data)
        return response.data
       
      
      
    }
 
)



export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      

        setLoading: (state, action) => {
            console.log('calling ');
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
            

            .addCase(getProduct.pending, (state, { payload }) => {
                state.getLoad = true;
            })
            .addCase(getProduct.rejected, (state, { payload }) => {
                state.getLoad = false;
            })
            .addCase(getProduct.fulfilled, (state, { payload }) => {
                // state.allUser = payload;
                state.allProducts = payload;
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
            })

     
     
      
       

    },
})


export const {  setLoading,   } = dataSlice.actions
export const allData = (state) => state.data;
export default dataSlice.reducer
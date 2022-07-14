import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';

import Swal from 'sweetalert2';
const initialState = {
    user: {},
    loading: true,
    getLoad: false,
    allServices: [],
    allOrder:[],
    allProducts:[],

    serviceIsLoading: false,
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    singleServiceLoading: true,
    singleServiceDetail: {},
    testimonialLoading: true,
    providers: [],
    allChat: [],
    serviceProviderLoading: true,
    orderInfo: {},
    selectedService: {},
    reviewIndex: 0,
    providerEmail: {},
    notifications: [],
    notificationLoading: true,
    notificationCount: 0,

    orderChats: [],
    otherOrders: [],

    approvdedLoading: true,
    deleteLoading: true,


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


export const loadServiceCategory = createAsyncThunk(
    "loadServiceCategory/data",
    async () => {
        const response = await fetch(
            "https://dry-sea-00611.herokuapp.com/services"
        ).then((res) => res.json());
        return response;
    }
);

export const singleService = createAsyncThunk(
    "singleService/details",
    async (info) => {
        const response = await axios.get(`https://dry-sea-00611.herokuapp.com/singleservice/${info}`)
        return response.data;
    }
);



export const deleteTestimonial = createAsyncThunk(
    "testimonial/delete",

    async (info) => {
        const response = await axios.delete(`https://dry-sea-00611.herokuapp.com/reviews/${info.id}`)
        return response.data;
    }
)

export const approvedTestimonial = createAsyncThunk(
    "approvetestimonial/approved",
    async (info) => {
        const response = await axios.put(`https://dry-sea-00611.herokuapp.com/reviews/${info.id}`)
        return response.data;
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = {}
        },

        setLoading: (state, action) => {
            console.log('calling ');
            state.loading = action.payload;
        },
        addToCart(state, { payload }) {
            // state.cartItems.push(payload);
            // //We need item id for find index effectively. Need modify API
            const itemIndex = state.cartItems.findIndex((item) => item.subId === payload.subId);

            if (itemIndex >= 0) {

                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${state.cartItems[itemIndex].Name} Quantity`, {
                    position: "bottom-left"
                })
            }
            else {
                const tempService = { ...payload, cartQuantity: 1 }
                // state.cartItems.push(action.payload)
                state.cartItems.push(tempService)
                toast.success(`${payload.Name} Added to Cart`, {
                    position: "bottom-left"
                });
            }
            const getItems = JSON.parse(localStorage.getItem('cartItems'));
            if (getItems) {
                localStorage.setItem("cartItems", JSON.stringify([payload, ...getItems]))
            } else {
                // localStorage.setItem("cartItems")
                localStorage.setItem("cartItems", JSON.stringify([payload]))
            }
        },

        deleteTestimonails: (state, { payload }) => {
            state.testimonials = state.testimonials.filter((item) => item._id !== payload)
        },
        addOrderInfo: (state, { payload }) => {
            state.orderInfo = payload;
        },
        selectedServiceAndProvider(state, { payload }) {
            state.selectedService = payload;
        },
        addChat: (state, { payload }) => {
            state.allChat = [...state.allChat, payload];
        },
        addOrderChat: (state, { payload }) => {
            state.orderChats = [...state.orderChats, payload];
        },

        changeOtherOrdersPosition: (state, { payload }) => {
            //
            const id = payload?.id;
            const getUser = state.otherOrders.filter(order => order._id === id)[0];
            const withoutUser = state.otherOrders.filter(order => order._id !== id);
            state.otherOrders = [getUser, ...withoutUser]
        },
        reviewServiceIndex: (state, { payload }) => {
            state.reviewIndex = payload;
        },
        parentServiceId: (state, { payload }) => {
            state.providerEmail = payload;
        },

        newNotification: (state, { payload }) => {
            state.notifications = [payload, ...state.notifications]
        },



    },
    extraReducers: (builder) => {
        builder
           
            .addCase(loadServiceCategory.pending, (state, action) => {
                state.serviceIsLoading = true;
            })
            .addCase(loadServiceCategory.fulfilled, (state, { payload }) => {
                state.serviceIsLoading = false;
                state.allServices = payload;
            })
            .addCase(loadServiceCategory.rejected, (state, { payload }) => {
                //
            })
            .addCase(singleService.pending, (state, action) => {
                state.singleServiceLoading = true;

            })
            .addCase(singleService.fulfilled, (state, { payload }) => {
                state.singleServiceDetail = payload;
                state.singleServiceLoading = false;
            })
      
      
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

     
     
      
            .addCase(deleteTestimonial.pending, (state, { payload }) => {
                state.deleteLoading = true;
            })
            .addCase(deleteTestimonial.fulfilled, (state, { payload }) => {
                state.deleteLoading = false;
            })
            .addCase(approvedTestimonial.pending, (state, { payload }) => {
                state.approvdedLoading = false;
            })
            .addCase(approvedTestimonial.fulfilled, (state, { payload }) => {
                state.approvdedLoading = true;
            })

       
       

    },
})


export const { login, logout, setLoading, addToCart, addOrderInfo, changeRole, selectedServiceAndProvider, reviewServiceIndex, parentServiceId, addChat, changeUserPosition, setNotificationCount, newNotification,  deleteTestimonails, addOrderChat, changeOtherOrdersPosition } = dataSlice.actions
export const allData = (state) => state.data;
export default dataSlice.reducer
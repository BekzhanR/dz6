import {createSlice} from "@reduxjs/toolkit";
import products from "../data/product.json"



const product = createSlice({
    name:"product",
    initialState:{
        producted:[],
        product:products,
        value:1
    },
    reducers:{
        addBusket:(state,action) =>{
            const index = action.payload
            if(!state.producted.some(repeat=>repeat._id == index._id)){
                state.producted.push(index)
        }
    },
    deleteBusket:(state,action)=>{
            const item = action.payload._id
            const deleteindex = state.producted.findIndex(element=>element._id=item)
        if(!deleteindex!==-1){
            state.producted.splice(deleteindex,1)
        }
    },
        increase:(state)=>{
            state.value+=1
        },
        decrease:(state) =>{
            state.value=state.value>1?state.value-=1:1
        }
}})
export const productaction=product.actions
export const productreducer=product.reducer
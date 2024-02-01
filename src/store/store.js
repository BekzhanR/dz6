import {configureStore} from "@reduxjs/toolkit";
import {productreducer} from "./product";
export const store=configureStore({
    reducer:{product:productreducer}
})
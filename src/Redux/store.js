import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./feature/SearchSlice";


const store = configureStore({
    reducer:{
        Todo:todoreducer
    }
        
    
})
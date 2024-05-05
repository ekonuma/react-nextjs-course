import reducer from "./modules/counter";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    counter: reducer,
  },
});

// Store chính: Quản lý tất cả store con (Mỗi store con quản lý dữ liệu theo nghiệp vụ)
import { combineReducers } from "redux";
import storeModalReducer from './reducers/Modal.reducer'
import gioHangStoreReducer from './reducers/GioHang.reducer'
import quanLySanPhamReducer from './reducers/QuanLySanPham.reducer'

const rootReducer = combineReducers({
  // store con (store nghiệp vụ sau này)
  /**
   * hoặc viết -->
    storeModalReducer: storeModalReducer
   * ---> storeModalReducer 
   */
  storeModalReducer: storeModalReducer,
  gioHangStoreReducer:gioHangStoreReducer,
  quanLySanPhamReducer:quanLySanPhamReducer
  
});

export default rootReducer;

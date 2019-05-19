const stateGioHang = {
  gioHang: [
    // {
    //   HinhAnh: "",
    //   MaSP: '',
    //   TenSP: "...",
    //   Gia: 0,
    //   SoLuong: 0
    // }
  ]
};

const gioHangStoreReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhat = [ ...state.gioHang ];
      let index = gioHangCapNhat.findIndex(
        spGH => spGH.MaSP === action.sanPham.id
      );

      if (index !== -1) {
        gioHangCapNhat[index].SoLuong += 1;
      } else {
        let { id, name, img, price } = action.sanPham;
        let spGH = {
          HinhAnh: img,
          MaSP: id,
          TenSP: name,
          Gia: price,
          SoLuong: 1
        };
        gioHangCapNhat.push(spGH);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }default:
  }
  return { ...state };
};

export default gioHangStoreReducer;

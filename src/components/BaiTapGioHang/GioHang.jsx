import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <img
              style={{ width: "50px", height: "50px" }}
              src={item.HinhAnh}
              alt="asf"
            />
          </td>
          <td>{item.TenSP}</td>
          <td>{item.Gia.toLocaleString()}</td>
          <td>{item.SoLuong}</td>
          <td>{(item.Gia * item.SoLuong).toLocaleString()}</td>
          <td>
            <button className="btn btn-danger">X</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success">Giỏ hàng</h3>
        <table className="table">
          <thead>
            <th>Hình ảnh</th>
            <th>Tên SP</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th />
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

// Viết hàm mapStateToProps lấy dữ liệu từ store về tạo props cho component
const mapStateToProps = state => {
  return {
    gioHang: state.gioHangStoreReducer.gioHang
  };
};

export default connect(
  mapStateToProps,
  null
)(GioHang);

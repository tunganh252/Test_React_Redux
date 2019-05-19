import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    // let { name, price, img } = this.props.sanPham;
    // let {themGioHang} = this.props;
    const { sanPham } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            className="card-img-top"
            src={sanPham.img}
            width={150}
            height={200}
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">{sanPham.name}</h5>
            <p>{sanPham.desc}</p>
            <p className="card-text">Giá: {sanPham.price.toLocaleString()}</p>
            <button
              onClick={() => this.props.themGioHang(sanPham)}
              className="btn btn-success"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    themGioHang: sanPham => {
      dispatch(
        //Tạo ra this.props.themGioHang đưa dữ liệu sản phẩm lên store
        {
          type: "THEM_GIO_HANG",
          sanPham
        }
      );
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SanPham);

import React, { Component } from 'react'
import {connect} from 'react-redux'

import SanPham from './SanPham';

 class DanhSachSanPham extends Component {


    renderSanPham = () => {
    
      return this.props.DSSP.map((item, index) => {
            return (
                <SanPham 
                themGioHang={this.props.themGioHang} 
                key={index} 
                sanPham={item} >
                </SanPham>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        DSSP:state.quanLySanPhamReducer.DSSP
    }
}


export default connect (
    mapStateToProps,
    null
)(DanhSachSanPham)
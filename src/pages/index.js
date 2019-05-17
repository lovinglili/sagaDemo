import React from 'react';
import { connect } from "react-redux";
import homeActions from '../store/home/actionCreators'
import { Button } from 'antd'


class Container extends React.Component {
  render(){
    return (
      <div><Button onClick={()=>{
        this.props.dispatch(homeActions.getListInfo())
      }}>get list</Button></div>
    );
  }
}


function mapStateToProps(state) {
  return {
    list: state.home.list,
  };
}
export default connect(mapStateToProps)(Container);

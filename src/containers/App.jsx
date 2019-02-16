import React, {Component} from "react";
import ReactDOM from "react-dom";
// import store from "../store";
import MainContainer from "./mainContainer";
import Menu from "../components/Menu.jsx"
import * as actions from "../actions/actions.js";
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  regionData: store.graph.regionData,
  activeNode: store.graph.activeNode
})

const mapDispatchToProps = dispatch => ({
  // should rename getEC2 to get all instances
    getAWSInstances: (instances) => {
        dispatch(actions.getAWSInstances(instances));
    },

    getNodeDetails: (data) => {
      dispatch(actions.getNodeDetails(data));
    }
})

class App extends Component{
  render(){
    return(
      <div id="app">
        <Menu getAWSInstances={this.props.getAWSInstances} />
        <MainContainer getAWSInstances={this.props.getAWSInstances} regionData={this.props.regionData} getNodeDetails={this.props.getNodeDetails} activeNode={this.props.activeNode}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from "react";

import SideBarContainer from "../AdminParentContainer/sideBar.container";
import PostAuthorInfoWrapperContainer from "./PostAuthorInfo/PostAuthorInfoWrapper.container";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as configActions from "../_actions/config.actions";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

class PostAuthorInfo extends Component {
   componentWillMount() {
      if (this.props.match !== null) {
         this.fetch();
      }
   }
   fetch = async () => {
      await funcLoadJs(INDEX_CONSTANTS.AdminArrayExternalScript);

      //Load data post by Id post
      const { configAllActions } = this.props;
      const { fetchConfigByInfoTypeRequest } = configAllActions;
      await fetchConfigByInfoTypeRequest(
         INDEX_CONSTANTS.CONFIG_INFO_TYPE_AUTHOR_POST
      );
   };
   render() {
      let { config } = this.props;
      if (config.idConfig !== undefined)
         config.configs = JSON.parse(config.configs);
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer {...this.props} />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <PostAuthorInfoWrapperContainer {...this.props} config={config} />
            {/* End of Content Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded ht-loaded" href="#page-top">
               <i className="fas fa-angle-up" />
            </a>
         </div>
      );
   }
}

PostAuthorInfo.propTypes = {
   classes: PropTypes.object,
   configAllActions: PropTypes.shape({
      fetchConfigByInfoTypeRequest: PropTypes.func,
   }),
};

const mapStateToProps = (state) => {
   return {
      config: state.config.configByInfoType,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      configAllActions: bindActionCreators(configActions, dispatch),
      //B??n tr??i ch??? l?? ?????t t??n th??i, b??n ph???i l?? configActions ??? b??n post.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostAuthorInfo);

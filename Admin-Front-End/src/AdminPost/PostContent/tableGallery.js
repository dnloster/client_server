import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourImageActions from "../../_actions/image.actions";
import { API_ENDPOINT } from "../../_constants/index.constants";

import { Upload, Icon, Modal, message, Button, Tooltip } from "antd";

import TagsContainer from "./Tags";

function getBase64(file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
   });
}

class TableGallery extends Component {
   constructor(props) {
      super(props);
      this.state = {
         previewVisible: false,
         previewImage: "",
         action: `${API_ENDPOINT}/image`,
         fileList: [],
         visibleTimelineModal: false,
         visibleTagsModal: false,
      };
   }

   showModalTags = () => {
      this.setState({
         visibleTagsModal: true,
      });
   };

   handleOkTags = (e) => {
      this.setState({
         visibleTagsModal: false,
      });
   };

   handleCancelTags = (e) => {
      this.setState({
         visibleTagsModal: false,
      });
   };

   componentWillMount() {
      const { listImage, record } = this.props;
      const listImageFilterIdPost = listImage
         .filter((image) => image.idPost === record.idPost)
         .map((image) => ({
            ...image,
            url: API_ENDPOINT + image.url,
            uid: image.idImage,
         }));
      this.setState({ fileList: listImageFilterIdPost });
   }

   handleCancel = () => this.setState({ previewVisible: false });

   beforeUpload = (file) => {
      const isJpgOrPng =
         file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
         message.error("You can only upload JPG/PNG file!");
      }
      return isJpgOrPng;
   };

   handlePreview = async (file) => {
      if (!file.url && !file.preview) {
         file.preview = await getBase64(file.originFileObj);
      }
      this.setState({
         previewImage: file.url || file.preview,
         previewVisible: true,
      });
   };

   handleChange = ({ fileList }) => this.setState({ fileList });

   actionUpload = async (file) => {
      const { record } = this.props;
      const { action } = this.state;
      /**
       * If you return, action will call again
       * */

      const actionUpload = `${action}?idPost=${record.idPost}`;

      const newListImage = [...this.state.fileList];
      this.setState({
         fileList: newListImage,
      });
      const key = "updatable";

      return (
         message.success({
            content: `${file.name} is uploading.....`,
            key,
            duration: 1,
         }),
         actionUpload
      );
   };

   onRemove = async (file) => {
      const { tourImageAllActions } = this.props;
      const { fetchDeleteTourImageRequest } = tourImageAllActions;
      await fetchDeleteTourImageRequest(file);
   };

   render() {
      const { record } = this.props;

      const { previewVisible, previewImage, fileList } = this.state;

      const uploadButton = (
         <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
         </div>
      );

      return (
         <>
            <Button
               type="default"
               size="small"
               className="mb-1 mr-2"
               onClick={this.showModalTags}
            >
               Tags
            </Button>
            <Modal
               style={{ top: 70 }}
               width="90%"
               title="Ch???nh s???a c??c Tag c???a b??i vi???t"
               visible={this.state.visibleTagsModal}
               onCancel={this.handleCancelTags}
               footer={null}
            >
               <div className="ht-timeline-container-main container col-md-12">
                  <TagsContainer
                     idPost={record.idPost}
                     titlePost={record.titlePost}
                     checkTags={record.tags}
                  />
               </div>
            </Modal>

            <Link
               type="primary"
               to={{
                  pathname: `/admin/post-content/${record.idPost}`,
                  state: {
                     record: true,
                  },
               }}
               // target={"_blank"}
            >
               <Tooltip
                  placement="bottom"
                  title="S???a n???i dung b??i vi???t (trong tab m???i)"
               >
                  <Button type="default" size="small" className="mb-1 mr-2">
                     Go To Edit Content
                  </Button>
               </Tooltip>
            </Link>

            <div className="clearfix">
               <Upload
                  name={"imgUploader"} //This is important similar backend name field
                  multiple={false}
                  action={this.actionUpload}
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                  beforeUpload={this.beforeUpload}
                  onRemove={this.onRemove}
               >
                  {fileList.length >= 1 ? null : uploadButton}
               </Upload>
               <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
               >
                  <img
                     alt="example"
                     style={{ width: "100%" }}
                     src={previewImage}
                  />
               </Modal>
            </div>
         </>
      );
   }
}

TableGallery.propTypes = {
   tourImageAllActions: PropTypes.shape({
      fetchDeletePostImageRequest: PropTypes.func,
   }),
   listImagePost: PropTypes.array,
};

const mapStateToProps = (state) => {
   return {
      listImagePost: state.image.listImagePost,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      tourImageAllActions: bindActionCreators(tourImageActions, dispatch),
      //B??n tr??i ch??? l?? ?????t t??n th??i, b??n ph???i l?? tourActions ??? b??n tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableGallery);

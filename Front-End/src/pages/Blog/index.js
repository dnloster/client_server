import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tag, Tooltip, Carousel, Pagination } from "antd";
import moment from "moment";

import * as postActions from "~/redux/actions/postAction";
import * as INDEX_CONSTANTS from "~/App/apis/index";
import funcLoadJs from "~/App/constants/loadJS";
import BlogRight from "./BlogRight";
import BlogNavigation from "./BlogNavigation";

class Blog extends Component {
    fetch = async () => {
        const { postAllActions, listPost } = this.props;
        //load list Post
        const { fetchListPostRequest, fetchListPostImageRequest } =
            postAllActions;
        if (!listPost.length) {
            await fetchListPostImageRequest();
            await fetchListPostRequest();
        }
    };

    componentDidMount() {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
        this.fetch();
    }

    splitListPost = (listPost) => {
        // get the most important posts
        const listLatestPost = listPost.slice(0, 3);
        return listLatestPost;
    };

    render() {
        const { listPost, listPostNew, listPostViews } = this.props;
        const listLatestPost = this.splitListPost(listPost);
        return (
            <section className="ftco-section mt-2">
                <div className="container ftco-animate">
                    <BlogNavigation />
                    <div className="ht-blog-container-1">
                        <div className="col-md-8 ftco-animate">
                            <Carousel autoplay>
                                {listLatestPost &&
                                    listLatestPost.map((post, index) => (
                                        <div
                                            className="ht-item-post-full-main"
                                            key={index}
                                        >
                                            <img
                                                src={
                                                    post.image && post.image.url
                                                        ? INDEX_CONSTANTS.API_ENDPOINT +
                                                          post.image.url
                                                        : "/images/blog-1.jpg"
                                                }
                                                alt="not found"
                                                className="item-post-img"
                                            />
                                            <div
                                                class="ht-item-post-full-main-info"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(rgba(255, 255, 255, 0),rgba(21, 21, 21, 0.7),rgba(255, 255, 255, 0)",
                                                }}
                                            >
                                                {/* <div className="ht-tag-main">
                                       DU L???CH SAPA
                                    </div> */}
                                                <div className="ht-title">
                                                    {post.titlePost.toUpperCase()}
                                                </div>
                                                <div className="ht-describe block-ellipsis-2">
                                                    {post.describe}
                                                </div>
                                                <Link
                                                    to={`blog-single/${post.idPost}`}
                                                    className="ht-btn-more"
                                                >
                                                    READ MORE
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                            </Carousel>
                        </div>
                        <div className="col-md-4 ht-item-post-full-right ftco-animate ">
                            <div className="ht-item-post-full ht-mb-special ftco-animate ">
                                <img src="/images/blog-2.jpg" alt="not found" />
                                <div class="ht-item-post-full-info">
                                    <div className="ht-tag-main">
                                        DU L???CH VI???T NAM
                                    </div>
                                    <div className="ht-title">
                                        TRUY T??M 5 CHI???C GI?????NG BALI S???NG ???O
                                        TH???N TH??NH KH???P VI???T
                                    </div>
                                    <Link to="more" className="ht-btn-more">
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                            <div className="ht-item-post-full ftco-animate ">
                                <img src="/images/blog-3.jpg" alt="not found" />
                                <div class="ht-item-post-full-info">
                                    <div className="ht-tag-main">
                                        DU L???CH QU???C T???
                                    </div>
                                    <div className="ht-title">
                                        C?? g?? b??n trong khu ngh??? d?????ng ?????t ?????
                                        b???c nh???t Maldives?
                                    </div>
                                    <Link to="more" className="ht-btn-more">
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ht-blog-container-2 ftco-animate ">
                        <div className="ht-blog-left col-md-8 ftco-animate ">
                            <div className="col-md">
                                <div className="ht-divide-special"></div>
                            </div>
                            <div className="title mb-2 ftco-animate">
                                <div className="ht-blog-title">
                                    <div className="ht-title">KHUY???N M??I</div>
                                    <div className="ht-describe">
                                        Nh???ng khuy???n m???i h???p d???n
                                    </div>
                                </div>
                            </div>
                            <div className="content d-flex flex-wrap">
                                {listPost &&
                                    listPost.map((post, index) => {
                                        const postDate = post.dateEdited
                                            ? post.dateEdited
                                            : post.dateAdd;
                                        const postTags =
                                            post.tags &&
                                            post.tags !== "undefined"
                                                ? JSON.parse(
                                                      post.tags.replace(
                                                          /'/g,
                                                          '"'
                                                      )
                                                  )
                                                : [];
                                        return (
                                            <div
                                                className="col-12 col-sm-12 col-md-6 col-lg-4"
                                                key={index}
                                            >
                                                <div className="blog-entry justify-content-end">
                                                    <Link
                                                        to={`blog-single/${post.idPost}`}
                                                        className="block-20 ht-blog-image"
                                                        style={{
                                                            backgroundImage:
                                                                post.image &&
                                                                post.image.url
                                                                    ? `url("${
                                                                          INDEX_CONSTANTS.API_ENDPOINT +
                                                                          post
                                                                              .image
                                                                              .url
                                                                      }")`
                                                                    : `url("images/image_1.jpg")`,
                                                        }}
                                                    >
                                                        <div className="ht-over-image"></div>
                                                    </Link>

                                                    <p className="ht-post-tag-container ht-no-p-m">
                                                        {/* Random color ?? m??, c??i n??y s??? cho admin c???u h??nh color tag
                           v?? d??? nh??: Th???c ph???m: ?????, bi???n: m??u lam,.... 
                           Tham kh???o ??? https://ant.design/docs/spec/colors*/}
                                                        {postTags &&
                                                            postTags.map(
                                                                (
                                                                    tag,
                                                                    index
                                                                ) => (
                                                                    <Tag
                                                                        color={
                                                                            "#faad14"
                                                                        }
                                                                    >
                                                                        {tag}
                                                                    </Tag>
                                                                )
                                                            )}
                                                    </p>
                                                    <div className="ht-no-p-m ht-post-comment-container">
                                                        <i className="far fa-eye ht-mr-r-2">
                                                            {" "}
                                                            {post.views}
                                                        </i>
                                                        <i className="far fa-star">
                                                            {" "}
                                                            {post.vote}
                                                        </i>
                                                    </div>
                                                    <div className="text mt-3 float-right d-block">
                                                        <Tooltip
                                                            title={`T??nh th???i gian`}
                                                            placement="top"
                                                        >
                                                            <div className="d-flex align-items-center mb-5 topp">
                                                                <div className="one">
                                                                    <span className="day">
                                                                        {moment(
                                                                            postDate
                                                                        ).format(
                                                                            INDEX_CONSTANTS
                                                                                .DATE_TIME_FORMAT
                                                                                .DATE
                                                                        )}
                                                                    </span>
                                                                </div>
                                                                <div className="two">
                                                                    <span className="yr">
                                                                        {moment(
                                                                            postDate
                                                                        ).format(
                                                                            INDEX_CONSTANTS
                                                                                .DATE_TIME_FORMAT
                                                                                .YEAR
                                                                        )}
                                                                    </span>
                                                                    <span className="mos">
                                                                        {moment(
                                                                            postDate
                                                                        ).format(
                                                                            INDEX_CONSTANTS
                                                                                .DATE_TIME_FORMAT
                                                                                .MONTH_NAME
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Tooltip>
                                                        <h3 className="heading">
                                                            <Link
                                                                to={`blog-single/${post.idPost}`}
                                                            >
                                                                {post.titlePost}
                                                            </Link>
                                                        </h3>
                                                        <div className="ht-post-describe">
                                                            {post.describe}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                            <div className="col-md ht-divide ftco-animate">
                                <div className="ht-divide-special-1"></div>
                            </div>
                            <div className="title mb-2 ftco-animate">
                                <div className="ht-blog-title">
                                    <div className="ht-title">??I???M ?????N</div>
                                    <div className="ht-describe">
                                        Nh???ng ?????a danh kh??ng th??? b??? qua khi ??i
                                        du l???ch
                                    </div>
                                </div>
                            </div>
                            <div className="content d-flex ht-posts-container"></div>
                            <div className="col-md ht-divide">
                                <div className="ht-divide-special-2"></div>
                            </div>
                            <div className="title mb-2 ftco-animate">
                                <div className="ht-blog-title">
                                    <div className="ht-title">???M TH???C</div>
                                    <div className="ht-describe">
                                        Nh???ng chuy???n ??i kh??ng th??? b??? qua ???m th???c
                                        tuy???t v???i
                                    </div>
                                </div>
                            </div>
                            <div className="content d-flex ht-posts-container"></div>
                            <div className="col-md ht-divide">
                                <div className="ht-divide-special-3"></div>
                            </div>
                            <div className="title mb-2 ftco-animate">
                                <div className="ht-blog-title">
                                    <div className="ht-title">M???O DU L???CH</div>
                                    <div className="ht-describe">
                                        C?? trong tay m???o hay kh??ng lo du l???ch
                                        kh??ng thu???n l???i vui v???
                                    </div>
                                </div>
                            </div>
                            <div className="content d-flex ht-posts-container"></div>
                            <Pagination
                                className="ht-d-flex-center-center mb-5 ftco-animate"
                                total={85}
                                showTotal={(total, range) =>
                                    `${range[0]}-${range[1]} of ${total} items`
                                }
                                pageSize={20}
                                defaultCurrent={1}
                            />
                        </div>
                        <div className="ht-blog-right col-md-4">
                            <BlogRight
                                listPostNew={listPostNew}
                                listPostViews={listPostViews}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
Blog.propTypes = {
    postAllActions: PropTypes.shape({
        fetchPostByIdRequest: PropTypes.func,
        fetchListPostRequest: PropTypes.func,
        fetchListPostImageRequest: PropTypes.func,
        votePostdRequest: PropTypes.func,
    }),
    listPost: PropTypes.array,
    listPostNew: PropTypes.array,
    listPostViews: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        listPost: state.post.listPost,
        listPostNew: state.post.listPostNew,
        listPostViews: state.post.listPostViews,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        postAllActions: bindActionCreators(postActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Icon, Input, Button, message, Form } from "antd";

import * as authActions from "~/redux/actions/authAction";
import ResultDynamic from "~/pages/ResultBoard/Result";

class ForgotPassword extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { authAllActions } = this.props;
                const { fetchForgotPasswordStep1Request } = authAllActions;
                let data = { ...values };
                message.loading("Checking...", 1);
                fetchForgotPasswordStep1Request(data);
            } else {
                throw err;
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const email = sessionStorage.getItem("email");
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                {!this.props.auth.email ? (
                    <div>
                        <Form.Item>
                            {getFieldDecorator("email", {
                                initialValue:
                                    email !== null &&
                                    email !== undefined &&
                                    email !== ""
                                        ? email
                                        : "",
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your email!",
                                    },
                                ],
                            })(
                                <Input
                                    style={{ width: "350px" }}
                                    name="email"
                                    prefix={
                                        <Icon
                                            type="mail"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Email"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                G???i link ????? x??c nh???n
                            </Button>
                            <Link to="/login">
                                <Button className="login-form-button">
                                    ????ng nh???p ngay!
                                </Button>
                            </Link>
                        </Form.Item>
                    </div>
                ) : (
                    <ResultDynamic
                        status="sucess"
                        title={
                            <div>
                                H??y ki???m tra email c???a b???n <br></br>{" "}
                                <a
                                    href="https://mail.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {this.props.auth.email}
                                </a>{" "}
                                v?? t???o m???t kh???u m???i
                            </div>
                        }
                        toLink="/login"
                        nameButton="????ng nh???p ngay!"
                        typeButton="primary"
                    />
                )}
            </Form>
        );
    }
}

const WrappedForgotPasswordForm = Form.create({ name: "forgot-password" })(
    ForgotPassword
);

WrappedForgotPasswordForm.propTypes = {
    classes: PropTypes.object,
    authAllActions: PropTypes.shape({
        fetchForgotPasswordStep1Request: PropTypes.func,
    }),
    auth: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        authAllActions: bindActionCreators(authActions, dispatch),
        //B??n tr??i ch??? l?? ?????t t??n th??i, b??n ph???i l?? tourActions ??? b??n tour.action.js
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedForgotPasswordForm);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, Button, message, Form } from "antd";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";

import * as authActions from "~/redux/actions/authAction";
import ResultDynamic from "~/pages/ResultBoard/Result";

class ForgotPasswordStep2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmDirty: false,
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { authAllActions } = this.props;
                const { fetchForgotPasswordStep2Request } = authAllActions;
                let data = { ...values };
                message.loading("Checking...", 1);
                const path = window.location.search;
                fetchForgotPasswordStep2Request(path, data);
            } else {
                throw err;
            }
        });
    };

    handleConfirmBlur = (e) => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
        } else {
            callback();
        }
    };
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form
                onSubmit={this.handleSubmit}
                className="login-form"
                style={{ minWidth: "350px" }}
            >
                {!this.props.auth.email ? (
                    <div>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator("confirm", {
                                rules: [
                                    {
                                        required: true,
                                        message:
                                            "Please confirm your password!",
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(
                                <Input.Password
                                    onBlur={this.handleConfirmBlur}
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                ?????t l???i m???t kh???u
                            </Button>
                            <Link to="/forgot-password">
                                <Button className="login-form-button mt-4">
                                    {" "}
                                    Quay l???i
                                </Button>
                            </Link>
                        </Form.Item>
                    </div>
                ) : (
                    <ResultDynamic
                        status="sucess"
                        title={
                            <div>
                                M???t kh???u c???a t??i kho???n{" "}
                                <Text>{`${this.props.auth.email}`}</Text> b???n
                                kh???i t???o th??nh c??ng!
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

const WrappedForgotPasswordStep2Form = Form.create({ name: "forgot-password" })(
    ForgotPasswordStep2
);

WrappedForgotPasswordStep2Form.propTypes = {
    classes: PropTypes.object,
    authAllActions: PropTypes.shape({
        fetchForgotPasswordStep2Request: PropTypes.func,
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
)(WrappedForgotPasswordStep2Form);

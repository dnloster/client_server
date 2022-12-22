import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Drawer, Divider, Col, Row, Typography, List } from "antd";

import * as accountActions from "~/redux/actions/accountAction";
import { API_ENDPOINT } from "~/App/apis/index";
import Avatar from "./Avatar";

const { Paragraph } = Typography;
const pStyle = {
    fontSize: 16,
    color: "rgba(0,0,0,0.85)",
    lineHeight: "24px",
    display: "block",
    marginBottom: 16,
};

const DescriptionItem = ({ title, content, editable }) => (
    <div
        style={{
            fontSize: 14,
            lineHeight: "22px",
            marginBottom: 7,
            color: "rgba(0,0,0,0.65)",
        }}
    >
        <p
            style={{
                marginRight: 8,
                display: "inline-block",
                color: "rgba(0,0,0,0.85)",
            }}
        >
            {title}:
        </p>
        <Paragraph editable={editable}>{content}</Paragraph>
    </div>
);

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "Hồ Chí Minh",
            phone: "",
            birthdate: "",
            website: "",
            avatar: "",
            myAccount: {},
        };
    }
    onClose = () => {
        this.props.onClose();
    };

    componentWillMount() {
        const { accountAllActions } = this.props;
        const {
            fetchAccountRequest,
            // fetchOrderOfAccountWithEmailRequest,
        } = accountAllActions;
        const email = sessionStorage.getItem("email");
        fetchAccountRequest(email);
        // fetchOrderOfAccountWithEmailRequest(email);
    }

    componentWillReceiveProps() {
        if (
            this.state.name === undefined ||
            this.state.name === "" ||
            this.state.name === null
        ) {
            const { account } = this.props;
            this.setState({
                name: account.name,
                address: account.address,
                phone: account.phone,
                birthdate: moment(account.birthdate).format("L"),
                website: account.website,
                avatar: account.avatar,
                myAccount: account,
            });
        }
    }

    onChange = async (str, field) => {
        const { account, accountAllActions } = this.props;
        const { fetchUpdateAccountRequest } = accountAllActions;
        if (field === "name") {
            const data = { ...account, name: str };
            await fetchUpdateAccountRequest(data);
            this.setState({ name: str, myAccount: data });
        }
        if (field === "address") {
            const data = { ...account, address: str };
            await fetchUpdateAccountRequest(data);
            this.setState({ address: str, myAccount: data });
        }
        if (field === "phone") {
            const data = { ...account, phone: str };
            await fetchUpdateAccountRequest(data);
            this.setState({ phone: str, myAccount: data });
        }
        if (field === "birthdate") {
            const data = { ...account, birthdate: str };
            await fetchUpdateAccountRequest(data);
            this.setState({ birthdate: str, myAccount: data });
        }
        if (field === "website") {
            const data = { ...account, website: str };
            await fetchUpdateAccountRequest(data);
            this.setState({ website: str, myAccount: data });
        }
    };

    renderOrder = () => {
        const { order } = this.props;
        // sessionStorage.setItem("avatar", account.avatar);
        return (
            <List
                itemLayout="horizontal"
                dataSource={order}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <Link to={`tour-single/${item.idTour}`}>
                                    Tên TOUR: {item.titleTour}
                                </Link>
                            }
                            description={
                                <List.Item.Meta
                                    title={
                                        <Link to={`tour-single/${item.idTour}`}>
                                            Tổng giá: {item.totalPrice} VNĐ
                                        </Link>
                                    }
                                    description={
                                        <div>
                                            Số người lớn: {item.numberPeople} Số
                                            trẻ em: {item.numberChildren}{" "}
                                            <br></br>Thời gian khởi hành:{" "}
                                            {moment(item.departureDay).format(
                                                "lll"
                                            )}
                                        </div>
                                    }
                                />
                            }
                        />
                    </List.Item>
                )}
            />
        );
    };

    render() {
        const { visible } = this.props;
        const { name, address, phone, birthdate, website, avatar, myAccount } =
            this.state;
        return (
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={visible}
            >
                <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
                <p style={pStyle}>Personal</p>
                <Row>
                    <Col span={12}>
                        <Avatar
                            idAccount={myAccount.idAccount}
                            avatar={API_ENDPOINT + avatar}
                            style={{ width: "200px" }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <div
                            style={{
                                fontSize: 14,
                                lineHeight: "22px",
                                marginBottom: 7,
                                color: "rgba(0,0,0,0.65)",
                            }}
                        >
                            <p
                                style={{
                                    marginRight: 8,
                                    display: "inline-block",
                                    color: "rgba(0,0,0,0.85)",
                                }}
                            >
                                Full name:
                            </p>
                            <Paragraph
                                editable={{
                                    onChange: (str) =>
                                        this.onChange(str, "name"),
                                }}
                            >
                                {name}
                            </Paragraph>
                        </div>
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Account"
                            content={myAccount.email}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <div
                            style={{
                                fontSize: 14,
                                lineHeight: "22px",
                                marginBottom: 7,
                                color: "rgba(0,0,0,0.65)",
                            }}
                        >
                            <p
                                style={{
                                    marginRight: 8,
                                    display: "inline-block",
                                    color: "rgba(0,0,0,0.85)",
                                }}
                            >
                                Address:
                            </p>
                            <Paragraph
                                editable={{
                                    onChange: (str) =>
                                        this.onChange(str, "address"),
                                }}
                            >
                                {address === undefined ? " " : address}
                            </Paragraph>
                        </div>
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Country" content="Việt Nam" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <div
                            style={{
                                fontSize: 14,
                                lineHeight: "22px",
                                marginBottom: 7,
                                color: "rgba(0,0,0,0.65)",
                            }}
                        >
                            <p
                                style={{
                                    marginRight: 8,
                                    display: "inline-block",
                                    color: "rgba(0,0,0,0.85)",
                                }}
                            >
                                Birthdate:
                            </p>
                            <Paragraph
                                editable={{
                                    onChange: (str) =>
                                        this.onChange(str, "birthdate"),
                                }}
                            >
                                {birthdate === undefined ? " " : birthdate}
                            </Paragraph>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div
                            style={{
                                fontSize: 14,
                                lineHeight: "22px",
                                marginBottom: 7,
                                color: "rgba(0,0,0,0.65)",
                            }}
                        >
                            <p
                                style={{
                                    marginRight: 8,
                                    display: "inline-block",
                                    color: "rgba(0,0,0,0.85)",
                                }}
                            >
                                Website:
                            </p>
                            <Paragraph
                                editable={{
                                    onChange: (str) =>
                                        this.onChange(str, "website"),
                                }}
                            >
                                {website}
                            </Paragraph>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div
                            style={{
                                fontSize: 14,
                                lineHeight: "22px",
                                marginBottom: 7,
                                color: "rgba(0,0,0,0.65)",
                            }}
                        >
                            <p
                                style={{
                                    marginRight: 8,
                                    display: "inline-block",
                                    color: "rgba(0,0,0,0.85)",
                                }}
                            >
                                Phone:
                            </p>
                            <Paragraph
                                editable={{
                                    onChange: (str) =>
                                        this.onChange(str, "phone"),
                                }}
                            >
                                {phone}
                            </Paragraph>
                        </div>
                    </Col>
                </Row>
                <Divider />
                <p style={pStyle}>Order Create By: {myAccount.name}</p>
                {this.renderOrder()}
                {/* <Row>
               <Col span={12}>
                  <DescriptionItem title="Position" content="Programmer" />
               </Col>
               <Col span={12}>
                  <DescriptionItem title="Responsibilities" content="Coding" />
               </Col>
            </Row>
            <Row>
               <Col span={12}>
                  <DescriptionItem title="Department" content="XTech" />
               </Col>
               <Col span={12}>
                  <DescriptionItem
                     title="Supervisor"
                     content={<Link> Lin</Link>}
                  />
               </Col>
            </Row>
            <Row>
               <Col span={24}>
                  <DescriptionItem
                     title="Skills"
                     content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                  />
               </Col>
            </Row> */}
                <Divider />
                <p style={pStyle}>Contacts</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem
                            title="Email"
                            content="dnloster@gmail.com"
                        />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Phone Number"
                            content="+84 983 427 263"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Github"
                            content={
                                <a href="http://github.com/dnloster">
                                    github.com/dnloster
                                </a>
                            }
                        />
                    </Col>
                </Row>{" "}
                <Row>
                    <Col span={12}>
                        <DescriptionItem
                            title="Full Name"
                            content="Nguyen Van Duc"
                        />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Năm mới 2023"
                            content="Chúc bạn thật nhiều sức khỏe và thành công nhé!"
                        />
                    </Col>
                </Row>
            </Drawer>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object,
    accountAllActions: PropTypes.shape({
        fetchAccountRequest: PropTypes.func,
        fetchUpdateAccountRequest: PropTypes.func,
        fetchOrderOfAccountWithEmailRequest: PropTypes.func,
    }),
    account: PropTypes.array,
    order: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        account: state.account.account,
        order: state.account.order,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        accountAllActions: bindActionCreators(accountActions, dispatch),
        //Bên trái chỉ là đặt tên thôi, bên phải là accountActions ở bên account.action.js
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

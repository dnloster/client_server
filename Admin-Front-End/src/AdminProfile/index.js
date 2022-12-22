import { Divider } from "antd";
import React, { Component } from "react";
import SideBarContainer from "../AdminParentContainer/sideBar.container";

export default class AdminProfile extends Component {
    render() {
        return (
            <div id="wrapper">
                <SideBarContainer />
                <div className="account_wrapper container">
                    <div className="h1">Thay đổi thông tin tài khoản</div>
                    <Divider />
                    <div className="row">
                        <div className="col-4">
                            <img
                                src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/291983542_1402506553508555_1492079344116276354_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OQ5hYRFENPMAX8u5QWs&tn=5SuS1sf2W4gJgiRi&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC3l_sIsq9exevv0xJKt7S5MjMbTwkwFXHSqL3PKMSisw&oe=639F20A8"
                                alt="avatar"
                            />
                            <p className="account_name">Nguyễn Văn Đức</p>
                        </div>
                        <Divider type="vertical" />
                        <div className="col-8"></div>
                    </div>
                </div>
            </div>
        );
    }
}

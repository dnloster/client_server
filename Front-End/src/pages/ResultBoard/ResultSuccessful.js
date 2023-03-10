import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button, Typography } from "antd";

const { Paragraph } = Typography;

class ResultSuccessful extends Component {
    render() {
        const { params } = this.props.match;
        return (
            <Result
                status={`success`}
                title={
                    <div>
                        {" "}
                        Số hóa đơn (mã PIN của bạn) là:{" "}
                        <Paragraph
                            copyable={params.idOrder}
                            style={{ display: "inline" }}
                        >
                            {params.idOrder}
                        </Paragraph>{" "}
                    </div>
                }
                subTitle={
                    <div>
                        {`Tour của bạn đã được xác nhận!`}
                        <p>
                            Chúng tôi sẽ gửi mail cho bạn để xác nhận đã thanh
                            toán, Xin hãy kiểm tra và lưu lại!
                        </p>
                    </div>
                }
                extra={[
                    <Link key="extra" to={{ pathname: "/" }}>
                        <Button type="dashed" key="console">
                            Đi đến trang chủ
                        </Button>
                    </Link>,
                ]}
            />
        );
    }
}

export default ResultSuccessful;

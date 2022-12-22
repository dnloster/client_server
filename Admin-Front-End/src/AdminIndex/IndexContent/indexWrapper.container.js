import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import IndexContentContainer from "./indexContent.container";

export default class ContentWrapperContainer extends Component {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Topbar */}
                <TopBarContainer />
                {/* End of Topbar */}
                {/* Main Content */}
                <IndexContentContainer />
                {/* End of Main Content */}
            </div>
        );
    }
}

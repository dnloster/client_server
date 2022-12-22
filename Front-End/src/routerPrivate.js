import React from "react";

import AllPage from "./App/helpers/all";

const routerPrivate = [
    //for admin
    {
        path: "/profile",
        exact: true,
        component: (match, props) => <AllPage match={match} {...props} />,
    },
];
export default routerPrivate;

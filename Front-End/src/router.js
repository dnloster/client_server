import React from "react";

import Result403 from "~/pages/ResultBoard/Result403";
import Result404 from "~/pages/ResultBoard/Result404";
import Result500 from "~/pages/ResultBoard/Result500";
import ResultDone from "~/pages/ResultBoard/ResultDone";
import ResultProcessing from "~/pages/ResultBoard/ResultProcessing";
import ResultSubmissionFailed from "~/pages/ResultBoard/ResultSubmissionFailed";
import ResultSuccessful from "~/pages/ResultBoard/ResultSuccessful";
import ResultSuccessfulPayment from "~/pages/ResultBoard/ResultSuccessfulPayment";
import ResultSuccessfulPaymentMomo from "~/pages/ResultBoard/ResultSuccessfulPaymentMomo";
import ResultSuccessfulVerify from "~/pages/ResultBoard/ResultSuccessfulVerify";
import ResultWarning from "~/pages/ResultBoard/ResultWarning";
import Navigation from "~/components/Header/Navigation";
import HeaderBreadcrumb from "~/components/Header/HeaderBreadcrumb";

import Home from "~/pages/Home";
import About from "~/pages/About";
import Blog from "~/pages/Blog";
import BlogCategory from "~/pages/Blog";
import BlogSingle from "~/pages/BlogSingle";
import TourSingle from "~/pages/TourSingle";
import TourBest from "~/pages/Tour/TourBest";
import Tour from "~/pages/Tour";
import Login from "~/pages/LoginAndRegister/Login";
import Register from "~/pages/LoginAndRegister/Register";
import ForgotPassword from "~/pages/LoginAndRegister/ForgotPassword";
import ForgotPasswordStep2 from "~/pages/LoginAndRegister/ForgotPasswordStep2";
import BookTour from "~/pages/BookTour";
import Order from "~/pages/Order";

//common Customer
import Footer from "~/components/Footer";
import Loaded from "~/App/helpers/loaded";
import BackToTop from "~/App/helpers/backToTop";

//test
import All from "~/App/helpers/all";

const routes = [
    //for customer
    {
        path: "/",
        exact: true,
        component: (props) => (
            <>
                <Navigation {...props} />
                <Home {...props} />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/login",
        exact: true,
        component: () => (
            <>
                <Navigation />
                <Login />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/register",
        exact: true,
        component: () => (
            <>
                <Navigation />
                <Register />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/orders",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation />
                <Order match={match} {...props} />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/forgot-password",
        exact: true,
        component: () => (
            <>
                <Navigation />
                <ForgotPassword />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/forgotPassword",
        exact: true,
        component: () => (
            <>
                <Navigation />
                <ForgotPasswordStep2 />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/verify",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation />
                <ResultSuccessfulVerify match={match} {...props} />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/tour",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation {...props} />
                <HeaderBreadcrumb {...props} />
                <Tour match={match} {...props} />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/tour/search/:keySearch/:dayStart/:dayEnd/:conditional",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation {...props} />
                <HeaderBreadcrumb {...props} />
                <Tour match={match} {...props} />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/book-tour/:idTour",
        exact: true,
        component: (match, props) => (
            <>
                <Navigation match={match} {...props} />
                <HeaderBreadcrumb match={match} {...props} />
                <BookTour match={match} {...props} />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/tour-best",
        exact: true,
        component: () => (
            <>
                <Navigation />
                <HeaderBreadcrumb />
                <TourBest />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/tour-single/:idTour",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation {...props} />
                <HeaderBreadcrumb {...props} />
                <TourSingle match={match} {...props} />
                <Footer />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/about",
        exact: true,
        component: () => (
            <>
                <Navigation />
                <HeaderBreadcrumb />
                <About />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },

    {
        path: "/blog",
        exact: true,
        component: () => (
            <>
                <Navigation />
                <HeaderBreadcrumb />
                <Blog />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },

    {
        path: "/blog-category",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation {...props} />
                <HeaderBreadcrumb {...props} />
                <BlogCategory match={match} {...props} />
                <Footer />
                <Loaded />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/blog-single/:idPost",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation {...props} />
                <HeaderBreadcrumb {...props} />
                <BlogSingle match={match} {...props} />
                <Footer />
                <BackToTop />
            </>
        ),
    },
    {
        path: "/result-momo",
        exact: true,
        component: ({ match }, props) => (
            <>
                <Navigation {...props} />
                <ResultSuccessfulPaymentMomo match={match} {...props} />
                <Footer />
            </>
        ),
    },
    //end for customer

    //for  commons
    {
        path: "/notAuthorized",
        exact: true,
        component: () => <Result403 />,
    },

    {
        path: "/serverIsWrong",
        exact: true,
        component: () => <Result500 />,
    },
    {
        path: "/doneResult",
        exact: true,
        component: () => <ResultDone />,
    },
    {
        path: "/processingResult",
        exact: true,
        component: () => <ResultProcessing />,
    },
    {
        path: "/complexError",
        exact: true,
        component: () => <ResultSubmissionFailed />,
    },
    {
        path: "/successfulResult/:idOrder",
        exact: true,
        component: ({ match }, props) => (
            <ResultSuccessful match={match} {...props} />
        ),
    },
    {
        path: "/successfulResult",
        exact: true,
        component: ({ match }, props) => (
            <ResultSuccessfulPayment match={match} {...props} />
        ),
    },
    {
        path: "/warningResult",
        exact: true,
        component: () => (
            <ResultWarning status="warning" title="Warning something!" />
        ),
    },
    {
        path: "/all",
        exact: true,
        component: () => <All />,
    },
    {
        path: "/",
        exact: false,
        component: () => <Result404 />,
    },
];

export default routes;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rate } from "antd";

import { API_ENDPOINT } from "~/App/apis";
import Testimonials from "~/App/assets/img/tes16362608917717.jpg";
import BackTestimonials from "~/App/assets/img/back-testimonial.jpg";
import { fetchAllEvaluatesRequest } from "~/redux/actions/evaluateAction";
import { fetchAccountRequest } from "~/redux/actions/accountAction";
import replaceImg from "~/App/assets/img/replace.jpg";
import "./index.scss";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function HappyTravelersSay() {
    const [evaluates, setEvaluates] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllEvaluatesRequest());
        dispatch(fetchAccountRequest());
    }, [dispatch]);

    const listEvaluates = useSelector((state) =>
        state.evaluate.listAllEvaluate !== undefined
            ? state.evaluate.listAllEvaluate[0]
            : []
    );

    const listAccountImage = useSelector((state) => state.account.account);

    useEffect(() => {
        if (listEvaluates !== undefined) {
            let evaluates =
                listEvaluates.data !== undefined ? listEvaluates.data : [];
            evaluates = evaluates.map((evaluate) => {
                let listEvaluateImageDetail =
                    Array.isArray(listAccountImage) &&
                    listAccountImage.filter(
                        (imageEvaluate) =>
                            imageEvaluate.idAccount === evaluate.idAccount
                    );
                return { ...evaluate, images: listEvaluateImageDetail };
            });
            setEvaluates(evaluates);
        }
    }, [listAccountImage, listEvaluates]);

    return (
        <div className="wrapper grid lg:grid-cols-2 sm:grid-cols-1">
            <img
                src={Testimonials}
                alt=""
                className="h-full object-cover w-full"
            />
            <div
                className="testimonials h-full w-full bg-cover bg-no-repeat bg-right flex flex-col justify-center items-center"
                style={{ backgroundImage: `url('${BackTestimonials}')` }}
            >
                <div className="testi-wrapper container text-white text-center font-medium text-[45px] mt-3 select-none">
                    Ý kiến khách hàng
                    <Swiper
                        grabCursor={true}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                    >
                        {evaluates &&
                            evaluates.map((eva) => (
                                <SwiperSlide
                                    key={eva.idEvaluate}
                                    className="!w-full flex flex-col items-center pt-6"
                                >
                                    {eva.images[0] ? (
                                        <img
                                            src={
                                                API_ENDPOINT +
                                                eva.images[0].avatar
                                            }
                                            alt=""
                                            className="w-[80px] h-[80px] rounded-[50%] border-2 border-white border-solid"
                                        />
                                    ) : (
                                        <img
                                            src={replaceImg}
                                            alt=""
                                            className="w-[80px] h-[80px] rounded-[50%] border-2 border-white border-solid"
                                        />
                                    )}
                                    <Rate
                                        allowHalf
                                        tooltips={desc}
                                        disabled
                                        defaultValue={eva.rateAverage}
                                        size="small"
                                        className="mt-6 h-[40px]"
                                    />
                                    <p className="pt-3 text-base italic">
                                        {eva.evaluateToService}
                                    </p>
                                    {eva.images[0] && (
                                        <p className="pt-3 text-lg font-extrabold">
                                            {eva.images[0].name}
                                        </p>
                                    )}
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

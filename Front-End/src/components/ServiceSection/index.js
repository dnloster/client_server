import React from "react";
import bg from "~/App/assets/img/background-2.jpg";
import HN from "~/App/assets/img/HaNoi.jpg";
import HP from "~/App/assets/img/HaiPhong.jpg";
import DN from "~/App/assets/img/DaNang.jpg";
import NT from "~/App/assets/img/NhaTrang.jpg";
import CT from "~/App/assets/img/CanTho.jpg";
import PQ from "~/App/assets/img/PhuQuoc.jpg";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

const places = [
    {
        name: "Hà Nội",
        image: HN,
        to: "ha-noi",
    },
    {
        name: "Hải Phòng",
        image: HP,
        to: "hai-phong",
    },
    {
        name: "Đà Nẵng",
        image: DN,
        to: "da-nang",
    },
    {
        name: "Nha Trang",
        image: NT,
        to: "nha-trang",
    },
    {
        name: "Cần Thơ",
        image: CT,
        to: "can-tho",
    },
    {
        name: "Phú Quốc",
        image: PQ,
        to: "phu-quoc",
    },
];

export default function ServiceSection() {
    const [size, setSize] = useState("default");
    const placeRef = useRef();
    // const navigate = useNavigate();
    let history = useHistory();

    useEffect(() => {
        const placeSize = placeRef.current;
        window.addEventListener("resize", () => {
            if (window.innerWidth < 1024) {
                setSize("small");
                placeSize.style.display = "block";
            }
        });
        return () =>
            window.removeEventListener("resize", () => {
                if (window.innerWidth < 1024) {
                    setSize("small");
                    placeSize.style.display = "block";
                }
            });
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                paddingTop: "120px",
                paddingBottom: "120px",
            }}
            className="container"
        >
            <div
                className="text-center container mx-auto mb-[50px]"
                style={{ textAlign: "center", marginBottom: "50px" }}
            >
                <div
                    className="text-[45px] font-medium leading-[58.5px]"
                    style={{
                        fontSize: "45px",
                        fontWeight: "500",
                        lineHeight: "58.5px",
                    }}
                >
                    Điểm đến hấp dẫn
                </div>
                <div
                    className="text-lg leading-[28.8px] mx-[158.75px]"
                    style={{
                        fontSize: "18px",
                        lineHeight: "28.8px",
                        marginLeft: "158.75px",
                        marginRight: "158.75px",
                    }}
                >
                    Hy vọng với những gợi ý nhỏ này, bạn sẽ tìm được cho mình
                    một địa điểm đến thích hợp cho những ngày nghỉ của mình sắp
                    tới để bắt đầu công việc một cách hiệu quả bạn nhé !
                </div>
            </div>
            {size === "default" ? (
                <div className="layout">
                    {places.map((place) => (
                        <div
                            className="layout-item"
                            key={place.to}
                            onClick={() =>
                                history.push(
                                    `/tour/search/${place.to}/2019-1-1/2028-8-8/address`
                                )
                            }
                        >
                            <img
                                src={place.image}
                                alt={place.to}
                                className="layout-image"
                            />
                            <div className="overlay"></div>
                            <p>{place.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    grabCursor={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    className="layout"
                    ref={placeRef}
                >
                    {places.map((place) => (
                        <SwiperSlide
                            key={place.to}
                            className="layout-item"
                            onClick={() =>
                                history.push(
                                    `/tour/search/${place.to}/2019-1-1/2028-8-8/address`
                                )
                            }
                        >
                            <img src={place.image} alt="" />
                            <div className="overlay"></div>
                            <p>{place.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import main from './assets/img/main';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
    return (
        <main>
            {/* 메인 비주얼 Section */}
            <section id="main" className="main section">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2 d-none d-sm-block" data-aos="fade-up" data-aos-delay="400">
                            <img src={main.login_calendar} alt="login_calendar" />
                        </div>
                        <div className="col-lg-5 order-lg-1 offset-md-1">
                            <span className="section-subtitle" data-aos="fade-up">식집사 알리미</span>
                            <h1 className="mb-4" data-aos="fade-up">
                                <span className="pt_color">나의 반려 식물</span><br /> 물주기 알림
                            </h1>
                            <p className="mt-5" data-aos="fade-up">
                                <a href="/alarmlist" className="btn btn-get-started">알림 설정</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 아이콘 Section */}
            <section className="icon_section section">
                <div className="container">
                    <div className="content">
                        <ul className="icon">
                            <li>
                                <a href="/plantMine">
                                    <img src={main.main_icon_01} alt="icon_01" />              
                                </a>
                                <p>식물 찾기</p>
                            </li>
                            <li>
                                <a href="/freeboardlist">
                                    <img src={main.main_icon_02} alt="icon_02" />
                                </a>
                                <p>무료 나눔</p>
                            </li>
                            <li>
                                <a href="/khboardlist">
                                    <img src={main.main_icon_03} alt="icon_03" />
                                </a>
                                <p>나만의 노하우</p>
                            </li>
                            <li>
                                <a href="/hotellist">
                                    <img src={main.main_icon_04} alt="icon_04" />
                                </a>
                                <p>돌봄 호텔 찾기</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 오늘의 식물 section */}
            <section id="today" className="today section">
                <div className="site-section slider-today-wrap">
                    <h1>오늘의 식물</h1>
                    <img src={main.slide_bg_point} alt="slide_bg_point" className="slide_bg_point" />

                    <Swiper className='swiper init-swiper'
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        loop={false} // 무한 루프 활성화
                        autoplay={{
                            delay: 0,
                            pauseOnMouseEnter: true, // added
                            disableOnInteraction: false,
                        }}
                        speed={3000} //add
                        spaceBetween={30}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // 스마트폰 화면 크기
                            320: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                            },
                            // 태블릿 화면 크기
                            768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            },
                            // 데스크톱 화면 크기
                            1200: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                            <a href="/" className="slide_link">
                                <div className="today">
                                    <h3>유칼립투스 쉽게 키우기~!</h3>
                                    <p>유칼립투스는 물과 해를 좋아하기 때문에 아침 저녁으로 물을 ...</p>
                                    <span className="d-block position">2024-08-18</span>
                                    <img src={main.slide_01} alt="slide_01" />
                                    <p className="mb-0">
                                        <a href="/" className="more dark">자세히보기 <span className="bi bi-arrow-right-short"></span></a>
                                    </p>
                                </div>
                            </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                            <a href="/" className="slide_link">
                                <div className="today">
                                    <h3>유칼립투스 쉽게 키우기~!</h3>
                                    <p>유칼립투스는 물과 해를 좋아하기 때문에 아침 저녁으로 물을 ...</p>
                                    <span className="d-block position">2024-08-18</span>
                                    <img src={main.slide_01} alt="오늘의 식물 1위" />
                                    <p className="mb-0">
                                        <a href="/" className="more dark">자세히보기 <span className="bi bi-arrow-right-short"></span></a>
                                    </p>
                                </div>
                            </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                            <a href="/" className="slide_link">
                                <div className="today">
                                    <h3>유칼립투스 쉽게 키우기~!</h3>
                                    <p>유칼립투스는 물과 해를 좋아하기 때문에 아침 저녁으로 물을 ...</p>
                                    <span className="d-block position">2024-08-18</span>
                                    <img src={main.slide_01} alt="오늘의 식물 1위" />
                                    <p className="mb-0">
                                        <a href="/" className="more dark">자세히보기 <span className="bi bi-arrow-right-short"></span></a>
                                    </p>
                                </div>
                            </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                            <a href="/" className="slide_link">
                                <div className="today">
                                    <h3>유칼립투스 쉽게 키우기~!</h3>
                                    <p>유칼립투스는 물과 해를 좋아하기 때문에 아침 저녁으로 물을 ...</p>
                                    <span className="d-block position">2024-08-18</span>
                                    <img src={main.slide_01} alt="오늘의 식물 1위" />
                                    <p className="mb-0">
                                        <a href="/" className="more dark">자세히보기 <span className="bi bi-arrow-right-short"></span></a>
                                    </p>
                                </div>
                            </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                            <a href="/" className="slide_link">
                                <div className="today">
                                    <h3>유칼립투스 쉽게 키우기~!</h3>
                                    <p>유칼립투스는 물과 해를 좋아하기 때문에 아침 저녁으로 물을 ...</p>
                                    <span className="d-block position">2024-08-18</span>
                                    <img src={main.slide_01} alt="오늘의 식물 1위" />
                                    <p className="mb-0">
                                        <a href="/" className="more dark">자세히보기 <span className="bi bi-arrow-right-short"></span></a>
                                    </p>
                                </div>
                            </a>
                            </div>
                        </SwiperSlide>                  
                    </Swiper>
                </div>
            </section>

            {/* 식물무료나눔 section */}
            <section id="free" className="free section">
                <div className="container section-title" data-aos="fade-up">
                    <h1>식물 무료 나눔</h1>
                </div>
                <div className="container" data-aos="fade-up">
                <div className="swiper-wrapper">
                <Swiper className='swiper init-swiper'                  
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    loop={false} // 무한 루프 활성화
                    autoplay={{
                        delay: 500,
                        pauseOnMouseEnter: false, // added
                        disableOnInteraction: false,
                    }}
                    speed={3000} //add
                    spaceBetween={30}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // 스마트폰 화면 크기
                        320: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        },
                        // 태블릿 화면 크기
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        },
                        // 데스크톱 화면 크기
                        1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        },
                    }}
                    >
                    <SwiperSlide>
                        <div className="swiper-slide">
                        <a href="#/" className="slide_link">
                            <div className="swiper-slide">
                                <div className="free_box mx-auto">
                                    <h6>이사/환경</h6>
                                    <h3 className="name">유칼립투스 무료 나눔</h3>
                                    <p>햇빛이 안드는 집으로 이사해서 근처 사시는 분께 유칼랍투스 무료로 나눔해드립니다...</p>                                        
                                </div>
                                <a href="/" className="free_more">보러가기</a>
                            </div>
                        </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                        <a href="#/" className="slide_link">
                            <div className="swiper-slide">
                                <div className="free_box mx-auto">
                                    <h6>이사/환경</h6>
                                    <h3 className="name">유칼립투스 무료 나눔</h3>
                                    <p>햇빛이 안드는 집으로 이사해서 근처 사시는 분께 유칼랍투스 무료로 나눔해드립니다...</p>                                        
                                </div>
                                <a href="/" className="free_more">보러가기</a>
                            </div>
                        </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                        <a href="#/" className="slide_link">
                            <div className="swiper-slide">
                                <div className="free_box mx-auto">
                                    <h6>이사/환경</h6>
                                    <h3 className="name">유칼립투스 무료 나눔</h3>
                                    <p>햇빛이 안드는 집으로 이사해서 근처 사시는 분께 유칼랍투스 무료로 나눔해드립니다...</p>                                        
                                </div>
                                <a href="/" className="free_more">보러가기</a>
                            </div>
                        </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                        <a href="#/" className="slide_link">
                            <div className="swiper-slide">
                                <div className="free_box mx-auto">
                                    <h6>이사/환경</h6>
                                    <h3 className="name">유칼립투스 무료 나눔</h3>
                                    <p>햇빛이 안드는 집으로 이사해서 근처 사시는 분께 유칼랍투스 무료로 나눔해드립니다...</p>                                        
                                </div>
                                <a href="/" className="free_more">보러가기</a>
                            </div>
                        </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                        <a href="#/" className="slide_link">
                            <div className="swiper-slide">
                                <div className="free_box mx-auto">
                                    <h6>이사/환경</h6>
                                    <h3 className="name">유칼립투스 무료 나눔</h3>
                                    <p>햇빛이 안드는 집으로 이사해서 근처 사시는 분께 유칼랍투스 무료로 나눔해드립니다...</p>                                        
                                </div>
                                <a href="/" className="free_more">보러가기</a>
                            </div>
                        </a>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                    </div>                    
                </div>
            </section>
            
            {/* 가입 Section */}
            <section id="join" className="join section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 ">
                            <h1>지금 회원 가입을 하면 Plantler만의<br />다양한 서비스를 경험할 수 있어요!</h1>
                            <p>사랑스러운 나의 식물을 위한 식집사가 되어주세요 :)</p>
                            <ul className="hashtag">
                                <li><a href="/">#식집사</a></li>
                                <li><a href="/">#반려식물</a></li>
                                <li><a href="/">#화분키우기</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <img src={main.join_point} alt="join_point" className="join_point" />
                        </div>                    
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;

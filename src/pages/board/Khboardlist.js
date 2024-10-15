import React, { useEffect, useState } from 'react';
import '../../assets/css/khboard.css';
import khboard from '../../assets/img/khboard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Khboardlist() {
    const navigate = useNavigate();

    const [list, setList] = useState([]);
    const [ranks, setRanks] = useState([]);
    const {file_no} = useParams();

    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACK_HOST_URL + "/khboardlist")
            .then(res=> {
                console.log("res: {}", res);
                if(res.data.state) {
                    //setList(res.data.result);
                    const { ranks: rankData, list: listData } = res.data.result;
                    // setRanks(rankData || []);
                    setRanks(res.data.result.ranks);
                    setList(listData || []);
                } else {
                    alert("게시글을 불러오는 데 실패하였습니다.");
                }
            });
    },[]);
    
   
    const getImgUrl = file_no => {
        return process.env.REACT_APP_BACK_HOST_URL + '/view?file_no=' + file_no;
    }
    console.log("file_no: {}", file_no);
    console.log("getImgUrl: {}", getImgUrl);
    //     //게시판 상단 랭킹 슬라이드
    //     axios.get(process.env.REACT_APP_BACK_HOST_URL + "/khboardlist")
    //         .then(res => {
    //             console.log(res);
    //             if (res.data.state) {
    //                 setRanks(res.data.result);
    //             } else {
    //                 alert("랭킹을 불러오는 데 실패하였습니다.");
    //             }
    //         })
    //         .catch(err => {
    //             console.error("Error fetching ranks: {}", err);
    //         })
    // }, []);



    // const Khboardranks = () => {
    //     const [ranks, setRanks] = useState(null);

    //     useEffect(() => {
    //         axios.get('/khboardlist')
    //             .then(response => {
    //                 setRanks(response.data.result);
    //             })
    //             .catch(error => {
    //                 console.log("Error fetching board ranks data: {}", error);
    //             });
    //     }, []);


    // }


    return (
        <main>
            <section className="section box-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1 className="sub_title">식물 키우기 노하우</h1>
                    
                            <div className="site-section slider-rank-wrap">
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
                                    {ranks.map((board, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="swiper-slide">
                                                <a href={`/khboarddetail/${board.board_no}`} className="slide_link">
                                                    <div className="box">
                                                        <img className="plantimg" 
                                                             src={board?.file_no == 0 ? getImgUrl(board.file_no == 1) : getImgUrl(board?.file_no)} 
                                                             alt={`ranks${index + 1}`}/>
                                                        <span className="plantrank">{index + 1}위</span>
                                                        <div>
                                                            <div>
                                                                <p className="plantname">{board.board_title}</p>
                                                            </div>
                                                            <div>
                                                                <p className="plantdetail">{board.board_content.substring(0, 50)}...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div> 		
            </section>   
        
            <section className="section khsection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <a href="/khboardregister" className="list_btn">등록</a>
                            <div className="search">
                                <form>
                                    <input type="text" name="search" className="search_input" />
                                    <input type="submit" value="조회" className="search_btn" />
                                </form>
                            </div>
                            
                            <ul className="filter_list">
                                <li><a href="#" className="active">전체</a></li>
                                <li><a href="#">꽃</a></li>
                                <li><a href="#">열매</a></li>
                                <li><a href="#">실내</a></li>
                                <li><a href="#">실외</a></li>
                                <li><a href="#">공기정화</a></li>
                                <li><a href="#">기타</a></li>
                            </ul>
                            
                            <table className="sub_table knowhow">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>좋아요</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((v, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{v.board_no}</td>
                                                <td onClick={() => {
                                                    navigate(`/khboarddetail/${v.board_no}`);
                                                }} style={{cursor: 'pointer'}}><span className="filter">[{v.category_name}]</span> {v.board_title.substring(0, 70)}</td>                                                    
                                                <td>{v.user_nick}</td>
                                                <td>{v.board_regdate2}</td>
                                                <td>{v.board_like}</td>
                                                <td>{v.board_count}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            {/* HTML로 pagination */}
                            <ul className="pagination">
                                <li><a href="#"><i className="bi bi-chevron-left"></i></a></li>
                                <li><a href="#" className="active">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#"><i className="bi bi-chevron-right"></i></a></li>
                            </ul>
                        </div>	
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Khboardlist;
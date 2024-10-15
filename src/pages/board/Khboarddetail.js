import { useEffect, useState } from 'react';
import '../../assets/css/khboard.css';
import khboard from '../../assets/img/khboard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import main from '../../assets/img/main';
// 여기서 부터 import 하면서 하기(Khboardlist랑 비교해보기)

function Khboarddetail() {

     // // 기존에 내가 했던 코드
    // const {board_no} = useParams();
    // console.log("board_no" + board_no);
    // const [detail, setDetail] = useState({}); // 빈값?? 아니면 {}??
    // useEffect(()=> {
    //     axios.get(`${process.env.REACT_APP_BACK_HOST_URL}/khboarddetail?board_no=${board_no}`)
    //     .then(res =>{
    //            // console.log(res);
    //             }
    //         })
    // },[board_no]);
    
    // 윤은씨 및 강사님이 확인해주신 코드(10월10일)
    const {board_no} = useParams();
    const [khBoardDetail, setKhBoardDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BACK_HOST_URL}/khboarddetail/${board_no}`)
            .then(res=> {
                if(res.data.state) {
                    console.log(res);
                    setKhBoardDetail(res.data.result);
                    console.log("response.data.state" + " ( " + res.data.state + " ) ");
                } else {
                    console.log("실패" + res.data.result);
                    setError(res.data.result);
                }
            })
            .catch(error => {
                console.log("에러" + error);
            })
            .finally(()=>{

            });

        // const fetchKhBoardDetail = async () => {
        //     try {
        //         const response = await axios.get(`${process.env.REACT_APP_BACK_HOST_URL}/khc/${board_no}`);
        //         if(response.data.state) {
        //             setKhBoardDetail("응답" + response.data.result);
        //             console.log("response.data.state" + " ( " + response.data.state + " ) ");
        //         } else {
        //             console.log("실패" + response.data.result);
        //             setError(response.data.result);
        //         }
        //     } catch (err) {
        //         console.log("에러" + err);
        //         setError("게시글을 불러오는 데 실패하였습니다. 😥");
        //     } finally {
        //         setLoading(false);
        //     }
        // };
        // fetchKhBoardDetail();
    }, [board_no]);
    
    // if (loading) return <div> 로딩 중... </div>;
    if (error) return <div> {error} </div>;
    const getImgUrl = file_no => {
        return process.env.REACT_APP_BACK_HOST_URL + '/view?file_no=' + file_no;
    }
    
   

    return (
        <main>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h1 className="sub_title">식물 키우기 노하우</h1>
                            <table className="detail_table">
                                <thead>
                                    <tr>
                                    <td>
                                        <span>[{khBoardDetail?.category_name}]</span><span> {khBoardDetail?.board_title}</span> 
                                        <p>{khBoardDetail?.user_name} | {khBoardDetail?.board_regdate}</p>
                                        <p className="f_right">조회 {khBoardDetail?.board_count} | 댓글 22 | 좋아요 {khBoardDetail?.board_like}</p>                      
                                    </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>
                                        {khBoardDetail?.board_content}
                                        <p><img src={khBoardDetail?.file_no == 0 ? main.main_bg : getImgUrl(khBoardDetail?.file_no)} alt='img_01' /></p>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ol-sm-12">
                        <div className="detail_comment">댓글 3</div>
                        <div className="detail_like"><img src={khboard.main.img_02}  alt='img_02'/> 좋아요 10</div>
                    </div>
                    <div className="col-md-12 ol-sm-12">
                       {/* 댓글 창 */}
                        <div className="reply_box">
                        <ul>
                            <li className="bold_text">알로카시아 <img src={khboard.main.img_05} alt='img_05' className="more_btn" /></li>
                            <li>감사합니다 ㅎㅎ</li>
                            <li><span className="detail_reg">2024-08-21</span> <span className="detail_reply">답글쓰기</span> <img src={khboard.main.img_02} alt='img_02' /></li>
                        </ul>

                        <ul>
                            <li className="bold_text">박알로카시아 <img src={khboard.main.img_05} alt='img_05' className="more_btn" /></li>
                            <li>꿀팁!</li>
                            <li><span className="detail_reg">2024-08-21</span> <span className="detail_reply">답글쓰기</span> <img src={khboard.main.img_02} alt='img_02' /></li>
                        </ul>

                        <ul>
                            <li className="bold_text"><img src={khboard.main.img_04} alt='img_04' /> 김알로카시아 <img src={khboard.main.img_05} alt='img_05' className="more_btn" /></li>
                            <li>오 꿀 팁 감삼돠~~!</li>
                            <li><span className="detail_reg">2024-08-21</span> <span className="detail_reply">답글쓰기</span> <img src={khboard.main.img_03} alt='img_03' />1</li>
                        </ul>
                        </div>
                        <div className="comment_writer">
                            <div className="comment_inbox_name">장미허브사랑</div>
                            <textarea className="comment_inbox_text" placeholder="댓글을 남겨보세요." rows="2"></textarea>
                            <button>등록</button>
                        </div>
                        <div className="text-center mt-5">
                            <button type="button" className="btn_primary">수정</button>
                            <button type="button" className="btn_primary btn_delete">삭제</button>
                            <a href="/khboardlist" className="btn_primary btn_cancle">목록</a>
                        </div>

                    </div>
                </div>
                </div>
            

            </section>    
        </main>
    );
}

export default Khboarddetail;
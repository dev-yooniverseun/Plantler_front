import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../assets/css/alarm.css';


const modal_header = {
    borderBottom: '3px solid #05725A',
    marginBottom: '30px'
}
const modal_dialog = {
	maxWidth: '690px !important'
}
const modal_content = {
    width: '690px',
    maxWidth: '100%',
    padding: '50px',
    borderRadius: '30px',
	backgroundColor: 'white',
	boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)',
	left: '50%',
    transform: 'translate(-50%, 50px)'
}
const modal_body = {
    padding: '0 20px 30px'
}
const modal_title = {
    fontSize: '32px !important',
    fontWeight: '500 !important'
}
const modal_footer = {
    borderTop: '1px solid #a5a5a5'	
}
const modal_h3 = {
    fontSize: '18px',
    fontWeight: '500',
    color: '#333'
}
const modal_select = {
	webkitAppearance: 'none',
    mozAppearance: 'none',
    appearance: 'none',
    background:"url('../../assets/img/alarm/sel_arrow.png') no-repeat 80% 50%/9px auto",
    border: '1px solid #a5a5a5',
    borderradius: '10px',    
    padding: '10px 40px 10px 20px',
	margin: '0 5px'
}
const modal_input = {
	border: '1px solid #a5a5a5',
    borderRadius: '10px',
    padding: '10px 20px',
	margin: '0 5px'
}
const modal_textarea = {
    border: '1px solid #a5a5a5',
    borderRadius: '10px',
    padding: '10px 20px'
}


function Alarmlist() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const showModal = () => {
		setModalIsOpen(!modalIsOpen);
	};

	return (
		<>
			<section class="section alarm">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<h1 class="sub_title">물주기 알림</h1>
							<p>※ 식물은 총 5개까지 등록할 수 있습니다.</p>						
							<button type="button" class="list_btn" onClick={showModal}>등록</button>
							
							<table class="sub_table alarm">
								<colgroup>
									<col width="20%" />
									<col width="30%" />
									<col width="30%" />
									<col width="20%" />
								</colgroup>
								<tbody>
									<tr>
										<td><h1>장미허브</h1></td>
										<td>
											<h6>최근 물 준 시간</h6>										
											<p>2024-08-22 오전 7:00</p>
										</td>
										<td>
											<h6>물주기 알림 예정</h6>
											<p>2024-08-30 오전 7:00</p>
										</td>
										<td><button type="button" class="btn_more" onClick={showModal}>알림 상세 보기</button></td>
									</tr>
									<tr>
										<td><h1>프리지아</h1></td>
										<td>
											<h6>최근 물 준 시간</h6>										
											<p>2024-08-22 오전 7:00</p>
										</td>
										<td>
											<h6>물주기 알림 예정</h6>
											<p>2024-08-30 오전 7:00</p>
										</td>
										<td><button href="" class="btn_more" onClick={showModal}>알림 상세 보기</button></td>
									</tr>
									<tr>
										<td><h1>행운목</h1></td>
										<td>
											<h6>최근 물 준 시간</h6>										
											<p>2024-08-22 오전 7:00</p>
										</td>
										<td>
											<h6>물주기 알림 예정</h6>
											<p>2024-08-30 오전 7:00</p>
										</td>
										<td><button href="" class="btn_more" onClick={showModal}>알림 상세 보기</button></td>
									</tr>
									<tr>
										<td><h1>스투키</h1></td>
										<td>
											<h6>최근 물 준 시간</h6>										
											<p>2024-08-22 오전 7:00</p>
										</td>
										<td>
											<h6>물주기 알림 예정</h6>
											<p>2024-08-30 오전 7:00</p>
										</td>
										<td><button href="" class="btn_more" onClick={showModal}>알림 상세 보기</button></td>
									</tr>
									<tr>
										<td><h1>애플민트</h1></td>
										<td>
											<h6>최근 물 준 시간</h6>										
											<p>2024-08-22 오전 7:00</p>
										</td>
										<td>
											<h6>물주기 알림 예정</h6>
											<p>2024-08-30 오전 7:00</p>
										</td>
										<td><button href="" class="btn_more" onClick={showModal}>알림 상세 보기</button></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>					
			
			{
				modalIsOpen ? (
					<Modal
						isOpen={true}
						ariaHideApp={false}
						onRequestClose={() => setModalIsOpen(false)}						
						className="w-[50%] h-[58vh] mt-[10%] m-auto bg-bgColor text-lg rounded-[10px] drop-shadow-lg"						
					>
						<div id="alarm_add">
							<div className="modal-dialog" style={modal_dialog}>
								<div className="modal-content" style={modal_content}>
									<div className="modal-header" style={modal_header}>
										<h1 className="modal-title fs-5" id="alarm_add_Label" style={modal_title}>물주기 알림</h1>
										<button type="button" className="btn-close" onClick={ () => setModalIsOpen(false) }></button>
									</div>
									<div className="modal-body" style={modal_body}>
										<h3 style={modal_h3}>알림시간</h3>
										<input type="date" value="" id="date" style={modal_input} />
										<select name="time_ampm" id="ampm" style={modal_select}>
											<option>오전</option>
											<option>오후</option>
										</select>
										<select name="time_hh" id="hh" style={modal_select}>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
										<select name="time_mm" id="mm" style={modal_select}>
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="modal-body" style={modal_body}>							
										<h3 style={modal_h3}>식물이름</h3>
										<input type="text" id="plant_name" className="w_100" placeholder="식물 이름을 입력해주세요." style={modal_input} />							
									</div>
									<div className="modal-body" style={modal_body}>
										<h3 style={modal_h3}>메모</h3>
										<textarea type="text" id="plant_name" className="w_100" rows="5" placeholder="메모를 입력해주세요." style={modal_textarea}></textarea>
									</div>
									<div className="modal-footer" style={modal_footer}>
										<div className="mg_auto">
											<button type="button" className="btn_primary btn_cancle" onClick={ () => setModalIsOpen(false) }>취소</button>
											<button type="button" className="btn_primary btn_add">알림 등록</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				) : null
			}
			
		</>
    );

}

export default Alarmlist;

import '../../assets/css/mine.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const PlantDetail = () => {
	const [plDetail, setPlDetail] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(()=>{
		const fetchPlantDetail = async () => {
			const urlParams = new URLSearchParams(window.location.search);
			const plantId = urlParams.get('id');
			try {
				const response = await axios.get(`http://localhost:8080/api/plantDetail?id=${plantId}`);
				console.log(response.data);
				setPlDetail(response.data);
			} catch(error){
				console.error("Error fetching plants:", error);
			} finally {
				setLoading(false); // 항상 로딩 상태 업데이트
			}
		};

		fetchPlantDetail();
	},[]);

	if(loading){
		return (
			<div>
				Loading...
			</div>
		);
	}

	if (!plDetail) {
		return <div>식물 정보가 없습니다.</div>; // 데이터가 없을 때
	}
	const imgSrc = plDetail.plantImage || '/assets/img/default.png'; // 이미지 경로 확인

    return(
        <>
        <section className="section">
       		<div className="container">
            	<div className="row">
                	<div className="col-md-12 col-sm-12">
						<h1 className="sub_title">나만의 식물 찾기</h1>
						
						<h4 className="text-center">식과 사전</h4>
						
						<div className="mine-container3">
							<div className="mine3">
		        				<img src={imgSrc} alt={plDetail.plantTitle} />
		        				<p className="text-center" style={{fontsize: '200%'}}>{plDetail.plantTitle}</p>        
		    				</div>
						<div className="options3">
		        			<ul> 
								<button className="btn btn-secondary" style={{width: '160px', marginBottom: '10px', marginLeft : '10px'}}>#{plDetail.keyword1}</button>
								<button className="btn btn-secondary" style={{width: '160px', marginBottom: '10px', marginLeft : '10px'}}>#{plDetail.keyword2}</button>
								<button className="btn btn-secondary" style={{width: '160px', marginBottom: '10px', marginLeft : '10px'}}>#{plDetail.keyword3}</button>
							</ul>
		    				<div> 
								<h6>{plDetail.plantContent}</h6>
							</div>
							<div className='khdetail-container'>
			        			<div className="khdetail">
									<h6>{plDetail.knowhow1}</h6>
		            			</div>
								<div className="khdetail">
									<h6>{plDetail.knowhow2}</h6>
		            			</div>
							</div>
						</div>
            		</div>
		        	<div style={{textAlign: 'center'}}>
		            	<div className="selecbtn" onClick={() => navigate(-1)}>뒤로 돌아가기</div>
		        	</div>
				</div>
        	</div>
		</div>
    	</section>
        </>
    );
}

export default PlantDetail;
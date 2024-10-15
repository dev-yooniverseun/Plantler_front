import '../../assets/css/mine.css';
import { useState, useEffect } from "react";
import axios from 'axios';


const PlantRecomend = () =>{
	const [plants, setPlants] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(()=>{
		const fetchPlants = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/plantRec');
				console.log(response.data);
				setPlants(response.data.slice(0,5)); // slice(0,5) 최대 5개 데이터 저장
			} catch(error){
				console.error("Error fetching plants:", error);
			} finally {
				setLoading(false); // 항상 로딩 상태 업데이트
			}
		};

		fetchPlants();
	},[]);

	if(loading){
		return (
			<div>
				Loading...
			</div>
		);
	}

	if (!plants || plants.length === 0) {
		return <div>식물 정보가 없습니다.</div>; // 데이터가 없을 때
	}
	
	const plantRecList = plants.map((plant,index) => { 
		const imgSrc = plant.plantImage || '/assets/img/default.png'; // 이미지 경로 확인
		return(
			<div className="mine2" key={plant.plantNo}>
		            	<a href={`/plantDetail?id=${plant.plantNo}`}>
		                	<img src={imgSrc} alt={plant.plantTitle} />
		                </a>
		                <p className="text-center">{plant.plantTitle}</p>
		                <div className="options">
		                    <button className="btn btn-secondary" style={{width: '200px', marginBottom: '10px'}}>{plant.keyword1}</button>
		                    <button className="btn btn-secondary" style={{width: '200px', marginBottom: '10px'}}>{plant.keyword2}</button>
		                    <button className="btn btn-secondary" style={{width: '200px', marginBottom: '10px'}}>{plant.keyword3}</button>
		                </div>
		    </div>
		);
	})
    return(
    <>
    <section className="section">
       		<div className="container">
            	<div className="row">
                	<div className="col-md-12 col-sm-12">
						<h1 className="sub_title">나만의 식물 찾기</h1>
					
						<h4 className="text-center">당신의 선택에 추천드리는 식물은</h4>
						<div className="mine-container2">
						{plantRecList}
					</div>       
                </div>
            </div>
        </div>
        <div style={{textAlign: 'center'}}>
        <a href="/plantMine" className="selecbtn">다시 선택</a>
        <a href="/plantTagSearch" style={{marginLeft: '40px'}} className="selecbtn">여기는 제가 원하는 식물이 없어요!</a>
        </div>
    	</section>
    </>
    );
}

export default PlantRecomend;
import '../../assets/css/mine.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import Modal from 'react-modal';
import mine from '../../assets/img/mine';

const PlantTagSearch = () => {
	const [plantTag, setPlantTag] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedKeywords, setSelectedKeywords] = useState([]);
	const [keywords, setKeywords] = useState([]);

	const imgSrc = plantTag.plantImage || '/assets/img/default.png'; // 이미지 경로 확인

	useEffect(()=>{
		const fetchPlants = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/plantTag');
				console.log(response.data);
				setPlantTag(response.data);
			} catch(error){
				console.error("Error fetching plants:", error);
			} finally {
				setLoading(false); // 항상 로딩 상태 업데이트
			}
		};

		const fetchKeywords = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/plantKeyword'); // 키워드 API 호출
				console.log(response.data);
				setKeywords(response.data); // 키워드 상태 업데이트
			} catch (error) {
				console.error("Error fetching keywords:", error);
			}
		};

		fetchPlants();
		fetchKeywords();
	},[]);

	if(loading){
		return (
			<div>
				Loading...
			</div>
		);
	}

	if (!plantTag || plantTag.length === 0) {
		return <div>식물 정보가 없습니다.</div>; // 데이터가 없을 때
	}

	const lastPlant = plantTag[plantTag.length - 1]; // 마지막 식물 정보
	const plantList = plantTag.map((plant, index)=>{
		return(
			<>
			<div className="mine4" key={index}>
			    <a href={`/plantDetail?id=${plant.plantNo}`}>
			        <img src={imgSrc} alt={plant.plantTitle} />
			    </a>
			    <p className="text-center">{plant.plantTitle}</p>
			</div>
			</>
		);
	})

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const handleKeywordSelect = (keyword) => {
		setSelectedKeywords((prev) => {
			if (prev.includes(keyword)) {
				return prev.filter((kw) => kw !== keyword); // 이미 선택된 키워드라면 제거
			} else {
				return [...prev, keyword];
			}
		});
	};

    return(
        <>
        <section className="section">
       		<div className="container">
            	<div className="row">
                	<div className="col-md-12 col-sm-12">
						<h1 className="sub_title">나만의 식물 찾기</h1>
					
						<h4 className="text-center">식물을 잘 모를때에는</h4>
						<div className="minetag">
							<a href="#" onClick={openModal}>
								<img src={mine.filter} alt ={mine.filter} style={{marginBottom : '10px'}}/>
							</a>
							{selectedKeywords.length > 0 ? (
								selectedKeywords.map((keyword, index) => (
									<button key={index} className="btn btn-secondary" style={{ width: '200px', marginBottom: '10px' }}>#{keyword}</button>
								))
							) : null }
							<div>
								<h5>선택한 필터 - 식물 {lastPlant.plantNo}종</h5>
							</div>
							<div className="mine-container4">
								{plantList}
			            	</div>
	                	</div>
	            	</div>
	        	</div>
			</div>
	    </section>
        
		<Modal 
			isOpen={modalIsOpen} 
			onRequestClose={closeModal}
			contentLabel="키워드 선택"
			style={{
				content: {
					maxWidth: '700px', // 원하는 최대 너비로 조정
					margin: 'auto', // 모달을 중앙에 배치
				},
			}}
		>
			<h2 style={{textAlign:'center'}}>키워드 선택</h2>
			<div style={{ textAlign: 'right', marginBottom: '10px' }}>
                <button onClick={closeModal} >닫기</button>
			</div>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
				{keywords.map((keyword) => (
                        <div key={keyword.keywordNo} style={{ flex: '0 0 calc(33% - 10px)' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedKeywords.includes(keyword.keywordName)}
                                    onChange={() => handleKeywordSelect(keyword.keywordName)}
                                />
                                {keyword.keywordName}
                            </label>
                    	</div>
                	))}
            </div>
		</Modal>
        </>
    );
}

export default PlantTagSearch;
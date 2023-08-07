import style from './Banner.module.css';
export default function Banner() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/title_image1.jpg" className="d-block w-100" alt="타이틀 이미지1"/>
                </div>
                <div className="carousel-item">
                    <img src="img/title_image2.jpg" className="d-block w-100" alt="타이틀 이미지2"/>
                </div>
                <div className="carousel-item">
                    <img src="img/title_image3.jpg" className="d-block w-100" alt="타이틀 이미지3"/>
                </div>
                <div className="carousel-item">
                    <img src="img/title_image4.jpg" className="d-block w-100" alt="타이틀 이미지4"/>
                </div>
                <div className="carousel-item">
                    <img src="img/title_image5.jpg" className="d-block w-100" alt="타이틀 이미지5"/>
                </div>
                <div className="carousel-item">
                    <img src="img/title_image6.jpg" className="d-block w-100" alt="타이틀 이미지6"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
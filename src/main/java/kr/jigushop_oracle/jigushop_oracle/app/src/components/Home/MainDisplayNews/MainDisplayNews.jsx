import style from './MainDisplayNews.module.css';
export default function MainDisplayNews() {
    return (
        <div className="content2 mt-md-5 mt-lg-5 py-3 py-sm-5 py-md-5 py-lg-5">
            <div className="container">
                <div className="row">
                    <div className="content2_left col-xs-12 col-sm-12 col-md-6 col-lg-6" onClick={() => window.location.href = 'https://www.youtube.com/watch?v=6twLgvNypZs'} style={{ cursor: 'pointer' }}>
                        <img className="float-start w-100 mb-sm-4 mb-md-0 mb-lg-0"
                            src="./img/cardnews1.jpg"
                        />
                    </div>
                    {/* content2_left */}
                    <div className="content2_right col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="content2_right_up col-12 mt-4 mt-sm-0 mt-md-0 mt-lg-0" onClick={() => window.location.href = 'https://www.instagram.com/p/CO2NyoapBRY/'} style={{ cursor: 'pointer' }}>
                            <img className="w-100" src="./img/cardnews2.png" />
                        </div>
                        {/* content2_right_up */}
                        <div className="content2_right_down col-12 mt-4" onClick={() => window.location.href = 'https://www.jigushop.co.kr/use-less/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=8011808&t=board'} style={{ cursor: 'pointer' }}>
                            <img className="w-100" src="./img/cardnews3.jpg" />
                        </div>
                        {/* content2_right_down */}
                    </div>
                    {/* content2_right */}
                </div>
                {/* row */}
            </div>
            {/* container */}
        </div>
    );
}

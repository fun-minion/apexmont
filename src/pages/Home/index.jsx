import './index.css';

import video from '../../assets/background.mp4';

const Home = () => {
    return (
        <div className='home'>
            <video
                autoPlay={true}
                muted
                loop
                playsInline
                className="fullscreen-video"
                data-object-fit="cover"
            >
                <source
                    src={video}
                    type="video/mp4"
                />
            </video>
            <div className="header-intro-details">
                <h1>Turning Market Complexity into Strategic Opportunity</h1>
                <p>since 2020.</p>
                <a href='/strategies'>Learn More</a>
            </div>
        </div>
    )
}

export default Home;
import './index.css';

const Team = () => {
    const people = [
        {
            img_url: '/team/dino-removed.png',
            location: 'Halifax',
            name: 'Dino Mariutti',
            title: ['Partner', 'Board Member Executive Chairman'],
            description: 'Dino Mariutti is the Founder and Executive Chairman of Apexmont Inc., a position he has held since founding the company in 2020. With a background in engineering and a Global MBA from University College London, Dino also holds a CPD Accredited certificate in Algorithmic Trading from Oxford’s Saïd Business School. His expertise lies in applying cutting-edge trading strategies to dynamic market environments, with a focus on driving risk-adjusted returns and capturing alpha.',
        },
        {
            img_url: '/team/thomas-removed.png',
            location: 'Halifax',
            name: 'Dr. Thomas Larder',
            title: ['Partner', 'Board Member'],
            description: 'Dr. Thomas Larder is an Advisor, Board Member and shareholder of Apexmont Inc. since 2020. Tom has a background in healthcare (Tufts University/Boston), relationship building and financial services (Investment/Insurance). He has a reputation of fairness, transparency, and accountability that fellow business people and directors have all come to admire. His main areas of interest are strategic planning, high level oversight, privacy issues and innovation.',
        },
    ]

    return (
        <div className='team'>
            <div className="team-board">
                <div className="block-title">
                    Meet the Team
                </div>
                <div>
                    {
                        people.map((person, index) => {
                            return (
                                <div key={index} className='single-member'>
                                    <img src={person.img_url} />
                                    <h1>{person.location}</h1>
                                    <h2>{person.name}</h2>
                                    {
                                        person.title.map((title, index) => {
                                            return <h3 key={index}>{title}</h3>
                                        })
                                    }
                                    <h4>{person.description}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Team;
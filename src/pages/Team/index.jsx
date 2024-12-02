import './index.css';

const Team = () => {
    const people = [
        {
            img_url: 'https://yorkcapital.com/wp-content/uploads/2019/12/York30253_Zalman_Jacobs-786x786.png',
            location: 'New York',
            name: 'Zalmie Jacobs',
            title: ['Partner', 'Head of Private Equity'],
        },
        {
            img_url: 'https://yorkcapital.com/wp-content/uploads/2020/11/Harish-786x786.png',
            location: 'New York',
            name: 'Harish Nataraj',
            title: ['Managing Director', 'Private Equity'],
        },
        {
            img_url: 'https://yorkcapital.com/wp-content/uploads/2021/09/Pearson_Seth-786x786.png',
            location: 'New York',
            name: 'Seth Pearson',
            title: ['Managing Director', 'Private Equity'],
        },
        {
            img_url: 'https://yorkcapital.com/wp-content/uploads/2020/01/Shapiro_Robbie_Color-1-786x786.png',
            location: 'New York',
            name: 'Robbie Shapiro',
            title: ['Partner', 'Head of Private Equity'],
        },
        {
            img_url: 'https://yorkcapital.com/wp-content/uploads/2020/01/lyle-786x884.png',
            location: 'New York',
            name: 'Lyle Berstein',
            title: ['Principal', 'Head of Private Equity'],
        },
        {
            img_url: 'https://yorkcapital.com/wp-content/uploads/2020/01/NgoRodman_Color-1-786x786.png',
            location: 'New York',
            name: 'Rodman Ngo',
            title: ['Principal', 'Head of Private Equity'],
        },
        {
            img_url: 'https://yorkcapital.com/wp-content/uploads/2020/05/Robert_Lo_Col-786x786.png',
            location: 'New York',
            name: 'Tom Mara',
            title: ['Senior Advisor', 'Private Equity', 'Member of the Investment'],
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
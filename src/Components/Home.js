import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            {/*<h1>Home components</h1>*/}
            <Banner />
            <div className="home_section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                    title="Des logements uniques"
                    description="Bien plus que de simples logements pour passer la nuit."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=320"
                    title="Expérience en ligne"
                    description="Des logements entiers confortables, avec de la place pour acueillir les amis ou la famille."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
                    title="Logements entier"
                    description="Des logements entiers confortables, avec de la place pour acueillir les amis ou la famille."
                />
            </div>
            <div className="home_section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-43516799/original/52cf9346-ab3c-4a7f-9f91-c8e62ae9b24f.jpeg?im_w=960"
                    title="3 Bedrom Flat in Guadeloupe"
                    description="Bien plus que de simples logements pour passer la nuit."
                    price="80€/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/6b510592-2a8f-4301-835b-e8fffafc627b.jpg?im_w=960"
                    title="Penthouse in London"
                    description="Des logements entiers en huttes, pour passer des moments de repos exceptionnel."
                    price="200€/night"
                />
                                <Card 
                        src="https://a0.muscache.com/im/pictures/5fddd4c5-4567-4093-aee7-a1c7f38ca2b1.jpg?im_w=960"
                        title="1 Bedroom apaertment"
                        description="Logement entier dans des micro maison "
                        price="167€/night"
                />
            </div>
        </div>
    )
}

export default Home

/**
 *  <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                    title="Expériences en ligne"
                    description="Des activités uniques à faire ensemble, organisées par des hôtes du monde entier."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                    title="Logements entier"
                    description="Des logements entiers confortables, avec de la place pour acueillir les amis ou la famille."
                />
            </div>
            <div className="home_section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                    title="Unique stays"
                    description="Private cosy traditional log cabin on the lake, surrounded by beautiful countryside. Lovely peaceful get away from it all in an area of natural outstanding beauty"
                />
                <Card 
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                        title="Huttes"
                        description="Des logements entiers en huttes"
                />
                <Card 
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                        title="Micro maison"
                        description="Logement entier dans des micro maison "
                />
 */

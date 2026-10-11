
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main>
            <section className="hero">
                <p className="eyebrow">
                    YOUR FUTURE IN SPORTS STARTS HERE
                </p>

                <h1>Connecting Talent With Opportunity</h1>

                <p>
                    Discover careers in sports and explore college tennis
                    recruitment opportunities in the United States.
                </p>

                <div className="actions">
                    <Link className="primary-link" to="/jobs">
                        Explore Sports Jobs
                    </Link>

                    <Link className="outline-link" to="/college-tennis">
                        College Tennis Recruitment
                    </Link>
                </div>
            </section>

            <section className="services">
                <h2>Our Services</h2>

                <div className="cards">
                    <article className="card">
                        <div className="symbol">🏆</div>
                        <h3>Sports Employment</h3>
                        <p>
                            Find coaching, fitness and sports industry
                            opportunities with clubs and academies.
                        </p>
                        <Link to="/jobs">View Jobs →</Link>
                    </article>

                    <article className="card">
                        <div className="symbol">🎾</div>
                        <h3>College Tennis Recruitment</h3>
                        <p>
                            Explore your pathway to studying and playing
                            college tennis in the United States.
                        </p>
                        <Link to="/college-tennis">Learn More →</Link>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Home

import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function Glance() {
    return ( 
        <React.Fragment>
            <NavBar />
        <section className="about bg-light">
            <div className="container">
                <div>
                <h1 className="md text-center">Our organization</h1>
                <p><strong>Hepto</strong> was established on 18th May 2018.</p>
                <p>
                    We operate in the horn of Africa in these countries
                    <strong>Kenya</strong>, <strong>Somalia</strong>, and
                    <strong>Ethiopia.</strong>
                    
                </p>
                <p>Hepto is abbreviated to :
                    <b>Healthcare</b>- <b>Extension</b> - <b>Promotion</b> and <b>Training Organization</b>
                </p>
                </div>
                {/* <!-- <img src="{% static 'main/images/main/about.png' %}" alt="about us" /> --> */}
            </div>
            </section>

            {/* <!-- Misson Visson and Core values --> */}
            <section className="mission mt-3 bg-light">
            <div className="container grid grid-3 bg-light">
                <div className="card-c flex bg-hepto-orange">
                <div>
                    <h2 className="text-center">Our Mission</h2>
                    <p>
                    The Healthcare Extension, Promotion and Training Organization (HEPTO)
                    seeks to unite donors, volunteers, staff, and communities around the
                    goal of advancing universal access to modern medicine and modern
                    medical best practices. We do this by establishing permanent
                    infrastructure and continuing medical training and education in
                    impoverished and traditionally underrepresented communities in Africa.
                    </p>
                </div>
                </div>
                <div className="card-c flex bg-hepto-blue">
                <div>
                    <h2 className="text-center">Our Vision</h2>
                    <p>
                    We envision a world in which donors, volunteers, healthcare providers,
                    and patients have overcome all barriers to ensure universal access to
                    modern medicine and modern medical best practices. ​More than just
                    aid, impoverished communities all over the world need empowerment
                    through permanent infrastructure, training and education . With a
                    focus on medicine, HEPTO seeks to partner with nations to grow
                    independently and teach community leaders to provide for themselves.
                    </p>
                </div>
                </div>
                <div className="card-c flex bg-hepto-white">
                <div>
                    <h2 className="text-center">Our Goal</h2>
                    <p>
                    We know that to effect change we must address the cause of the
                    problem, not just the symptoms. That's why HEPTO seeks to offer more
                    than medical aid. We seek to partner with impoverished communities to
                    build permanent infrastructure for long-lasting change.​
                    </p>
                </div>
                </div>
            </div>
            </section>

            <Footer />
        </React.Fragment>
     );
}

export default Glance;
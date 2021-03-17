import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './nursery.component.css';


export const Nursery = () => {
    return (
        <>
            <NavBar isLoggedIn={false} />
            <h2 className="title">Partner Nursery</h2>
            <div className="nurseryimage" style={{
                backgroundImage: 'linear-gradient(140deg, #ffffffe6 50%, transparent 50%),url(../images/nursery.jpg)'
            }}>
                <div className="nurserycard">
                    <h1>Kathmandu Gardening and Plants</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem text-align: justify; text-align: justify; text-align: justify;
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.
                    </p>

                    <p>
                    <i className="fas fa-map-marker-alt"></i> Kathmandu,Nepal<br/><i className="fas fa-mobile-alt"></i> +977-987675642134</p>
                    <Link to="/nursery/nursery1"><button>view Details</button></Link>
                </div>
            </div>
            <div className="nurseryimage" style={{
                backgroundImage: 'linear-gradient(140deg, #ffffffe6 50%, transparent 50%),url(../images/nursery.jpg)'
            }}>
                <div className="nurserycard">
                    <h1>Buddha plants surf</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, unde nemo. 
                        Exercitationem blanditiis doloremque quo obcaecati voluptatem 
                        architecto nihil perferendis, esse facere similique animi voluptate nesciunt repellat eum dolor nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationemExercitationem blanditiis doloremque quo obcaecati voluptatem 
                        architecto nihil perferendis, esse facere similique animi voluptate nesciunt repellat eum dolor nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.
                    </p>
                    <p>
                    <i className="fas fa-map-marker-alt"></i> Nepalgunj,Nepal<br /><i className="fas fa-mobile-alt"></i> +977-987675642134</p>
                    <a href="#"><button>view Details</button></a>
                </div>
            </div>
            <div className="nurseryimage" style={{
                backgroundImage: 'linear-gradient(140deg, #ffffffe6 50%, transparent 50%),url(../images/nursery.jpg)'
            }}>
                <div className="nurserycard">
                    <h1>surya Gardening</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, unde nemo. 
                        Exercitationem blanditiis doloremque quo obcaecati voluptatem 
                        architecto nihil perferendis, esse facere similique animi voluptate 
                        nesciunt repellat eum dolor nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.
                    </p>
                    <p><i className="fas fa-map-marker-alt"></i> Biratnagar,Nepal<br /><i className="fas fa-mobile-alt"></i> +977-987675642134</p>
                    <a href="#"><button>view Details</button></a>
                </div>
            </div>
            <Footer />
        </>
    )
}
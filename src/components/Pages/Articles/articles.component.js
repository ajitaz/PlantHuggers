import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './articles.component.css';

export const Articles = () => {
    return (
        <>
            <NavBar isLoggedIn={false} />
            <div className="events">
                <ul>
                    <li>
                        <img src="../images/plant1.jpg" alt="" />
                        <div className="details">
                            <a href="#" className="card-category">Indoor plants</a>
                            <h2>Grow plants in your Backyard</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab, vitae
                            eius corrupti pariatur architecto illo saepe quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab,
                            vitae eius corrupti pariatur architecto illo saepe quae.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, exercitationem quisquam. Ab, vitae eius corrupti pariatur architecto
                            illo saepe quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab, vitae
                            eius corrupti pariatur architecto illo saepe quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab,
                            vitae eius corrupti pariatur architecto illo saepe quae.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, exercitationem quisquam. Ab, vitae eius corrupti pariatur architecto
                            illo saepe quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab, vitae
                            eius corrupti pariatur architecto illo saepe quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab,
                            vitae eius corrupti pariatur architecto illo saepe quae.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, exercitationem quisquam. Ab, vitae eius corrupti pariatur architecto
                            illo saepe quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab, vitae
                            eius corrupti pariatur architecto illo saepe quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab,
                            vitae eius corrupti pariatur architecto illo saepe quae.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, exercitationem quisquam. Ab, vitae eius corrupti pariatur architecto
                            illo saepe quae.
                            </p>
                            <Link to="/indArticle" className="Abtn">view more</Link>
                        </div>
                        <div className="clear"></div>
                    </li>

                    <li>
                        <img src="../images/plant.jpg" alt="" />
                        <div className="details">
                            <a href="#" className="card-category">Indoor plants</a>
                            <h2>Breading plants is possible?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab, vitae
                            eius corrupti pariatur architecto illo saepe quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab,
                            vitae eius corrupti pariatur architecto illo saepe quae.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, exercitationem quisquam. Ab, vitae eius corrupti pariatur architecto
                            illo saepe quae.
                    </p>
                    <Link to="/indArticle" className="Abtn">view more</Link>
                        </div>
                        <div className="clear"></div>
                    </li>

                    <li>
                        <img src="../images/cactus.jpg" alt="" />
                        <div className="details">
                            <a href="#" className="card-category">Indoor plants</a>
                            <h2>How to grow Cactus?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab, vitae
                            eius corrupti pariatur architecto illo saepe quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab,
                            vitae eius corrupti pariatur architecto illo saepe quae.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, exercitationem quisquam. Ab, vitae eius corrupti pariatur architecto
                            illo saepe quae.
                    </p>
                    <Link to="/indArticle" className="Abtn">view more</Link>
                        </div>
                        <div className="clear"></div>
                    </li>
                    <li>
                        <img src="../images/plant.jpg" alt="" />
                        <div className="details">
                            <a href="#" className="card-category">Indoor plants</a>
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab, vitae
                            eius corrupti pariatur architecto illo saepe quae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem quisquam. Ab,
                            vitae eius corrupti pariatur architecto illo saepe quae.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, exercitationem quisquam. Ab, vitae eius corrupti pariatur architecto
                            illo saepe quae.
                    </p>
                    <Link to="/indArticle" className="Abtn">view more</Link>
                        </div>
                        <div className="clear"></div>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    )
}
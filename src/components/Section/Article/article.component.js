import React from 'react';
import './article.component.css';

export const Article = () => {
    return (
        <>
            <div className="small-container">
                <h2 className="title">Articles</h2>
                <div className="article-container">
                    <article className="article-card">
                        <div className="article-image">
                            <img src="../images/cactus.jpg" alt="" />
                        </div>
                        <div className="article-content">
                            <a href="#" className="card-category">Indoor Plants</a>
                            <h3 className="card-title">How to grow Cactus?</h3>
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.</p>
                        </div>
                    </article>
                    <article className="article-card">
                        <div className="article-image">
                            <img src="../images/plant1.jpg" alt="" />
                        </div>
                        <div className="article-content">
                            <a href="#" className="card-category">Indoor Plants</a>
                            <h3 className="card-title">Breading plants is possible?</h3>
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.</p>
                        </div>
                    </article>
                    <article className="article-card">
                        <div className="article-image">
                            <img src="../images/plant2.jpg" alt="" />
                        </div>
                        <div className="article-content">
                            <a href="#" className="card-category">Indoor plants</a>
                            <h3 className="card-title">Money plant ? Benefites</h3>
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem
                        alias eum cum accusamus eligendi soluta maxime, sit odio! Labore.</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
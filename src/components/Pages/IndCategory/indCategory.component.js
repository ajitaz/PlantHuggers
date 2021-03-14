import React from 'react';
import { Footer } from '../../common/footer/footer.component';
import { NavBar } from '../../common/navbar/nav.component';
import './indCategory.component.css';

export const IndCategory = () => {
    return (
        <>
            <NavBar />
            <div className="bgimg-1" style = {{backgroundImage:'url("../images/background.jpg")'}}>
            </div>
            <div className="cont">
                <h3>Indoor Plants</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil, incidunt, placeat minima reprehenderit,
                explicabo fuga temporibus at similique adipisci suscipit veritatis provident! Impedit ad illo laboriosamLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil, incidunt, placeat minima reprehenderit,
                explicabo fuga temporibus at similique adipisci suscipit veritatis provident! Impedit ad illo laboriosam
                itaque fugiat voluptates molestias voluptate quasi, ab dolorum voluptatibus, iure nostrum reprehenderit,
                repellat non explicabo harum maxime minima totam laudantium quas nemo nobis iusto incidunt? Vel accusamusLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil, incidunt, placeat minima reprehenderit,
                explicabo fuga temporibus at similique adipisci suscipit veritatis provident! Impedit ad illo laboriosam
                itaque fugiat voluptates molestias voluptate quasi, ab dolorum voluptatibus, iure nostrum reprehenderit,
                repellat non explicabo harum maxime minima totam laudantium quas nemo nobis iusto incidunt? Vel accusamusLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil, incidunt, placeat minima reprehenderit,
                explicabo fuga temporibus at similique adipisci suscipit veritatis provident! Impedit ad illo laboriosam
                itaque fugiat voluptates molestias voluptate quasi, ab dolorum voluptatibus, iure nostrum reprehenderit,
                repellat non explicabo harum maxime minima totam laudantium quas nemo nobis iusto incidunt? Vel accusamusLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil, incidunt, placeat minima reprehenderit,
                explicabo fuga temporibus at similique adipisci suscipit veritatis provident! Impedit ad illo laboriosam
                itaque fugiat voluptates molestias voluptate quasi, ab dolorum voluptatibus, iure nostrum reprehenderit,
                repellat non explicabo harum maxime minima totam laudantium quas nemo nobis iusto incidunt? Vel accusamus
                itaque fugiat voluptates molestias voluptate quasi, ab dolorum voluptatibus, iure nostrum reprehenderit,
                repellat non explicabo harum maxime minima totam laudantium quas nemo nobis iusto incidunt? Vel accusamus
                ipsum asperiores ipsa unde at, officiis voluptate. Iusto delectus repudiandae qui nihil magni sint saepe
                velit unde, perferendis enim, ex consequuntur ducimus voluptates eum. Quisquam accusamus sapiente eius
            numquam consectetur obcaecati!</p>
            </div>

            <div className="small-container">
                <div className="product-list">
                    <h2>Indoor Plants</h2>
                    <div className="row grid">
                        <div className="col-4">
                            <img src="/images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/plant2.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                    </div>
                    <div className="row grid">
                        <div className="col-4">
                            <img src="/images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/plant2.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/plant1.jpg" alt="" />
                            <h4>Plant Indoor</h4>
                            <p>Rs.1800</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
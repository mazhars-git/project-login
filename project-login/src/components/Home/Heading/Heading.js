import React from 'react';
import '../Css/Heading.css';

const Heading = () => {
    return (
        <section className="col-md-4 bg-primary text-white heading-area">
            <div className="w-75 heading-content">
                <h3>Dummy Heading</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </section>
    );

};

export default Heading;
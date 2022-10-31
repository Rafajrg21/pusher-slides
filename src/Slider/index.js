import React, { useState } from 'react';
import Pusher from 'pusher-js';
import './styles.css';

const Slider = ({ slides }) => {
    const [curr, setCurr] = useState(0);
    const { length } = slides;

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    const pusher = new Pusher(process.env.REACT_APP_PUSHER_SECRET, {
        cluster: 'us2'
    });
    const channel = pusher.subscribe('cache-slides');

    channel.bind('slide', data => {
        setCurr(data.nextSlide)
    });

    function sendNextSlide(nextSlide) {
        fetch('http://localhost:4000/default', {
            method: 'post',
            body: JSON.stringify(nextSlide),
            headers: {
                'content-type': 'application/json',
            },
        });
    }

    const goToPrev = () => {
        const nextSlide = curr === 0 ? length - 1 : curr - 1
        sendNextSlide({ nextSlide })
    }

    const goToNext = () => {
        const nextSlide = curr === length - 1 ? 0 : curr + 1
        sendNextSlide({ nextSlide })
    }

    return (
        <section className="slider">
            <button onClick={goToPrev} className="left-arrow" />
            {slides.map((s, i) => (
                <div
                    className={i === curr ? "slide active" : "slide"}
                    key={s.title}
                    aria-hidden={i !== curr}
                >
                    <div>
                        <h1>{s.title}</h1>
                        <h2>{s.subtitle}</h2>
                    </div>
                    {i === curr && (
                        <img className="image" src={s.image} alt={s.title} />
                    )}
                </div>
            ))}
            <button onClick={goToNext} className="right-arrow" />
        </section>
    );
}

export default Slider;

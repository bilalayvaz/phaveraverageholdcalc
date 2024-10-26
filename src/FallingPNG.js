import React, { useEffect, useState, useMemo } from 'react';
import './FallingPNG.css';

const FallingPNG = () => {
    const pngUrls = useMemo(() => [
        process.env.PUBLIC_URL + '/images/uni1.png',
        process.env.PUBLIC_URL + '/images/uni2.png',
        process.env.PUBLIC_URL + '/images/uni3.png',
        process.env.PUBLIC_URL + '/images/uni4.png',
        process.env.PUBLIC_URL + '/images/uni5.png'
    ], []); // Boş bağımlılık dizisi ile sadece bir kez oluşturulur

    const [fallingImages, setFallingImages] = useState([]);
    const [isFalling, setIsFalling] = useState(true); // Düşme durumunu kontrol et

    useEffect(() => {
        const startFalling = () => {
            const newImage = {
                src: pngUrls[Math.floor(Math.random() * pngUrls.length)],
                left: `${Math.random() * 100}vw`, // Rastgele konum
                id: Math.random() // Her görsel için benzersiz bir ID
            };
            setFallingImages((prev) => [...prev, newImage]);
        };

        const interval = setInterval(() => {
            if (isFalling) {
                startFalling();
            }
        }, 500); // Her 500ms'de yeni görsel ekle

        // 5 saniye sonra düşmeyi durdur
        const timeout = setTimeout(() => {
            setIsFalling(false);
            clearInterval(interval); // Aralık zamanlayıcısını temizle
        }, 10000); // 5000 ms = 5 saniye

        return () => {
            clearInterval(interval);
            clearTimeout(timeout); // Zamanlayıcıyı temizle
        };
    }, [isFalling, pngUrls]); // isFalling ve pngUrls bağımlılıkları

    return (
        <div className="falling-pngs">
            {fallingImages.map((image) => (
                <img
                    key={image.id}
                    src={image.src}
                    alt="Falling PNG"
                    className="falling-png"
                    style={{ left: image.left }}
                />
            ))}
        </div>
    );
};

export default FallingPNG;

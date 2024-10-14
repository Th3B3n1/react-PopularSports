import { useEffect, useState } from "react"

interface ImageGallery
{
    id: number
    src: string
    title: string
    alt: string
}

export function ImageGallery()
{
    const [images, setImages] = useState([] as ImageGallery[]);
    useEffect(() =>
    {
        fetch("/ImageGallery.json")
        .then(response => response.json())
        .then(data => setImages(data));
    })
    return (
        <section className="mb-5">
            <h2>Képgaléria</h2>
            <div className="row">
                {images.map((image, index) =>
                (
                    <div key={index} className="col-sm-4">
                        <img className="img-fluid" alt={image.alt}
                            title={image.title} src={image.src} />
                    </div>
                ))}
            </div>
        </section>
    )
}
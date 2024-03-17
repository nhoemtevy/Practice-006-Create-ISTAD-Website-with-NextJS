import {Carousel} from "flowbite-react";

const CarouselComponent = () => {
    return (
        <>
            <section className="h-[90vh] m-auto">
                <Carousel>
                    <img
                        src="https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
                        alt="..."/>
                    <img
                        src="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
                        alt="..."/>
                    <img
                        src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png"
                        alt="..."/>
                </Carousel>
            </section>
        </>
    )
}
export default CarouselComponent;
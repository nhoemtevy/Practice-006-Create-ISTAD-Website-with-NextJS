import {Carousel} from "flowbite-react";

const CarouselComponent = () => {
    return (
        <>
            <section className="h-[90vh] mt-[-50px]">
                <Carousel>
                    <img
                        src="https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
                        alt="..."/>
                    <img
                        src="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
                        alt="..."/>
                    <img
                        src="https://api.istad.co/media/image/e391212d-aac5-460c-bd17-f95f468e4408.PNG"
                        alt="..."/>
                </Carousel>
            </section>
        </>
    )
}
export default CarouselComponent;
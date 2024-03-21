import { Card } from "flowbite-react";

export default function CardComponent() {
    return (
      <>
      <Card
         className="max-w-[20rem]"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://api.istad.co/media/image/21a31c2d-181b-4ee0-aed9-61dfb8a09757.jpg" >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Technology 
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021.
        </p>
      </Card>
      </>
      
    );
}
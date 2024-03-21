import { Card } from 'flowbite-react'
import React from 'react'

export const CourseComponent = () => {
    return (
        <div>
        <div className="flex flex-wrap justify-center">
        <Card className="max-w-sm m-4" imgSrc="https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        </div>
        </div>
    )
}

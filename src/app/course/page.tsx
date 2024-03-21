import { CoursePageComponent } from "@/components/courseComponents/CoursePageComponent";

export default function Course() {
    return (
        <section>
           <h1 className="text-3xl font-bold my-5 mx-32 mt-10">COURSE</h1>
            <div className="flex gap-8 px-10 flex-wrap">
                <CoursePageComponent/>
                <CoursePageComponent/>
                <CoursePageComponent/>
                <CoursePageComponent/>
                <CoursePageComponent/>
            </div>
        </section>
        
        
    )
}
import { CourseContent } from "./_components/course_content";
import {HeroContents} from "./_components/hero_contents"
import {HomeContents} from "./_components/home_contents"
import {FooterContent} from "./_components/footer_content"
import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";





interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

const HomePage = async ({
    searchParams
  }: SearchPageProps) => {
    
   

    const courses = await getCourses({
        ...searchParams,
        });
    
   
    return (
        <div className="">
            <div className="gap-y-5 px-10  pt-[72px] h-[95vh] w-full bg-cover bg-fixed bg-[url('/1.png')]">
                <HeroContents />
            </div>
            <div className="pt-6">
            <HomeContents />
            </div>    
            <div className="py-10 px-10">
              <p className="font-bold text-2xl">POPULAR COURSES</p>
                <CourseContent courses={courses} />
            </div>
            <div className="bg-right-top bg-gray-800 text-white text-justify">
              <FooterContent />
              <div className="bg-black py-5">
                <p className="text-center">© 2023 SkillUp Africa. All rights reserved.</p>
              </div>
            </div>

        </div>
    )
};
export default HomePage;
import { db } from "@/lib/db";

import { CoursesList } from "@/components/courses-list";

import { Categories } from "@/components/categories";

import { Category, Course } from "@prisma/client";

type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progress: number | null;
  };

interface CourseContentProps {
    courses:CourseWithProgressWithCategory[];
    }
    
export const CourseContent = async ({
    courses
}:CourseContentProps) => {
    const categories = await db.category.findMany({
        orderBy: {
          name: "asc"
        }
      });

    return (
        <>

          <div className="p-6 space-y-4">
            <Categories
              items={categories}
            />
            <CoursesList items={courses} />
          </div>
        </>
       );
}
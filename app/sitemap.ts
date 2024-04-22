import { getCourses } from "@/actions/get-courses"
export default async function sitemap() {
    const baseUrl = 'https://nizzyabi.com/courses'
    const response = await getCourses({})

    const courses = response?.map((course:any) => {
        return {
            url: `${baseUrl}/${course?.id}/info`,
            lastModified: course?.createdAt
        }
})
    return [{
        url: 'nizzyabi.com',
        lastModified: new Date()
    },
    ...courses
]
}
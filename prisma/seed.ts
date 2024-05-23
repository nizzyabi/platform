import { db } from '../lib/db'

async function seedUsers() {
  try {
    await db.user.upsert({
      where: {
        id: '1'
      },
      create: {
        id: '1',
        email: 'testuser@example.com',
        name: 'Test User 1'
      },
      update: {}
    })

    await db.user.upsert({
      where: {
        id: '2'
      },
      create: {
        id: '2',
        email: 'testuser2@example.com',
        name: 'Test User 2'
      },
      update: {}
    })
  } catch (error) {
    console.error('Error seeding users:', error)
    throw error
  }
}

async function seedCourses() {
  const courses = [
    {
      id: '1',
      userId: '1',
      title: 'Functional Backend & Database',
      isPublished: true,
      imageUrl:
        'https://www.nizzyabi.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fb9554ecf-aed8-4eaf-864a-d9d87085d15e-lsdf90.png&w=3840&q=75',
      description:
        'Build a working backend that connects to the frontend & stores data!',
      introVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      description2:
        'We will be building a basic fullstack app that stores users inputs in a database',
      learningOutcome:
        'By the end of this short course, you will learn how to create your own backend & database so that you can build your own fullstack apps.',
      included: '',
      difficulty:
        'This course is for any programmer! We cover some advanced topics but they are well explained & easily able to be finished.'
    },
    {
      id: '2',
      userId: '2',
      title: 'Frontend Analytics Dashboard',
      isPublished: true,
      imageUrl:
        'https://www.nizzyabi.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Ff5e0c22e-30a1-4834-a3fd-1d65e74d3a2e-ft8p6c.png&w=3840&q=75',
      description: 'Build an analytics dashboard using modern tools!',
      introVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      description2:
        'We will be building a basic fullstack app that stores users inputs in a database',
      learningOutcome:
        'By the end of this short course, you will learn how to create your own backend & database so that you can build your own fullstack apps.',
      included: '',
      difficulty:
        'This course is for any programmer! We cover some advanced topics but they are well explained & easily able to be finished.'
    },
    {
      id: '3',
      userId: '3',
      title: 'Stripe Payment',
      isPublished: true,
      imageUrl:
        'https://www.nizzyabi.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F8a383962-e94e-4f2a-bb04-22303277f6e4-8fqg4h.png&w=3840&q=75',
      description:
        'Build a payment system for your application using StripeJS!',
      introVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      description2:
        'We will be building a basic fullstack app that stores users inputs in a database',
      learningOutcome:
        'By the end of this short course, you will learn how to create your own backend & database so that you can build your own fullstack apps.',
      included: '',
      difficulty:
        'This course is for any programmer! We cover some advanced topics but they are well explained & easily able to be finished.'
    }
  ]

  try {
    const existingCourses = await db.course.findMany()
    if (existingCourses.length > 0) {
      console.error('DB is already seeded with courses.')
      return
    }

    await db.course.createMany({ data: courses })
  } catch (error) {
    console.error('Error seeding courses:', error)
    throw error
  }
}

async function seedChapters() {
  const chapters = [
    {
      id: '1',
      title: 'Introduction',
      description: 'Introduction',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 1,
      isPublished: true,
      isFree: true,
      courseId: '1'
    },
    {
      id: '2',
      title: 'App Setup',
      description: 'App Setup',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 2,
      isPublished: true,
      isFree: true,
      courseId: '1'
    },
    {
      id: '3',
      title: 'Database Client',
      description: 'Database Client',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 3,
      isPublished: true,
      isFree: true,
      courseId: '1'
    },
    {
      id: '4',
      title: 'Create Database Model',
      description: 'Create Database Model',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 4,
      isPublished: true,
      isFree: true,
      courseId: '1'
    },
    {
      id: '5',
      title: 'Connecting to Database',
      description: 'Connecting to Database',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 5,
      isPublished: true,
      isFree: true,
      courseId: '1'
    },
    {
      id: '6',
      title: 'Intro',
      description: 'Intro',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 1,
      isPublished: true,
      isFree: true,
      courseId: '2'
    },
    {
      id: '7',
      title: 'Main Dashboard Page',
      description: 'Main Dashboard Page',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 2,
      isPublished: true,
      isFree: true,
      courseId: '2'
    },
    {
      id: '8',
      title: 'Dashboard Card',
      description: 'Dashboard Card',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 3,
      isPublished: true,
      isFree: true,
      courseId: '2'
    },
    {
      id: '9',
      title: 'Intro',
      description: 'Intro',
      vimeoVideo:
        'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      videoUrl: 'https://www.youtube.com/embed/lSKgdDakjCY?si=2cDs12j_rWoeBSzl',
      position: 1,
      isPublished: true,
      isFree: true,
      courseId: '3'
    }
  ]

  try {
    await db.chapter.createMany({ data: chapters })
  } catch (error) {
    console.error('Error seeding content:', error)
    throw error
  }
}

async function seedDatabase() {
  try {
    await seedUsers()
    await seedCourses()
    await seedChapters()
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  } finally {
    await db.$disconnect()
  }
}

seedDatabase().catch((error) => {
  console.error('An unexpected error occurred during seeding:', error)
  process.exit(1)
})

// pages/api/courses.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Get the session and hence the user making the request
    const session = await getSession();
    if (!session || !session.user) {
      // Not signed in
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    // Here we assume that the user object in the session includes the id
    const userId = session.user.id;

    // Get the data from the request body
    const { title, description, imageUrl, price, isPublished, categoryId } = req.body;

    // Create the course in the database
    const course = await prisma.course.create({
      data: {
        userId, // Attach the userId from the session to the course
        title,
        description,
        imageUrl,
        price,
        isPublished,
        categoryId, // This is optional, depending on if the course has a category
        // ... other fields you might want to include
      },
    });

    // Send the created course as a response
    return res.status(200).json(course);
  } catch (error) {
    console.error('Error creating course:', error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
}


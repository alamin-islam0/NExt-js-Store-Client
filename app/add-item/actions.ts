'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addItemAction(prevState: any, formData: FormData) {
  const name = formData.get('name');
  const description = formData.get('description');
  const price = formData.get('price');
  const image = formData.get('image');

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // In real app, attach token here
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      },
      body: JSON.stringify({
        name,
        description,
        price: parseFloat(price as string),
        image
      }),
    });

    const data = await res.json();

    if (!res.ok) {
        return { success: false, message: data.message || 'Failed to create item' };
    }

    revalidatePath('/items');
    return { success: true, message: 'Item created successfully!' };

  } catch (err) {
    return { success: false, message: 'Server error occurred' };
  }
}

'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      return { message: data.message || 'Invalid credentials' };
    }

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: 'auth_token',
      value: data.token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

  } catch (err) {
    console.error('Login Error:', err);
    return { message: 'Something went wrong. Is the server running?' };
  }
  
  revalidatePath('/');
  return { success: true, message: 'Login successful' };
}

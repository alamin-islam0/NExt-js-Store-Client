'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  revalidatePath('/');
  return { success: true };
}

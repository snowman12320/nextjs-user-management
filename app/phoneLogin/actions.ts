'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signInWithOtp(formData: FormData) {
  const supabase = await createClient()

  const data = {
    phone: formData.get('phone') as string,
  }

  const { error } = await supabase.auth.signInWithOtp({
    phone: data.phone,
  })

  if (error) {
    redirect('/error')
  }

  redirect('/phoneLogin/verify?phone=' + encodeURIComponent(data.phone))
}

export async function verifyOtp(formData: FormData) {
  const supabase = await createClient()
  const data = {
    phone: formData.get('phone') as string,
    token: formData.get('token') as string,
  }
  
  const { error } = await supabase.auth.verifyOtp({
    phone: data.phone,
    token: data.token,
    type: 'sms'
  })

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signupWithPassport(formData: FormData) {
  const supabase = await createClient()

  const phone = formData.get('phone') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({
    phone,
    password,
  })

  if (error) {
    redirect('/error')
  }
} 

export async function signInWithPassword(formData: FormData) {
  const supabase = await createClient()

  const data = {
    phone: formData.get('phone') as string,
    password: formData.get('password') as string
  }

  const { error } = await supabase.auth.signInWithPassword({
    phone: data.phone,
    password:data.password
  })

  if (error) {
    // Phone not confirmed
    // Invalid login credentials
    // console.info(error.message);
    signupWithPassport(formData);
    redirect('/phoneLogin/verify?phone=' + encodeURIComponent(data.phone))
  } else {
    redirect('/account')
  }
}
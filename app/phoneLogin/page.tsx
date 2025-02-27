"use client";
import React, { useState } from 'react'
import { signInWithPhone } from './actions'

export default function PhoneLoginPage() {
  const [phone, setPhone] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 10 && value.startsWith('09')) {
      setPhone(`+886${value}`);
    } else {
      setPhone(value);
    }
  };
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <h1 className="text-2xl mb-4">手機登入</h1>
        <label className="text-md" htmlFor="phone">
          手機號碼
        </label>
        <div className="mb-6">
        <input
        className="rounded-md px-4 py-2 bg-inherit border"
        name="phone"
        placeholder="+886912345678"
        required
        value={phone}
        onChange={handleChange}
      />
      <p className="text-sm mt-1">{phone}</p>
        </div>
        <button
          formAction={signInWithPhone}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
        >
          發送驗證碼
        </button>
      </form>
    </div>
  )
} 
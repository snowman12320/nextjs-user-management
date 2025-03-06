"use client";
import React, { useState } from 'react'
import { signInWithPassword } from './actions'

export default function PhoneLoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 10 && value.startsWith('09')) {
      setPhone(`+886${value}`);
    } else {
      setPhone(value);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <h1 className="text-2xl mb-4">手機登入</h1>
        <label className="text-md" htmlFor="phone">
          手機號碼
        </label>
        <div className="mb-4">
          <input
            className="rounded-md px-4 py-2 bg-inherit border w-full"
            name="phone"
            placeholder="+886912345678"
            required
            value={phone}
            onChange={handlePhoneChange}
          />
          <p className="text-sm mt-1">{phone}</p>
        </div>

        <label className="text-md" htmlFor="password">
          密碼
        </label>
        <div className="mb-6">
          <input
            className="rounded-md px-4 py-2 bg-inherit border w-full"
            type="password"
            name="password"
            placeholder="請輸入密碼"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          formAction={signInWithPassword}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2 w-full"
        >
          登入/註冊
        </button>
      </form>
    </div>
  )
}

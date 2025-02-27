import { verifyOtp } from '../actions'

export default function VerifyPage({
  searchParams,
}: {
  searchParams: { phone: string }
}) {
  const phone = searchParams.phone

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <h1 className="text-2xl mb-4">驗證簡訊驗證碼</h1>
        <p className="text-md mb-4">
          我們已發送驗證碼至 {phone}
        </p>
        <input type="hidden" name="phone" value={phone} />
        <label className="text-md" htmlFor="token">
          驗證碼
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="token"
          placeholder="123456"
          required
          maxLength={6}
          pattern="[0-9]{6}"
        />
        <button
          formAction={verifyOtp}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
        >
          驗證
        </button>
      </form>
    </div>
  )
} 
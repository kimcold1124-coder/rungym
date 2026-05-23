"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { insforge } from "@/lib/insforge";
import { useAuth } from "@/lib/auth-context";

export default function AuthPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [signingIn, setSigningIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  async function handleGoogleLogin() {
    setError(null);
    setSigningIn(true);
    try {
      const { error: oauthError } = await insforge.auth.signInWithOAuth({
        provider: "google",
        redirectTo:
          typeof window !== "undefined"
            ? `${window.location.origin}/auth`
            : undefined,
      });
      if (oauthError) {
        throw new Error(oauthError.message ?? "로그인에 실패했습니다.");
      }
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다.";
      setError(message);
      setSigningIn(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#ECEEF0] text-[#202020]">
      <header className="w-full border-b border-[#DEE0E2]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="RunGym"
              width={120}
              height={48}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#202020]/70 hover:text-[#202020]"
          >
            ← 홈으로
          </Link>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-[#DEE0E2] bg-[#DEE0E2] p-8 sm:p-10">
            <div className="mb-8 text-center">
              <Image
                src="/logo.png"
                alt="RunGym"
                width={400}
                height={160}
                priority
                className="mx-auto mb-5 h-16 w-auto"
              />
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                시작하기
              </h1>
              <p className="mt-3 text-sm text-[#202020]/70">
                계정에 로그인하거나 새 계정을 만들고
                <br />
                바이럴 영상을 만들어 보세요.
              </p>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={signingIn || loading}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#202020] px-6 py-4 text-sm font-semibold text-[#ECEEF0] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="rounded-full bg-[#ECEEF0] p-0.5"
              >
                <path
                  fill="#202020"
                  d="M21.6 12.227c0-.708-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.51h3.227c1.89-1.74 2.986-4.302 2.986-7.35Z"
                />
                <path
                  fill="#202020"
                  d="M12 22c2.7 0 4.964-.895 6.614-2.422l-3.227-2.51c-.895.6-2.04.955-3.387.955-2.605 0-4.81-1.76-5.598-4.123H3.064v2.59A9.997 9.997 0 0 0 12 22Z"
                />
                <path
                  fill="#202020"
                  d="M6.402 13.9a6.01 6.01 0 0 1 0-3.8V7.51H3.064a10.002 10.002 0 0 0 0 8.98l3.338-2.59Z"
                />
                <path
                  fill="#202020"
                  d="M12 5.977c1.468 0 2.786.505 3.823 1.496l2.866-2.866C16.96 3.063 14.695 2 12 2A9.997 9.997 0 0 0 3.064 7.51l3.338 2.59C7.19 7.737 9.395 5.977 12 5.977Z"
                />
              </svg>
              {signingIn ? "Google로 이동 중…" : "Google 계정으로 계속하기"}
            </button>

            {error && (
              <div className="mt-5 rounded-xl border border-[#202020] bg-[#ECEEF0] px-4 py-3 text-sm text-[#202020]">
                {error}
              </div>
            )}

            <div className="mt-8 text-center text-xs text-[#202020]/60">
              계속 진행하면 RunGym의{" "}
              <a href="#" className="underline underline-offset-2">
                이용약관
              </a>
              과{" "}
              <a href="#" className="underline underline-offset-2">
                개인정보처리방침
              </a>
              에 동의하는 것으로 간주됩니다.
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-[#202020]/60">
            처음이신가요? Google 로그인 시 자동으로 계정이 생성됩니다.
          </p>
        </div>
      </div>
    </main>
  );
}

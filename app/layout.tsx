import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViralOne — 원클릭 바이럴 영상 AI",
  description:
    "한 줄의 아이디어로 바이럴 숏폼 영상을 자동 생성하는 AI 서비스. 기획, 스크립트, 편집, 자막, 음악까지 한 번에.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#ECEEF0] text-[#202020]">
        {children}
      </body>
    </html>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col bg-[#ECEEF0] text-[#202020]">
      {/* Navigation */}
     

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DEE0E2] bg-[#DEE0E2] px-4 py-1.5 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#202020]" />
            AI 영상 생성 · 베타 오픈
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            한 줄로 만드는
            <br />
            <span className="inline-block bg-[#202020] px-3 py-1 text-[#ECEEF0]">
              바이럴 영상
            </span>
          </h1>
    

          {/* Prompt Input Mock */}
          <div className="mt-10 w-full max-w-2xl">
            <div className="flex flex-col gap-3 rounded-2xl border border-[#DEE0E2] bg-[#DEE0E2] p-2 shadow-sm sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="예) 헬스장 신규 회원을 위한 30초 바이럴 영상"
                className="w-full flex-1 rounded-xl bg-[#ECEEF0] px-5 py-4 text-sm placeholder:text-[#202020]/40 focus:outline-none"
              />
              <button className="rounded-xl bg-[#202020] px-6 py-4 text-sm font-semibold text-[#ECEEF0] hover:opacity-90">
                영상 만들기 →
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[#202020]/60">
              <span>추천 키워드:</span>
              {["피트니스", "카페 오픈", "신상품 소개", "여행 브이로그"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#DEE0E2] bg-[#ECEEF0] px-3 py-1"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs text-[#202020]/60">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#202020]">120K+</span>
              <span>생성된 영상</span>
            </div>
            <div className="h-6 w-px bg-[#DEE0E2]" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#202020]">38초</span>
              <span>평균 생성 시간</span>
            </div>
            <div className="h-6 w-px bg-[#DEE0E2]" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#202020]">9.4점</span>
              <span>사용자 만족도</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full bg-[#DEE0E2] py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-medium text-[#202020]/60">
              FEATURES
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              영상 제작의 모든 과정을
              <br />
              AI가 대신합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI 스크립트 작성",
                desc: "후킹부터 CTA까지, 바이럴 공식에 맞춘 스크립트를 자동 생성합니다.",
                icon: "✎",
              },
              {
                title: "자동 영상 편집",
                desc: "장면 분할, 컷 편집, 트랜지션을 한 번에 처리합니다.",
                icon: "▶",
              },
              {
                title: "감각적인 자막",
                desc: "트렌디한 모션 자막을 자동으로 입혀드립니다.",
                icon: "Aa",
              },
              {
                title: "분위기에 맞는 BGM",
                desc: "콘텐츠 톤에 어울리는 저작권 안전 음악을 선곡합니다.",
                icon: "♪",
              },
              {
                title: "플랫폼별 최적화",
                desc: "인스타 릴스, 틱톡, 쇼츠 비율과 길이에 맞춰 자동 변환.",
                icon: "□",
              },
              {
                title: "원클릭 업로드",
                desc: "생성한 영상을 바로 SNS 채널에 예약 게시할 수 있습니다.",
                icon: "↗",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-[#ECEEF0] bg-[#ECEEF0] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#202020] text-[#ECEEF0] text-lg font-bold">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-[#202020]/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="w-full py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium text-[#202020]/60">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              3단계로 끝나는 바이럴 영상 제작
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "아이디어 입력",
                desc: "만들고 싶은 영상의 주제나 키워드를 한 줄로 입력하세요.",
              },
              {
                step: "02",
                title: "AI가 자동 생성",
                desc: "스크립트, 영상 소스, 자막, BGM이 한 번에 조립됩니다.",
              },
              {
                step: "03",
                title: "다운로드 & 공유",
                desc: "마음에 든다면 바로 다운로드하거나 SNS에 게시하세요.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-[#DEE0E2] bg-[#ECEEF0] p-8"
              >
                <span className="text-5xl font-bold text-[#DEE0E2]">
                  {s.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[#202020]/70">{s.desc}</p>
                {i < 2 && (
                  <span className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-2xl text-[#DEE0E2] md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="w-full bg-[#DEE0E2] py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-medium text-[#202020]/60">
                SHOWCASE
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                RunGym으로 만든 영상들
              </h2>
            </div>
            <a
              href="#"
              className="text-sm font-medium underline underline-offset-4 hover:opacity-60"
            >
              전체 갤러리 보기 →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { tag: "FITNESS", views: "1.2M" },
              { tag: "CAFE", views: "840K" },
              { tag: "FASHION", views: "2.1M" },
              { tag: "TRAVEL", views: "560K" },
            ].map((item) => (
              <div
                key={item.tag}
                className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#ECEEF0]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#202020] text-[#ECEEF0] text-xl transition group-hover:scale-110">
                    ▶
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 text-xs">
                  <span className="rounded-full bg-[#202020] px-2.5 py-1 font-semibold text-[#ECEEF0]">
                    {item.tag}
                  </span>
                  <span className="font-medium text-[#202020]">
                    {item.views} views
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium text-[#202020]/60">
              PRICING
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              부담 없이 시작하세요
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Free",
                price: "₩0",
                desc: "처음 사용해보는 분들을 위한 무료 플랜",
                features: ["월 3개 영상 생성", "워터마크 포함", "기본 템플릿"],
                highlight: false,
              },
              {
                name: "Pro",
                price: "₩19,000",
                desc: "꾸준히 콘텐츠를 만드는 크리에이터를 위한 플랜",
                features: [
                  "월 50개 영상 생성",
                  "워터마크 제거",
                  "모든 템플릿 & BGM",
                  "HD 다운로드",
                ],
                highlight: true,
              },
              {
                name: "Business",
                price: "₩59,000",
                desc: "팀 단위 마케팅 운영을 위한 비즈니스 플랜",
                features: [
                  "무제한 영상 생성",
                  "팀원 5명",
                  "브랜드 키트 관리",
                  "우선 지원",
                ],
                highlight: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={
                  "flex flex-col rounded-2xl border p-8 " +
                  (p.highlight
                    ? "border-[#202020] bg-[#202020] text-[#ECEEF0]"
                    : "border-[#DEE0E2] bg-[#DEE0E2] text-[#202020]")
                }
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span
                    className={
                      "text-sm " +
                      (p.highlight ? "text-[#ECEEF0]/70" : "text-[#202020]/60")
                    }
                  >
                    /월
                  </span>
                </div>
                <p
                  className={
                    "mt-3 text-sm " +
                    (p.highlight ? "text-[#ECEEF0]/70" : "text-[#202020]/70")
                  }
                >
                  {p.desc}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span
                        className={
                          "flex h-5 w-5 items-center justify-center rounded-full text-xs " +
                          (p.highlight
                            ? "bg-[#ECEEF0] text-[#202020]"
                            : "bg-[#202020] text-[#ECEEF0]")
                        }
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={
                    "mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold " +
                    (p.highlight
                      ? "bg-[#ECEEF0] text-[#202020] hover:opacity-90"
                      : "bg-[#202020] text-[#ECEEF0] hover:opacity-90")
                  }
                >
                  시작하기
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="w-full px-6 py-24">
        <div className="mx-auto w-full max-w-5xl rounded-3xl bg-[#202020] px-8 py-20 text-center text-[#ECEEF0]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            지금 첫 번째 바이럴 영상을
            <br />
            만들어 보세요
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-[#ECEEF0]/70 sm:text-base">
            신용카드 등록 없이 무료로 시작할 수 있습니다. 단 한 번의 클릭으로
            여러분의 아이디어가 영상이 됩니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-[#ECEEF0] px-7 py-3 text-sm font-semibold text-[#202020] hover:opacity-90"
            >
              무료로 시작하기
            </a>
            <a
              href="#"
              className="rounded-full border border-[#ECEEF0]/30 px-7 py-3 text-sm font-semibold hover:bg-[#ECEEF0]/10"
            >
              데모 영상 보기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#DEE0E2] bg-[#ECEEF0]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#202020] text-[#ECEEF0] text-sm font-bold">
                R
              </span>
              <span className="text-lg font-semibold">RunGym</span>
            </div>
            <p className="mt-3 text-sm text-[#202020]/60">
              한 줄의 아이디어를 바이럴 영상으로. AI가 만드는 새로운 콘텐츠
              제작 경험.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 font-semibold">제품</p>
              <ul className="space-y-2 text-[#202020]/60">
                <li>
                  <a href="#features" className="hover:text-[#202020]">
                    기능
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#202020]">
                    요금제
                  </a>
                </li>
                <li>
                  <a href="#showcase" className="hover:text-[#202020]">
                    쇼케이스
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">회사</p>
              <ul className="space-y-2 text-[#202020]/60">
                <li>
                  <a href="#" className="hover:text-[#202020]">
                    소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#202020]">
                    블로그
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#202020]">
                    채용
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">고객 지원</p>
              <ul className="space-y-2 text-[#202020]/60">
                <li>
                  <a href="#" className="hover:text-[#202020]">
                    문의하기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#202020]">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#202020]">
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DEE0E2]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-xs text-[#202020]/50">
            <span>© 2026 RunGym. All rights reserved.</span>
            <span>Made with AI · Seoul</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

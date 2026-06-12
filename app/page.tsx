'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useApp } from '@/contexts/AppContext'
import LoadingSpinner from '@/components/LoadingSpinner'

const FEATURES = [
  {
    title: 'AI 탄소 실시간 추적',
    description:
      'AI와 대화할 때마다 발생하는 탄소 배출량을 gCO₂eq 단위로 실시간 확인하세요. 내 AI 사용 습관이 지구에 미치는 영향을 명확하게 파악할 수 있습니다.',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: '탄소 절감 챌린지',
    description:
      '매일 새로운 탄소 절감 챌린지에 도전하세요. 사진으로 인증하고 커뮤니티와 함께 지속 가능한 행동을 실천하며 추가 토큰을 획득하세요.',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 22h16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    title: '커뮤니티 인증 피드',
    description:
      '다른 사용자들의 챌린지 인증을 확인하고 좋아요로 응원하세요. 함께하는 탄소 절감 실천이 더 큰 변화를 만들어냅니다.',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export default function LandingPage() {
  const router = useRouter()
  const { user, isLoadingUser } = useApp()

  useEffect(() => {
    if (!isLoadingUser && user) {
      router.replace('/chat')
    }
  }, [user, isLoadingUser, router])

  if (isLoadingUser) {
    return (
      <div className="min-h-screen flex items-center justify-center text-green-600">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (user) return null

  return (
    <div className="min-h-screen bg-white">

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/icon.png" alt="Anoixi" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-gray-900">Anoixi</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition-colors"
            >
              시작하기
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            </svg>
            AI 탄소 인식 챌린지 플랫폼
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
            AI 대화의 탄소 배출,<br />
            <span className="text-green-500">이제 직접 확인하고</span><br />
            줄이세요
          </h1>

          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            매번 AI를 사용할 때마다 발생하는 탄소 배출량을 실시간으로 추적하고,
            챌린지를 통해 지속 가능한 미래를 만들어 가세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-center"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-full transition-colors text-center"
            >
              로그인
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400">
          <span className="text-xs">스크롤하여 더 보기</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Anoixi로 할 수 있는 것들
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              AI 사용과 환경 보호를 동시에 실천하는 새로운 방법을 경험하세요
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-green-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-green-100 mb-10 text-lg leading-relaxed">
            AI 탄소 배출을 인식하고 줄이는 여정을 함께해요
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white hover:bg-gray-50 text-green-600 font-bold px-10 py-4 rounded-full transition-colors text-lg"
          >
            무료 회원가입
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">© 2026 Anoixi. AI 탄소 인식 챌린지 플랫폼</p>
      </footer>

    </div>
  )
}

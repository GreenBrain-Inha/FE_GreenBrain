'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useApp } from '@/contexts/AppContext'
import AuthHeader from '@/components/AuthHeader'
import LoadingSpinner from '@/components/LoadingSpinner'

const FEATURES = [
  {
    title: 'AI 챗봇 탄소 인식',
    description: 'AI 대화마다 탄소 배출량을 실시간으로 확인하세요',
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: '챌린지 참여',
    description: '탄소 절감 챌린지로 지구를 지키는 행동을 실천하세요',
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
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
    title: '개인 탄소 리포트',
    description: '나의 AI 사용 탄소 발자국을 한눈에 파악하세요',
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 17V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 17V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17v-3" />
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
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <AuthHeader title="Anoixi" subtitle="AI 탄소 인식 챌린지 플랫폼" />

        <div className="space-y-3 mt-6">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{feature.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 mt-8">
          <Link
            href="/login"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center block"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 px-4 rounded-lg transition-colors text-center block"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
}

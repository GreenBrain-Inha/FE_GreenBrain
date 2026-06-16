'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import TokenRing from '@/components/TokenRing'

const CHALLENGE_CARDS = [
  { emoji: '🚲', title: '자전거 출퇴근 도전', desc: '이번 주 3회 이상 자전거로 출퇴근하기', tag: '교통' },
  { emoji: '♻️', title: '분리수거 마스터', desc: '7일간 완벽한 분리수거 실천하기', tag: '생활' },
  { emoji: '🥗', title: '채식 데이', desc: '3일 연속 채식 식단 도전', tag: '식단' },
]

const FEED_ITEMS = [
  { user: '지수', avatar: '🌿', challenge: '자전거 출퇴근', likes: 24, time: '2시간 전', comment: '오늘도 자전거로 출근 성공! 날씨가 너무 좋았어요 ☀️' },
  { user: '민준', avatar: '🌱', challenge: '채식 데이', likes: 18, time: '5시간 전', comment: '3일 채식 완료! 생각보다 맛있는 레시피가 많더라고요 😊' },
  { user: '하은', avatar: '🍃', challenge: '분리수거 마스터', likes: 9, time: '어제', comment: '7일 분리수거 챌린지 클리어! 습관이 됐어요 👍' },
]

const STATUS_LEVELS = [
  { label: '여유', color: '#22c55e', range: '6,667–10,000' },
  { label: '주의', color: '#f59e0b', range: '3,334–6,666' },
  { label: '위험', color: '#ef4444', range: '0–3,333' },
]

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[0.7rem] text-green-400 font-bold tracking-[0.12em] uppercase mb-[0.65rem]">
      {children}
    </p>
  )
}

export default function Landing() {
  const [tokenVal, setTokenVal] = useState(10000)
  const dirRef = useRef<'down' | 'up'>('down')

  useEffect(() => {
    const id = setInterval(() => {
      setTokenVal((prev) => {
        if (dirRef.current === 'down') {
          if (prev <= 1200) { dirRef.current = 'up'; return prev + 900 }
          return prev - 600
        } else {
          if (prev >= 9800) { dirRef.current = 'down'; return prev - 600 }
          return prev + 900
        }
      })
    }, 160)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="font-outfit bg-[#07100a] text-[#f0f4f1] overflow-x-hidden">
      {/* Background ambient gradient */}
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 15% 25%, rgba(34,197,94,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 70%, rgba(16,185,129,0.04) 0%, transparent 55%)',
      }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/[6%] backdrop-blur-[16px] bg-[rgba(7,16,10,0.85)]">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-[58px]">
          <div className="flex items-center gap-2">
            <span className="text-[1.1rem]">🌿</span>
            <span className="font-extrabold text-base tracking-[-0.02em]">Anoixi</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-white/45 text-[0.85rem] hover:text-white transition-colors">
              로그인
            </Link>
            <Link
              href="/signup"
              className="bg-green-500 text-[#07100a] px-[0.95rem] py-[0.38rem] rounded-md text-[0.82rem] font-bold hover:opacity-90 transition-opacity"
            >
              시작하기
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-[1] max-w-5xl mx-auto px-6 pt-20 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-[0.45rem] bg-green-500/[8%] border border-green-500/20 rounded-full px-[0.8rem] py-[0.25rem] text-[0.72rem] text-green-400 font-semibold mb-6">
              <span className="w-[5px] h-[5px] bg-green-400 rounded-full inline-block" />
              탄소 토큰 기반 LLM 채팅 서비스
            </div>

            <h1
              className="font-extrabold leading-[1.1] tracking-[-0.035em] mb-[1.3rem]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}
            >
              AI를 쓸수록<br />
              <span className="text-green-400">탄소 책임</span>을<br />
              배웁니다
            </h1>

            <p className="font-inter text-white/50 text-[0.95rem] leading-[1.75] max-w-[440px] mb-8 font-normal">
              Anoixi는 AI 대화에 탄소 비용을 부여합니다. 채팅마다 토큰이 차감되고,
              맞춤형 에코 챌린지를 통해 커뮤니티 인증으로 토큰을 회복하세요.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="bg-green-500 text-[#07100a] py-3 px-[1.8rem] rounded-lg font-bold text-[0.9rem] hover:opacity-90 transition-opacity"
              >
                무료로 시작하기 →
              </Link>
              <Link
                href="/login"
                className="text-white/40 text-[0.85rem] underline underline-offset-[3px] hover:text-white transition-colors"
              >
                이미 계정이 있어요
              </Link>
            </div>

            <div className="flex gap-8 mt-10 flex-wrap">
              {[['10,000', '시작 토큰'], ['+2,000', '좋아요 3개당'], ['커뮤니티', '인증 기반 회복']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-extrabold text-[1.35rem] text-green-400 tracking-[-0.025em]">{val}</div>
                  <div className="font-inter text-[0.72rem] text-white/35 mt-px">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Token widget */}
          <div className="bg-white/[2%] border border-white/[7%] rounded-[18px] p-[1.8rem] flex items-center gap-[1.8rem]">
            <TokenRing value={tokenVal} />
            <div>
              <div className="font-inter text-[0.68rem] text-white/30 font-semibold tracking-[0.08em] uppercase mb-[0.6rem]">
                탄소 토큰
              </div>
              <div className="flex flex-col gap-[0.4rem] mb-[0.9rem]">
                {STATUS_LEVELS.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="w-[5px] h-[5px] rounded-full inline-block shrink-0" style={{ background: s.color }} />
                    <span className="text-[0.75rem] font-semibold" style={{ color: s.color }}>{s.label}</span>
                    <span className="font-inter text-[0.7rem] text-white/[28%]">{s.range}</span>
                  </div>
                ))}
              </div>
              <div className="font-inter text-[0.7rem] text-white/25 leading-[1.7]">
                채팅 1회 토큰 차감<br />
                좋아요 3개 → +2,000 토큰
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 01 — LLM 채팅 ── */}
      <section className="border-t border-white/[6%] relative z-[1] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-[0.65rem]">
              {[
                { icon: '💬', title: 'AI에게 질문', desc: '환경, 식단, 교통 등 지속가능한 삶에 관해 묻는다', badge: '토큰 차감', badgeColor: '#ef4444' },
                { icon: '🌍', title: '탄소 비용 인식', desc: '답변 아래에 실생활 탄소 비유 카드가 표시된다', badge: '자동차 🚗 주행 30초', badgeColor: '#f59e0b' },
                { icon: '📉', title: '토큰 잔량 확인', desc: '토큰이 줄수록 녹색→황색→적색으로 변한다', badge: '시각 피드백', badgeColor: '#22c55e' },
              ].map((step) => (
                <div key={step.title} className="bg-white/[2%] border border-white/[7%] rounded-xl py-4 px-[1.15rem] flex items-start gap-[0.9rem]">
                  <span className="text-[1.2rem] shrink-0 mt-px">{step.icon}</span>
                  <div className="flex-1">
                    <div className="text-[0.83rem] font-semibold mb-[2px]">{step.title}</div>
                    <div className="font-inter text-[0.73rem] text-white/40 leading-[1.5]">{step.desc}</div>
                  </div>
                  <div className="font-inter text-[0.7rem] font-semibold whitespace-nowrap shrink-0" style={{ color: step.badgeColor }}>
                    {step.badge}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <SectionLabel>01 — LLM 채팅</SectionLabel>
              <h2
                className="font-extrabold tracking-[-0.03em] leading-[1.15] mb-[1.1rem]"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                AI 사용에도<br /><span className="text-green-400">탄소 비용</span>이 있습니다
              </h2>
              <p className="font-inter text-white/[48%] text-[0.92rem] leading-[1.8] font-normal">
                대화 한 번에 소모되는 탄소를 토큰으로 시각화합니다.
                처음 받는 <strong className="text-green-400">10,000개의 탄소 토큰</strong>으로
                AI와 자유롭게 대화하며, 내 디지털 탄소 발자국을 체감하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 02 — 챌린지 ── */}
      <section className="border-t border-white/[6%] relative z-[1] py-24 bg-[rgba(34,197,94,0.012)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>02 — 맞춤형 챌린지</SectionLabel>
              <h2
                className="font-extrabold tracking-[-0.03em] leading-[1.15] mb-[1.1rem]"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                실천이 인정받으면<br /><span className="text-green-400">토큰이 회복</span>됩니다
              </h2>
              <p className="font-inter text-white/[48%] text-[0.92rem] leading-[1.8] mb-[1.3rem] font-normal">
                생활 패턴을 기반으로 AI가 나에게 맞는 챌린지를 자동으로 생성합니다.
                챌린지를 완료하고 사진으로 인증한 뒤,{' '}
                <strong className="text-[#f0f4f1]">커뮤니티로부터 좋아요를 받으면</strong> 토큰이 회복됩니다.
              </p>
              <p className="font-inter text-white/[48%] text-[0.92rem] leading-[1.8] font-normal">
                단순 업로드가 아닌, 다른 사용자의 인정을 통해 회복되는 구조입니다.
                <strong className="text-green-400"> 좋아요 3개마다 +2,000 토큰</strong>이 적립됩니다.
              </p>
            </div>
            <div className="flex flex-col gap-[0.65rem]">
              <div className="font-inter text-[0.7rem] text-white/[28%] mb-[0.15rem]">
                🎯 회원님을 위한 맞춤 챌린지
              </div>
              {CHALLENGE_CARDS.map((c) => (
                <div key={c.title} className="bg-white/[2%] border border-white/[7%] rounded-xl px-[1.15rem] py-[0.95rem] flex items-center gap-[0.9rem]">
                  <div className="w-10 h-10 rounded-[9px] bg-green-500/[7%] border border-green-500/[13%] flex items-center justify-center text-[1.25rem] shrink-0">
                    {c.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-[0.45rem] mb-[2px]">
                      <span className="text-[0.82rem] font-semibold">{c.title}</span>
                      <span className="text-[0.62rem] text-green-400 font-semibold bg-green-500/[9%] border border-green-500/[18%] rounded px-[5px] py-[1px]">
                        {c.tag}
                      </span>
                    </div>
                    <div className="font-inter text-[0.72rem] text-white/[38%]">{c.desc}</div>
                  </div>
                </div>
              ))}
              <div className="bg-green-500/[4%] border border-dashed border-green-500/[18%] rounded-xl px-[1.15rem] py-[0.85rem] flex items-center gap-3">
                <span className="text-[1.1rem]">👍</span>
                <div className="font-inter text-[0.75rem] text-white/[38%] leading-[1.55]">
                  인증 사진에 <strong className="text-green-400">좋아요 3개</strong>가 쌓이면<br />
                  <strong className="text-green-400">+2,000 탄소 토큰</strong> 회복
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 03 — 피드 ── */}
      <section className="border-t border-white/[6%] relative z-[1] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-[0.65rem]">
              <div className="font-inter text-[0.7rem] text-white/[28%] mb-[0.15rem]">
                🌍 커뮤니티 챌린지 피드
              </div>
              {FEED_ITEMS.map((item) => (
                <div key={item.user} className="bg-white/[2%] border border-white/[7%] rounded-xl py-4 px-[1.15rem]">
                  <div className="flex items-center gap-[0.6rem] mb-[0.55rem]">
                    <div className="w-7 h-7 rounded-full bg-green-500/[9%] border border-green-500/[18%] flex items-center justify-center text-[0.9rem]">
                      {item.avatar}
                    </div>
                    <span className="text-[0.8rem] font-semibold">{item.user}</span>
                    <span className="font-inter text-[0.68rem] text-white/[28%]">{item.time}</span>
                    <div className="ml-auto text-[0.62rem] text-green-400 bg-green-500/[8%] rounded px-[7px] py-[1px] font-semibold">
                      {item.challenge}
                    </div>
                  </div>
                  <div className="font-inter text-[0.75rem] text-white/50 leading-[1.55] mb-[0.65rem]">
                    {item.comment}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/[4%] border border-white/[9%] rounded-[5px] px-[0.6rem] py-[0.2rem] font-inter text-[0.72rem] text-white/45 flex items-center gap-[0.25rem]">
                      👍 {item.likes}
                    </div>
                    {item.likes >= 3 && (
                      <span className="font-inter text-[0.65rem] text-green-400">
                        +{Math.floor(item.likes / 3) * 2000} 토큰 적립
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <SectionLabel>03 — 챌린지 피드</SectionLabel>
              <h2
                className="font-extrabold tracking-[-0.03em] leading-[1.15] mb-[1.1rem]"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                함께 나누면<br /><span className="text-green-400">더 큰 변화</span>가 됩니다
              </h2>
              <p className="font-inter text-white/[48%] text-[0.92rem] leading-[1.8] mb-[1.3rem] font-normal">
                완료한 챌린지를 피드에 공유하고, 다른 사용자의 실천을 확인하며 서로 응원하세요.
              </p>
              <div className="flex flex-col gap-[0.6rem]">
                {[
                  ['🌐', '커뮤니티 공유', '챌린지 인증 사진을 피드에 올리세요'],
                  ['👀', '다른 실천 보기', '다양한 사용자의 에코 챌린지를 확인'],
                  ['💚', '좋아요 → 토큰', '좋아요 3개당 +2,000 탄소 토큰 회복'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="text-[1rem] mt-px">{icon}</span>
                    <div>
                      <span className="text-[0.82rem] font-semibold">{title}</span>
                      <span className="font-inter text-[0.77rem] text-white/[38%] ml-[0.45rem]">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[6%] relative z-[1] py-28 bg-[rgba(34,197,94,0.015)]">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="text-[2.4rem] mb-[0.9rem]">🌱</div>
          <h2
            className="font-extrabold tracking-[-0.03em] leading-[1.12] mb-4"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)' }}
          >
            AI를 쓰기 전에<br /><span className="text-green-400">지구를 먼저</span> 생각하세요
          </h2>
          <p className="font-inter text-white/[42%] text-[0.9rem] leading-[1.75] mb-8 font-normal">
            10,000개의 탄소 토큰을 무료로 드립니다. 채팅, 챌린지, 피드까지 — 지금 바로 시작하세요.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-green-500 text-[#07100a] px-[2.2rem] py-[0.8rem] rounded-[9px] font-extrabold text-[0.95rem] tracking-[-0.01em] hover:opacity-90 transition-opacity"
          >
            무료로 시작하기 →
          </Link>
          <div className="font-inter mt-4 text-[0.75rem] text-white/20">
            신용카드 불필요 · 무료 시작
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[6%] py-[1.4rem] px-8 text-center text-white/[18%] text-[0.75rem] relative z-[1] font-inter">
        © 2026 Anoixi — 탄소 토큰 기반 AI 챗봇 서비스
      </footer>
    </div>
  )
}

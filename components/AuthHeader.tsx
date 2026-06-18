interface Props {
  title: string
  subtitle: string
}

export default function AuthHeader({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-8">
      <img src="/icon.png" alt="Anoixi" className="w-24 h-24 object-contain mb-4 mx-auto block" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  )
}

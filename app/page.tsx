export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Cost Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Track AI Costs<br />
          <span className="text-[#58a6ff]">by Product Feature</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Tag every AI API call with a feature label. Get instant cost breakdowns per product area — so you know exactly where your AI budget goes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $39/mo
        </a>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'SDK Instrumentation', desc: 'Drop-in wrappers tag every OpenAI / Anthropic call with a feature key.' },
            { title: 'Webhook Ingestion', desc: 'Push usage events from any stack. We aggregate tokens and cost in real time.' },
            { title: 'Feature Dashboard', desc: 'Visual cost breakdown by product area — filter by date, model, or team.' }
          ].map(f => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited feature tags',
              'Real-time cost dashboard',
              'Webhook + SDK ingestion',
              'OpenAI & Anthropic support',
              'CSV export',
              'Email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Tracking Costs
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How do I tag AI calls with a feature?',
              a: 'Wrap your existing OpenAI or Anthropic client with our SDK. Pass a feature key like "search" or "summarize" and we handle the rest.'
            },
            {
              q: 'Which AI providers are supported?',
              a: 'OpenAI and Anthropic are supported out of the box. Any provider can be tracked via our generic webhook endpoint.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. No contracts, no lock-in.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} PromptCost. All rights reserved.
      </footer>
    </main>
  )
}

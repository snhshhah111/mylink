export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4 py-12 transition-colors duration-500">
      
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-blue-400/10 dark:bg-blue-500/5 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-teal-400/10 dark:bg-teal-500/5 blur-[120px]" />
      </div>

      {/* Main Profile Container */}
      <div className="relative z-10 w-full max-w-md bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-zinc-800/40 shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-3xl hover:border-slate-300/40 dark:hover:border-zinc-700/40">
        
        {/* Profile Avatar with Glowing Border */}
        <div className="relative group mb-6">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-85 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-zinc-100 shadow-inner">
            승희
          </div>
        </div>

        {/* User Name */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
          황승희
        </h1>

        {/* Introduction / Bio */}
        <div className="mb-8">
          <p className="inline-block px-4 py-2 text-base font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100/50 dark:border-indigo-900/30">
            "문과하기 더럽게 힘드네."
          </p>
          <p className="mt-3 text-xs text-slate-500 dark:text-zinc-400 max-w-[280px] mx-auto leading-relaxed">
            비전공자의 관점에서 더 나은 세상을 위해 소프트웨어를 고민하고 설계합니다.
          </p>
        </div>

        {/* Link Items (Link-in-bio style) */}
        <div className="w-full flex flex-col gap-3.5">
          
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 bg-white/80 dark:bg-zinc-800/50 hover:bg-slate-50 dark:hover:bg-zinc-800/80 border border-slate-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center gap-3.5">
              <span className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl group-hover:bg-slate-200 dark:group-hover:bg-zinc-700 transition-colors">
                <svg className="w-5 h-5 text-slate-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
              <span className="text-slate-800 dark:text-zinc-200 font-semibold text-sm tracking-wide">GitHub</span>
            </div>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-zinc-300 transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:example@email.com"
            className="flex items-center justify-between w-full p-4 bg-white/80 dark:bg-zinc-800/50 hover:bg-slate-50 dark:hover:bg-zinc-800/80 border border-slate-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center gap-3.5">
              <span className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl group-hover:bg-slate-200 dark:group-hover:bg-zinc-700 transition-colors">
                <svg className="w-5 h-5 text-slate-700 dark:text-zinc-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-slate-800 dark:text-zinc-200 font-semibold text-sm tracking-wide">Email Contact</span>
            </div>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-zinc-300 transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Blog / Portfolio */}
          <a
            href="https://velog.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 bg-white/80 dark:bg-zinc-800/50 hover:bg-slate-50 dark:hover:bg-zinc-800/80 border border-slate-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center gap-3.5">
              <span className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl group-hover:bg-slate-200 dark:group-hover:bg-zinc-700 transition-colors">
                <svg className="w-5 h-5 text-slate-700 dark:text-zinc-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </span>
              <span className="text-slate-800 dark:text-zinc-200 font-semibold text-sm tracking-wide">Tech Blog</span>
            </div>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-zinc-300 transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

        </div>

        {/* Footer */}
        <p className="mt-8 text-[10px] text-slate-400 dark:text-zinc-500 tracking-widest font-semibold uppercase">
          © {new Date().getFullYear()} HWANG SEUNGHEE.
        </p>

      </div>
    </div>
  );
}

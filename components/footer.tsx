export function Footer() {
  return (
    <footer className="border-t border-slate-900/60 bg-slate-950/80 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">
            Connect with Me
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <a
                className="transition-colors hover:text-cyan-300"
                href="https://github.com/Otzzu"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-cyan-300"
                href="https://www.linkedin.com/in/mesach-harmasendro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-cyan-300"
                href="https://www.instagram.com/mesach31804/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-100">Contact</h2>
          <p className="mt-4 text-sm text-slate-300">
            Email:{" "}
            <span className="text-cyan-300">mesachharmasendro@gmail.com</span>
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Phone: <span className="text-cyan-300">+62 857 0028 7190</span>
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Mesach Harmasendro. All Rights
        Reserved.
      </div>
    </footer>
  );
}

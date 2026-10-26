
const projects = () => {
    const link = "https://amusadev.vercel.app/"
  return (
    <div className="space-y-4  p-4 w-fit">
      <h1 className="text-2xl lg:text-3xl tracking-wide font-mono font-semibold">Projects</h1>
      <div className="text-sm  dark:bg-forest-dark bg-surface-2 p-4 rounded-xl space-y-3">
          <p className="text-forest dark:text-gold-dark font-semibold tracking-wider font-mono">My Portfolio</p>
          <div className="flex flex-wrap gap-2">
                  <div  className="rounded-xl font-mono p-2 text-sm border bg-line border-line dark:bg-surface-2-dark  dark:border-ink-soft tracking-wider flex justify-center items-center gap-2">
                      <button className="cursor-pointer" onClick={() => window.open(link, "_blank")}>
                          https://amusadev.vercel.app/
                      </button>
                  </div>
          </div>
      </div>
      </div>

  )
}

export default projects

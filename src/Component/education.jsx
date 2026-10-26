
const education = () => {
  return (
      <div className="bg-forest border-2 border-ink-soft rounded-xl p-2 space-y-3">
          <div className="flex gap-2 items-center p-3">
              <div className="flex gap-2">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-sm tracking-wider text-ink-soft-dark font-mono">Education</p>
          </div>
          <hr className="border-t border-ink-soft" />
          <div className="p-3 tracking-wide font-mono">
              <p className="text-gold-dark">commit 8a1c9f2</p>
              <div className="flex gap-2 items-center text-ink-soft-dark flex-wrap">
                  <p>Tai Solarin Federal University of Education (TASUED) </p>
                  -
                  <p>Date: 2021- 2025</p>
              </div>
              <div className="p-3">
                  <p className="text-bg">
                      B.Sc in Agricultural Science and Education
                  </p>
                  <p className="text-ink-soft-dark">
                      Ijagun, Ogun State,
                  </p>
              </div>
          </div>

      </div>
  )
}

export default education

import Picture1 from "../assets/1.jpeg"
import Picture2 from "../assets/2.jpeg"
import Picture3 from "../assets/3.jpeg"
import Picture4 from "../assets/4.jpeg"
import Picture5 from "../assets/5.jpeg"
import Picture6 from "../assets/6.jpeg"
import Picture7 from "../assets/7.jpeg"
import Picture8 from "../assets/8.jpeg"
import Picture9 from "../assets/9.jpeg"
import Picture10 from "../assets/10.jpeg"

const others = () => {
    const Picture = [
        { id: 1, name: Picture1 }, { id: 2, name: Picture2 }, { id: 3, name: Picture3 },
        { id: 4, name: Picture4 }, { id: 5, name: Picture5 }, { id: 6, name: Picture6 },
        { id: 7, name: Picture7 }, { id: 8, name: Picture8 }, { id: 9, name: Picture9 },
        { id: 10, name: Picture10 },
    ]
  return (
      <div className="space-y-4  p-4 w-fit">
          <h1 className="text-2xl lg:text-3xl tracking-wide font-mono font-semibold">Others</h1>
          <div className="text-sm  dark:bg-forest-dark bg-surface-2 p-4 rounded-xl space-y-3">
              <p className="text-forest dark:text-gold-dark font-semibold tracking-wider font-mono">Pictures with family & friends</p>
              <div className="flex flex-wrap gap-2">
                  <div className="bg-bg flex flex-row w-full h-100 overflow-x-auto snap-x snap-mandatory scroll-smooth">
                    {Picture.map(p => (
                        <div key={p.id} className="w-full h-full shrink-0 snap-start">
                            <img className="w-full h-full object-fit" src={p.name} alt="my pictures" />
                        </div>
                    ))}
                  </div>
              </div>
              <p className="text-forest dark:text-gold-dark font-semibold tracking-wider font-mono">Scroll to see more</p>

          </div>

      </div>
  )
}

export default others

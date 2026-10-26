import Picture from "../assets/HeaderPicture.jpeg"

const header = () => {
    return (
        <div className="flex flex-col sm:flex-row p-5 justify-center gap-5">
            <div className="p-2 bg-gold  flex gap-3 flex-wrap justify-center">
                <img className="h-60 w-60 object-cover" src={Picture} alt="my picture" />
                <div className="text-center mt-4 text-bg-dark font-mono">
                    <h1 className="text-2xl tracking-wider font-bold ">Amusa Abdullah Ifeoluwa</h1>
                    <p>Frontend Web Developer</p>
                    <p>amusaabdullah1234@gmail.com</p>
                    <p>08156345656</p>
                </div>
            </div>            
        </div>
    )
}

export default header

import Image from 'next/image'



function Hero() {

  const heroStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1620405116976-f735da963c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '90%',
    height: '350px',
};

    return (
        <div className='bg-white p-4 font-sans justify-center items-center mx-20' style={heroStyle}>
            <div className="flex justify-start items-center">
                
                <div className="w-2/5">
                    <div className="bg-opacity-80  text-left p-8">
                        <h1 className="text-4xl text-left font-bold my-9 text-green-900">
                            Grab upto 50% off on selected Headphones
                        </h1>
                        <button className="bg-green-900  hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="w-1/2"></div>
            </div>
        </div>
    );
}

export default Hero;

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
          alt="Luxury car showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-eurostile-extended mb-6">
            RIFT CARS
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Experience luxury and performance like never before
          </p>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Sport Coupe",
              image: "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg",
              price: "$85,000"
            },
            {
              name: "Luxury Sedan",
              image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg",
              price: "$92,000"
            },
            {
              name: "Executive SUV",
              image: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg",
              price: "$78,000"
            }
          ].map((car, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-xl text-gray-600">{car.price}</p>
                <button className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Car?</h2>
          <p className="text-xl mb-8">
            Visit our showroom or schedule a test drive today
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  )
}
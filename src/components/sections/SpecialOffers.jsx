const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Offer */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Special Offer 1"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-indigo-600/70 flex flex-col justify-center p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Summer Sale</h3>
              <p className="text-lg text-indigo-100 mb-6">Get up to 50% off on selected items</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold w-fit hover:bg-indigo-50 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Second Offer */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Special Offer 2"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-indigo-600/70 flex flex-col justify-center p-8">
              <h3 className="text-3xl font-bold text-white mb-4">New Arrivals</h3>
              <p className="text-lg text-indigo-100 mb-6">Check out our latest collection</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold w-fit hover:bg-indigo-50 transition-colors duration-300">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
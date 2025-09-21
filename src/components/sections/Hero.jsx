const Hero = () => {
  return (
    <div className="bg-indigo-700 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-lg md:text-xl text-indigo-200 mb-8">
              Shop the latest trends with confidence. Quality products, competitive prices, and exceptional service.
            </p>
            <div className="space-x-4">
              <a
                href="/products"
                className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors duration-300"
              >
                Shop Now
              </a>
              <a
                href="/categories"
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors duration-300"
              >
                Browse Categories
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-indigo-600 rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Featured Products"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
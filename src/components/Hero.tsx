
const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://static.vecteezy.com/system/resources/previews/002/177/688/mp4/italian-pizza-near-fire-free-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-white">Welcome to </span>
         
            {/* Handwriting-style Text */}
    <span className="font-handwriting text-6xl md:text-8xl text-orange-500">
      Calzone Point
    </span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
          Where Every Bite is a Delight
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            View Menu
          </a>
          <a
            href="#deals"
            className="inline-block bg-transparent border-2 border-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-500/10 transition-colors duration-300"
          >
            Special Deals
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
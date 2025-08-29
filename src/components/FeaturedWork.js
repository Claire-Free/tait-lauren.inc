



const FeaturedWork = () => {
  const works = [ "ornament1, ornament2, ormament3"];

  return (
    <section id="services" className="py-20 bg-sand-100">
      <h2 className="text-4xl text-center font-serif text-aquamarine mb-12">Our Featured Work</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition">
            <img src={work} alt={`Work ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;

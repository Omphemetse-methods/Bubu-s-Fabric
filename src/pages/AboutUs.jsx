const AboutUs = (props) => {
  return (
    <section className="flex justify-center text-center pt-12">
      <div className="w-7/12 space-y-8">
        <p className="text-4xl font-sans antialsed font-bold text-gray-900">
          About us
        </p>
        <p className="text-sm text-gray-600 font-serif">
          Born in 2021,It starts with our designers who imagine the most
          relevant designs of today and tomorrow. It extends to our
          manufacturers who obsess over materials and details. It culminates
          with the direct delivery to you, ensuring the highest quality at the
          lowest possible prices. Our 6 design values guide everything we do.
        </p>

        <img
          src="https://source.unsplash.com/nWAlCB1tyvc/1600x900"
          className="h-96 w-full object-cover rounded shadow"
        />

        <p>Hem Design Studio In Stockholm</p>
        <p className="text-sm text-gray-600 font-serif">
          The Hem Design Studio at Eastmansvägen 12A in Stockholm is our
          headquarters and core. From here, we develop new products and manage
          the daily global operations. We have gathered some of the brightest
          design lovers, and a multitude of languages can be heard between the
          fabric samples, color swatches, prototypes, and computer screens.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

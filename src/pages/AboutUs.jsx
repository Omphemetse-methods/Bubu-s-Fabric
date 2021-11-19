const AboutUs = (props) => {
  return (
    <section className="flex justify-center pt-12">
      <div className="w-7/12 space-y-8">
        <p className="text-4xl font-sans antialsed font-bold text-gray-900 text-center">
          About us
        </p>
        <section>
          <p>
            Born in 2021,Bubu's Fabric does not only pride itselves with qualify
            craftsmanship but values client relation. It started with a son and
            a mother. We operate from North West, where we develop new products
            and manage the daily global operations.
          </p>
          <p>
            We can help you define the right materials for your design and where
            to find them. Experience in the industry provides a complete library
            of fabric, trimming, harbor dashery, and ancillary service contacts.
          </p>
        </section>

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

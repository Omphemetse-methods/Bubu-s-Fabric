import { Link } from "react-router-dom";
import shippingIcon from "./imgs/ship.png";
import timeIcon from "./imgs/time.png";
import packageIcon from "./imgs/package.png";
import productxIcon from "./imgs/productx.jpg";

const Home = (props) => {
  return (
    <section className="w-full mih-h-screen space-y-12 font-patrick">
      <img
        key="a"
        src="https://source.unsplash.com/FLzsXmNpNY8/1600x900"
        className="w-full object-cover shadow"
        style={{
          height: "50vh",
        }}
      />
      <section className="flex justify-center">
        <section className="w-11/12 md:w-5/12">
          <p key="b" className="text-center filter blur">
            At Bubu's Fabric, our goal is to improve the quality of every piece
            that we make. We believe that manufacturing is a sacred process. We
            care about what we make and not willing to sacrifice qualify for
            speed. We seek clients who value our labour and skill and have a
            design-focused product.
          </p>
        </section>
      </section>

      <section className="flex justify-center">
        <Link to="/about">
          <button className="btn btn-primary px-12 py-6">Our story</button>
        </Link>
      </section>

      <section className="flex flex-col items-center justify-center space-y-1">
        <p className="text-center text-4xl font-bold">
          A better way in clothing
        </p>
        <section className="w-10/12 grid grid-cols-3 gap-4 p-10 rounded text-center text-xs font-sans">
          <div className="space-y-4 flex flex-col items-center">
            <img src={packageIcon} className="w-12 h-12 object-cover" />
            <p>Packaging</p>
            <p>Folding, tagging, wrapping, labeling are all possible.</p>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <img src={shippingIcon} className="w-12 h-12 object-cover" />
            <p>Shipping</p>
            <p>
              We can send our product directly to our customers. Orders can be
              packed and shipped through multiple sales channels and carriers,
              whether wholesale or retail.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <img src={timeIcon} className="w-12 h-12 object-cover" />
            <p>Time</p>
            <p>
              Time is of the essence. One of our "Quality objectives" is "On
              Time Delivery"
            </p>
          </div>
        </section>
      </section>

      <section className="flex justify-center">
        <section className="w-10/12 p-10 grid grid-cols-2 items-center gap-4">
          <div className="space-y-6">
            <p className="filter blur">Cooper Kettle</p>
            <p className="filter blur">
              All product photography and description is provided by the lovely
              folks at The Good Liver. This is a real product you can purchase
              at Good Liver. This kettle is made of copper that has very good
              heat conductivity and is naturally antibacterial. The surface of
              the kettle has a wax coating to avoid oxidation during
              transportation. Before your first use, wash the wax off with mild
              soap on a non-abrasive sponge. Enjoy a gradual color change to
              amber as it gets oxidized. Always fill the water at least to the
              spout level. Be careful not to boil an empty kettle. This will
              result in a broken spout, handle, and lid, which can cause fire.{" "}
            </p>
            <p className="text-blue-600">View the full product</p>
          </div>
          <div className="bg-gradient-to-l from-purple-300 to-gray-50 p-4">
            <img src={productxIcon} className="h-auto w-full object-cover" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;

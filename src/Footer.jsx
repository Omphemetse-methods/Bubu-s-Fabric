import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className="flex justify-center">
      <section className="w-5/12">
        <p>Footer</p>
        <div className="grid grid-cols-3">
          <section className="">
            <p>Items 1 </p>
          </section>
          <section>
            <p>Items 2 </p>
            <Link to="/terms_of_service">Terms of Service</Link>
          </section>
          <section>
            <p>Items 3 </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Footer;

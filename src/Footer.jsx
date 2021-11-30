import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className="filter blur flex justify-between border-t-2 border-gray-100 bg-gray-200">
      <p>Footer</p>
      <div className="grid grid-cols-3">
        <section className="">
          <p>Items 1 </p>
        </section>
        <section>
          <p>Items 2 </p>
          <Link to="/terms-of-service">Terms of Service</Link>
        </section>
        <section>
          <p>Items 3 </p>
        </section>
      </div>
    </section>
  );
};

export default Footer;

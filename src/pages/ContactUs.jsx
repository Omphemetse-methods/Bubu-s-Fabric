import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactUs = (props) => {
  return (
    <section className="flex justify-center">
      <section className="w-6/12 space-y-8">
        <div className="space-y-10">
          <p className="text-center text-4xl font-bold text-gray-800 font-sans">
            Contact Us
          </p>
          <p className="text-center text-sm font-sans text-gray-700">
            We are here to help! Just send us an email, call us or use the form
            below to get in touch. Our office hours are 10 am - 5 pm GMT+1 (6 am
            - 11 am ET).
          </p>
        </div>

        <Formik
          initialValues={{ name: "", email: "", phone_number: "", message: "" }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <section className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Name</label>
                  <Field name="name" type="text" className="rounded" />
                </div>
                <div className="flex flex-col">
                  <label>Email</label>
                  <Field name="email" type="email" className="rounded" />
                </div>
              </section>
              <section className="flex flex-col">
                <label>Phone Number</label>
                <Field name="phone_number" type="tel" className="w-full " />
              </section>
              <section className="flex flex-col">
                <label>Message</label>
                <Field name="message" as="textarea" type="text" />
              </section>
              <section className="flex justify-end">
                <button className="btn btn-primary px-12 py-2">Send</button>
              </section>
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default ContactUs;

import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header.js';
import Layout from "./../styles/layout.js";
import {TextBox, TextBox2} from './components/Textbox.js';

export default function privacy() {
  return (
    <Layout>
        <Head>
              <title>Little Om Yoga - Privacy Policy</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga - Privacy Policy"
                  key="title"
              />
        </Head>
        <Header
          title = "Privacy Policy"
          image = "./images/about.png"
        />
        <div className = "mx-[100px]">
          <p className = "text-orange text-4xl font-bold font-['Boska-Variable'] leading-9">Privacy Policy</p>
          <hr className = "h-[2px] w-[120px] my-3 border-0 bg-orange "/>
          <p className = "text-2xl font-['GeneralSans-Variable'] indent-8">
                Privacy Policy for Little Om Yoga

                Last Updated: 11/5/2023

                At Little Om Yoga, we are committed to protecting your privacy. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your personal information when you use our website or interact with our services.

                Information We Collect:

                Personal Information: We may collect personal information such as your name, email address, phone number, and other contact details when you voluntarily provide it to us, for example, when you inquire about our services or sign up for a class.

                Usage Information: We may automatically collect information about your use of our website, such as your IP address, browser type, and device information.

                How We Use Your Information:

                We use your personal information for the following purposes:

                To respond to your inquiries, provide information about our services, and connect you with our company.
                To process bookings for classes or treatments.
                To communicate with you about our services, promotions, and updates (if you opt in to receive such communications).
                To improve our website and services by analyzing usage patterns and trends.
                Sharing Your Information:

                We do not share your personal information with third parties for advertising purposes. Your information is only shared with our employees and authorized service providers who need it to fulfill your requests or provide services.

                Cookies and Tracking:

                We may use cookies and similar tracking technologies to improve your browsing experience on our website.

                Data Security:

                We implement reasonable security measures to protect your personal information. However, please be aware that no method of data transmission over the Internet is 100% secure.

                Your Choices:

                You can update your personal information or opt out of marketing communications at any time by contacting us.

                Access to Your Information:

                You can request access to your personal information or ask for it to be corrected or deleted by contacting us.

                Changes to this Privacy Policy:

                We may update this Privacy Policy to reflect changes to our information practices. We will notify you of any significant updates.

                Contact Us:

                If you have any questions or concerns about this Privacy Policy or our data handling practices, please contact us through our contact form.

                By using our website, you agree to the terms of this Privacy Policy.


            </p>
        </div>
    </Layout>
  );
}
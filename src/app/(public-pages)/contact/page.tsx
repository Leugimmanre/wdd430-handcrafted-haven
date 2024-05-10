import { Brand } from "@/app/components/brand/Brand";
import { MainMenu } from "@/app/components/main-menu/MainMenu";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Handcrafted Haven",
  description: "SEO Title",
  keywords: ["Contact Page"],
};

export default function ContactPage() {
  return (
    <>
      <Brand/>
      <MainMenu orientation="horizontal" />

      <div className="flex flex-col items-center justify-top min-h-screen px-4 py-8 bg-gray-50 text-gray-700">
        <h1 className="text-5xl text-center mb-10 font-bold">Contact Us</h1>

        <div className="max-w-4xl space-y-8">
          <p className="text-lg text-center">
            If you have any questions or need further information, please feel
            free to contact us. Our team is ready to assist you and provide the
            information you need.
          </p>

          <div className="mt-8">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <Link
                  href={'/contact'}
                  type="submit"
                  className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </Link>
              </div>
            </form>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg">Alternatively, you can reach us at:</p>
            <p className="text-lg">Email: contact@handcraftedhaven.com</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </>
  );
}

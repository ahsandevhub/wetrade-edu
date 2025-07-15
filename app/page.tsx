import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <header className="bg-sky-700 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">WeTradeEDU</h1>
          <p className="mt-2">Digital Marketing Solutions</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold">Grow your online presence</h2>
          <p className="mt-4 text-lg">
            We help businesses reach new customers with targeted digital campaigns.
          </p>
        </section>

        <section className="grid gap-8 sm:grid-cols-3 mb-12">
          <div className="p-4 border rounded">
            <h3 className="font-bold mb-2">SEO Optimization</h3>
            <p>
              Improve your website ranking on search engines with our expert SEO services.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold mb-2">Social Media Marketing</h3>
            <p>
              Engage with your audience and build your brand across social media platforms.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold mb-2">Content Creation</h3>
            <p>
              High quality content that attracts, informs, and converts potential customers.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>info@wetradedu.com</p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} WeTradeEDU. All rights reserved.</p>
      </footer>
    </div>
  );
}

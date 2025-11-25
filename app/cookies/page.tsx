'use client'

import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0F1217] text-white pt-32 px-6 md:px-24 xl:px-32 2xl:px-[252px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookies Policy</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. The Cookies We Set</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These are cookies that are required for the operation of our website.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;

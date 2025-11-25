'use client'

import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-[#0F1217] text-white pt-32 px-6 md:px-24 xl:px-32 2xl:px-[252px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p>
              By accessing our website, you agree to be bound by these Terms of Use and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Juan Silva and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Restrictions</h2>
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>publishing any Website material in any other media;</li>
              <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>publicly performing and/or showing any Website material;</li>
              <li>using this Website in any way that is or may be damaging to this Website;</li>
              <li>using this Website in any way that impacts user access to this Website;</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitation of Liability</h2>
            <p>
              In no event shall Juan Silva, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Juan Silva, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

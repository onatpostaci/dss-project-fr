// components/SubscriptionPanel.tsx

import React from "react";

interface SubscriptionPlan {
  name: string;
  price: string;
  features: string[];
  mostPopular?: boolean;
}

const plans: SubscriptionPlan[] = [
  {
    name: "Basic Plan",
    price: "$9.99/mo",
    features: [
      "Monthly 30 Snippets",
      "No keywords",
      "GPT 3.5 Support",
      "Email Notifications",
    ],
  },
  {
    name: "Professional Plan",
    price: "$39.99/mo",
    features: [
      "Monthly 200 Snippets",
      "Providing along with keywords",
      "Priority Support",
      "GPT 4 Support",
      "CRM Service",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise Plan",
    price: "$299.99/mo",
    features: [
      "Unlimited Snippet Generation",
      "Unlimited Keyword Generation",
      "GPT 4 Support",
      "CRM Service",
      "B2B Solutions",
      "API Access",
    ],
  },
  {
    name: "Customized Plan",
    price: "Dynamic Price",
    features: ["According to the plan"],
  },
];

const SubscriptionPanel: React.FC = () => {
  return (
    <>
      <div className="padding-x padding-y max-width">
        <h1 className="text-4xl font-extrabold">Pricing Options</h1>
        <p>Explore the Available Pricing Options</p>
      </div>

      <div className="flex flex-row justify-center items-stretch gap-4 p-20 max-width">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col justify-between w-full md:w-1/3 bg-white rounded-lg border border-gray-200 shadow-md p-4 ${
              plan.mostPopular ? "ring-2 ring-indigo-300" : ""
            }`}
          >
            <div>
              {plan.mostPopular && (
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-800 bg-indigo-200 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="mb-4 text-2xl font-semibold text-gray-700">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-gray-900">{plan.price}</p>
              <ul className="my-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    {/* Include SVG check icon or replace with your icon component */}
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`w-full px-6 py-3 mt-4 ${
                plan.mostPopular
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-800 hover:bg-gray-900"
              } text-white font-semibold rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubscriptionPanel;

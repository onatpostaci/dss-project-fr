// components/checkout/CardDetails.tsx
"use client";
import React, { useState } from "react";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 12 }, (_, i) => currentYear + i);
const months = Array.from({ length: 12 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

const CardDetails: React.FC = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          {/* Cardholder Name Field */}
          <div className="mb-4">
            <label
              htmlFor="cardName"
              className="block text-sm font-medium text-gray-700"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
              placeholder="Name as it appears on card"
              required
            />
          </div>

          {/* Card Number Field */}
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              maxLength={19}
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          {/* Expiry Date and CVC Fields */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="cardExpiryMonth"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Month
              </label>
              <select
                id="cardExpiryMonth"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
              >
                <option value="">Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="cardExpiryYear"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Year
              </label>
              <select
                id="cardExpiryYear"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CVC Field */}
          <div className="mb-4">
            <label
              htmlFor="cardCVC"
              className="block text-sm font-medium text-gray-700"
            >
              CVC
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              id="cardCVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
              placeholder="CVC"
              required
            />
          </div>
        </div>

        {/* Card Visual Representation */}
        <div className="lg:w-1/2 flex justify-center items-center lg:pl-4">
          <div className="max-w-sm w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <p className="text-xs">Cardholder Name</p>
              <p className="font-medium">{cardName || "Your Name Here"}</p>
            </div>
            <div className="mb-4">
              <p className="text-xs">Card Number</p>
              <p className="font-medium">
                {cardNumber
                  .replace(/\D/g, "")
                  .replace(/(\d{4})(?=\d)/g, "$1 ") || "**** **** **** ****"}
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-xs">Expiry</p>
                <p className="font-medium">
                  {expiryMonth}/{expiryYear.slice(-2)}
                </p>
              </div>
              <div>
                <p className="text-xs">CVC</p>
                <p className="font-medium">
                  {cvc.replace(/\D/g, "").replace(/./g, "*")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pay Now Button */}
      <div className="flex justify-center lg:justify-start mt-6">
        <button className="bg-red-600 text-white py-3 px-6 rounded-lg shadow hover:bg-red-700 transition-colors duration-300">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CardDetails;

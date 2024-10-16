"use client";

import { useState } from "react";

import { SAVING_SCHEME } from "@/config/saving_scheme.config";

import { dmSerifDisplay } from "@/lib/fonts";

interface SchemeState {
  name: string;
  state: boolean;
}

export default function SavingScheme() {
  const [schemeState, setSchemeState] = useState<SchemeState[]>([]);

  const toggleScheme = (schemeName: string) => {
    setSchemeState((prev) => {
      const schemeExists = prev.find((scheme) => scheme.name === schemeName);
      if (schemeExists) {
        return prev.map((scheme) =>
          scheme.name === schemeName
            ? { ...scheme, state: !scheme.state }
            : scheme
        );
      } else {
        return [...prev, { name: schemeName, state: true }];
      }
    });
  };

  return (
    <div className="mt-20 md:mt-24 px-2 md:px-12 min-h-screen pb-8">
      <h1
        className={`font-bold text-3xl lg:text-9xl ${dmSerifDisplay.className} uppercase`}
      >
        Gayathri Jewellers
      </h1>
      <p className="text-base lg:text-2xl text-muted-foreground lg:ml-3">
        Small and easy installments with big savings.
      </p>

      <div className="lg:ml-3 mt-3 md:mt-6 lg:mt-12 h-full">
        {SAVING_SCHEME.map((scheme, index) => {
          const activeScheme = schemeState.find(
            (_scheme) => _scheme.name === scheme.name
          );
          const isActive = activeScheme ? activeScheme.state : false;

          return (
            <div
              key={index}
              onClick={() => toggleScheme(scheme.name)}
              className={`cursor-pointer border-b p-2 md:p-4 hover:bg-slate-100 transition-all duration-300 ${
                isActive
                  ? "h-fit md:h-[200px] lg:h-[300px]"
                  : "h-fit md:h-[60px] lg:h-[100px]"
              }`}
            >
              <p
                className={`font-medium text-3xl lg:text-6xl ${dmSerifDisplay.className} `}
              >
                {scheme.name}
              </p>
              {isActive && (
                <div className="text-lg mt-3 md:mt-6 ml-3 md:ml-6 text-pretty whitespace-normal break-before-all">
                  <ul>
                    {scheme.description
                      .split(".")
                      .filter((sentence) => sentence.trim() != "")
                      .map((sentence, index) => (
                        <li
                          key={index}
                          className="list-disc text-xs md:text-base"
                        >
                          {sentence.trim()}.
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

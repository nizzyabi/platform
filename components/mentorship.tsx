import { HighlighterItem, HighlightGroup } from "./highlighter";
import Link from "next/link";
import { Particles } from "./particles";
import { ArrowRight, Check } from "lucide-react";
import { useCallback, useId, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const tiers = [
  
  {
    name: "What is coding tutoring?",
    price: 60,
    description: "",
    features: ["10 Lessons / month", "Private Discord", "Weekly Check-ins", "Unlimited Texts", "Build Projects Together", "Personal Learning Plan", "Code Review Sessions", "Lifetime Free Access To Courses", "Job Search Help"],
    cta: "Scale Up",
  },
];

const _useColor = (hash: string): [number, number, number] => {
  return useMemo(
    () => [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ],
    [hash],
  );
};

export const Mentorship: React.FC = () => {
  return (
    <section className=" landing pb-40">
      {/* Radial gradient */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity" />
        </div>
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div>
          {/* Content */}
          <div className="text-center pb-5 pt-40 mb-12">
            <h1 className="font-bold text-7xl mx-6"> 1-on-1 Tutoring</h1>
            <p className="text-md text-slate-100/40 pt-1">Get personal advice, mentorship, & guidance to learn code faster!</p> 
            <div className="flex items-center justify-center">
                <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
            </div>
            
        </div>
          {/* Pricing tabs */}
          <HighlightGroup className=" flex items-center justify-center">
            {/* Box #1 */}

            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="h-full w-[500px]"
                
              >
                <HighlighterItem>
                  <div className="h-full bg-zinc-900 rounded-[inherit]">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
                      quantity={(i + 1) ** 2 * 10}
                      color={["#34d399", "#fde047", "#f43f5e"][i]}
                      vy={-0.2}
                    />
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}

                      <div className="p-8">
                        <h3 id={tier.name} className="text-lg font-semibold leading-8">
                          {tier.name}
                        </h3>

                        <h3 className="inline-flex items-baseline pb-1 mt-6 font-bold text-slate-200">
                          <span className="text-4xl">${tier.price}</span>
                          <span className="text-lg">/ lesson</span>
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-zinc-400">{tier.description}</p>
                        <ul role="list" className="mt-8 text-md space-y-3 leading-6 text-zinc-300">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <Check
                              className={cn("h-6 w-5 flex-none", {
                                "text-purple-400": true,
                              })}
                            />
                          {feature}
                          </li>
                        ))}
                        </ul>
                        <Link
                          className="mt-16 w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          href="/overview"
                        >
                          Apply{" "}
                          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            ))}
            <div className="h-full md:col-span-6 lg:col-span-12  group/item" >
              <HighlighterItem>
                <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
                    quantity={200}
                  />
                  <div className="flex flex-col">
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </div>
      </div>
    </section>
  );
};
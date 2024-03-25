import { HighlighterItem, HighlightGroup } from "./highlighter";
import Link from "next/link";
import { Particles } from "./particles";
import { ArrowRight, Check } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const tiers = [
  
  {
    name: "Tutoring with others",
    description: "",
    features: ["10 Lessons / month", "Private Discord", "Weekly Check-ins"],
    
  },
  {
    name: "Tutoring with Nizar",
    description: "",
    features: ["10 Lessons / month", "Private Discord", "Weekly Check-ins", "Unlimited Texts", "Build Projects Together", "Personal Learning Plan", "Code Review Sessions", "Lifetime Free Access To Courses", "Job Search Help"],
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
    <section className=" landing pb-40 text-center">
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
          <div className="text-center pb-5 pt-40">
            <h1 className="font-bold text-7xl mx-6"> 1-on-1 Tutoring</h1>
            <p className="text-md text-slate-100/40 pt-1">Get personal advice, mentorship, & guidance to learn code faster!</p> 
            <div className="flex items-center justify-center">
                <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
            </div>
            
        </div>

        <div className="flex items-center justify-center">
        <iframe src="https://player.vimeo.com/video/918976093?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" className="aspect-video sm:w-[600px] md:w-[900px] sm:px-20"></iframe>
        </div>

        <div>
          <h1 className="font-bold text-4xl mx-6">What's included?</h1>
        </div>

        <div>
          <h1 className="font-bold text-4xl mx-6">Why tutor with Nizar?</h1>
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
                          href="https://calendly.com/nizabizaher/programming-tutoring-consultation"
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
          </HighlightGroup>
        </div>
      </div>
    </section>
  );
};
import Image from "next/image";
import { AlertTriangle, Calendar, GitMerge, LayoutDashboard, Rocket, Settings } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      name: "Learn faster",
      description: "Get the benefits of learning to code, without the mistakes",
    },
    {
      icon: AlertTriangle,
      name: "Stay Focused",
      description: "Stay focused on what you need to learn and not get distracted by other things",
    },
    {
      icon: Calendar,
      name: "Weekly Check-ins",
      description: "Get weekly check-ins to see how you're doing and what you need help with",
    },
    {
      icon: GitMerge,
      name: "Build Projects Together",
      description: "Build projects (with me) to learn how to code and get real-world experience",
    },
  ];
  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className=" pt-12 pb-12  md:pb-20">
          <div>
            {/* Section content */}
            <div className="flex flex-col max-w-xl mx-auto md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div
                className="order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center"
                
              >
                {/* Content #1 */}
                <div>
                  <div className="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-200">
                    Don't drown in alerts
                  </div>
                </div>
                <h3 className="pb-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-pink-500">
                  Why Tutor With Nizar?
                </h3>
                <p className="mb-8 text-lg text-zinc-400">
                If there's one thing I'm good at, it's coding. I've been through it, have made mistakes, and have learnt to code on my own and I feel that I can teach you how to code much faster than I did as you won't make the same mistakes as I did
                </p>
                <dl className="max-w-xl grid grid-cols-1 gap-4 lg:max-w-none">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="px-2 py-1 rounded group hover:bg-zinc-100 duration-500"
                    >
                      <div className="flex items-center mb-1 space-x-2 ">
                        <feature.icon className="w-4 h-4 shrink-0 text-zinc-300 group-hover:text-zinc-950 duration-500" />
                        <h4 className="font-medium text-zinc-50 group-hover:text-zinc-950 duration-500">
                          {feature.name}
                        </h4>
                      </div>
                      <p className="text-sm text-left text-zinc-400 group-hover:text-zinc-950 duration-500">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex max-w-2xl mx-auto mt-16 md:w-5/12 lg:w-1/2 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="z-10 flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
                  <Image
                    src="voice.svg"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="w-[76rem] z-10 rounded-xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
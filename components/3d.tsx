"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaDiscord } from "react-icons/fa";
import { Avatar } from "@mui/material";


const testimonials = [
  {
    username: 'Paulos',
    avatar: 'https://gravatar.com/avatar/ad5b45db418a29f641113bdfb0554a95c8e271525ec502d4e5797b9af7dbebd4',
    message: "I have been learning to code for a while now, and I have to say that Nizar's channel has been a great help. The discord community is so helpful, and the content is top-notch :)."
  },
  {
    username: 'Solomon.chidera',
    avatar: 'https://cdn.discordapp.com/attachments/1204776172827967499/1210972004375728180/20240214_095956.jpg?ex=65ec8090&is=65da0b90&hm=fc8ec11a3bea79b14ce5eed10e368e9b1984327a27bbc1944c8033e86a61c597&',
    message: "Discovered this server on YouTube, and it's been a pleasant surprise. The community here is so welcoming, and the content is genuinely helpful, unlike some others out there just looking to grab your attention and money."
  },
  {
    username: 'Liambrewster',
    avatar: 'https://cdn.discordapp.com/attachments/1201698978836791307/1210975157191974942/IMG_6318.JPG?ex=65ec8380&is=65da0e80&hm=316acb1d8b2c9bc0237cf51e4ef2105425c012f2a47188b1cd719cc6af5789eb&',
    message: "Nizar’s breakdown of project building in live streams and videos is simply brilliant. His clear, easy-to-follow approach has made a significant impact on my understanding and confidence to get building! Highly recommended!"
  },
  {
    username: 'JonasDieNuss',
    avatar: 'https://cdn.discordapp.com/attachments/1186699937535246418/1210975422930485288/J_Logo.jpeg?ex=65ec83bf&is=65da0ebf&hm=d7f036d50227a4f8120f64859870855b83d4ed2724e1a0f085d292fc6a07eb0e&',
    message: "Nizar on YT has been a game-changer for me! His educational and entertaining videos really helped me get back into coding, improve my skills, and establish better routines. I owe a lot of my progress to his guidance and suggestions."
  },
  {
    username: 'Tiernandefranco',
    avatar: '/teir.webp',
    message: "Nizar's channel came into my recommended shortly after I had finished learning basic web development, and despite originally attempting to leverage my skills in a regular career, his videos showcasing him building his startup pulled me back into pursuing an idea I had semi-given up on."
  },
  {
    username: 'Paulcam',
    avatar: 'https://cdn.discordapp.com/attachments/1180473556774158336/1210967407154172014/230135c5-fc03-41ed-a086-7705d757de61.jpg?ex=65ec7c48&is=65da0748&hm=3da4c4c842a166d29c5cb1e0c2c5256995757ea5db270791e29acf700f763ad4&',
    message: "Nizar has built an extraordinary community that I'm proud to be a part of. Surrounded by individuals eager to learn and help each other in tech and business, it has become the ideal environment for developing startup ideas and advancing open-source projects."
  },
  {
    username: 'Amanbhujel',
    avatar: 'https://cdn.discordapp.com/attachments/1190319111260090389/1210968399312855151/luffy.jpg?ex=65ec7d35&is=65da0835&hm=e6293b2fc12a44a52e799881bb22618a1edec98f726bfbe9634896fe0889bdb0&',
    message: "After watching Nizar's videos, I've been inspired to pursue my own business venture, and I'm confident he'll become a remarkable entrepreneur and influencer."
  },
  {
    username: 'Bacio001',
    avatar: 'https://cdn.discordapp.com/avatars/173347297181040640/1a023122f852e79a33ac66edd9f74225.png?size=2048',
    message: "Nizar helped me keep motivation in my own startup, and his videos are also nice to listen to while coding by myself."
  },
  {
    username: 'Dominikdev',
    avatar: '/dominik.png',
    message: "Nizar's videos have significantly improved my coding skills and helped me learn new things. The positive atmosphere of his Discord community is also enjoyable."
  },
  
  {
    username: 'Calculuscoder',
    avatar: 'https://cdn.discordapp.com/attachments/1199203733691703376/1210980909155618896/IMG_9874.JPG?ex=65ec88db&is=65da13db&hm=abf0d282a9bb36bcb2e3de4d9353be127ccd8521be046f75eff38e0acd1a41c4&',
    message: "Nizar has been a great friend, leader, and instructor in the software development field. I've closely followed his videos and YouTube channel for several months and his content is amazing."
  },
  {
    username: 'Gorlami',
    avatar: '/mbdtf.jpeg',
    message: "Nizar's content consistently delivers valuable insights and entertainment in equal measure. Proud to be a part of your community!"
  },
  {
    username: '3.ba',
    avatar: 'https://cdn.discordapp.com/avatars/620561426242601021/a448102d43f073772e10cefb4b4a490b.png?size=1024',
    message: "Nizar is the reason why i'm continue working on my project because of his motivate videos on his youtube channel"
  },
  
  
]

export function ThreeD() {
  return (
    // Adjusted the gap class to a smaller value, e.g., gap-2 for tighter spacing
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:px-20 xl:px-40 2xl:px-10 items-start gap-2">
      {testimonials.map((testimonial, index) => (
        <CardContainer className="" key={testimonial.username}>
          <CardBody className="bg-[#131212] relative group/card border-slate-100/20   h-auto rounded-xl px-6 py-3 border ">
            <div className="flex justify-between">
              <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-slate-100 flex space-between items-center"
              >
                  <div className="flex">
                    <Avatar src={testimonial.avatar} alt={testimonial.username} />
                    <p className="pt-3 pl-2">@{testimonial.username}</p>
                  </div>
              </CardItem>
              <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-slate-100 flex space-between items-center"
              >
                  <p><FaDiscord className="text-blue-500 text-5xl"/></p>
              </CardItem>
            </div>
            
            <CardItem className="font-medium pt-4 opacity-50">
                <p>"{testimonial.message}"</p>
            </CardItem>

          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

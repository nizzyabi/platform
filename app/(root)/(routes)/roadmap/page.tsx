"use client"
import {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import AOS from "aos";
import "aos/dist/aos.css";
import Roadmap from "@/components/Roadmap";

export default function RoadmapPage() {
    return (
        <div>
            <Roadmap />
        </div>
    )
}
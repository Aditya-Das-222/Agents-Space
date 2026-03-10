import { Type } from "@google/genai";

export interface Product {
  id: string;
  title: { bn: string; en: string };
  price: number;
  sales: number;
  image: string;
  wishlist: number;
  likes: number;
  description: { bn: string; en: string };
}

export interface Mentorship {
  id: string;
  title: { bn: string; en: string };
  price: number;
  description: { bn: string; en: string };
  features: { bn: string[]; en: string[] };
  buttonText: { bn: string; en: string };
}

export const PRODUCTS: Product[] = [
  {
    id: "lead-gen",
    title: { bn: "লিড জেনারেশন এজেন্ট", en: "Lead Generation Agent" },
    price: 1500,
    sales: 45,
    image: "https://picsum.photos/seed/leadgen/400/300",
    wishlist: 128,
    likes: 342,
    description: { 
      bn: "আপনার ব্যবসার জন্য স্বয়ংক্রিয়ভাবে লিড খুঁজে বের করার একটি শক্তিশালী সিস্টেম।", 
      en: "A powerful system to automatically find leads for your business." 
    }
  },
  {
    id: "graphics-designer",
    title: { bn: "গ্রাফিক্স ডিজাইনার এজেন্ট", en: "Graphics Designer Agent" },
    price: 2000,
    sales: 32,
    image: "https://picsum.photos/seed/graphics/400/300",
    wishlist: 95,
    likes: 210,
    description: { 
      bn: "এআই ব্যবহার করে দ্রুত এবং সুন্দর গ্রাফিক্স ডিজাইন তৈরি করার টুল।", 
      en: "A tool to create fast and beautiful graphics designs using AI." 
    }
  },
  {
    id: "n8n-roadmap",
    title: { bn: "n8n রোডম্যাপ", en: "n8n Roadmap" },
    price: 999,
    sales: 89,
    image: "https://picsum.photos/seed/n8n/400/300",
    wishlist: 256,
    likes: 512,
    description: { 
      bn: "n8n অটোমেশন শেখার জন্য একটি পূর্ণাঙ্গ গাইডলাইন।", 
      en: "A complete guideline for learning n8n automation." 
    }
  },
  {
    id: "messenger-chatbot",
    title: { bn: "মেসেঞ্জার চ্যাটবট", en: "Messenger Chatbot" },
    price: 1200,
    sales: 29,
    image: "https://picsum.photos/seed/chatbot/400/300",
    wishlist: 67,
    likes: 145,
    description: { 
      bn: "আপনার ফেসবুক পেজের জন্য একটি স্মার্ট এআই চ্যাটবট।", 
      en: "A smart AI chatbot for your Facebook page." 
    }
  }
];

export const MENTORSHIPS: Mentorship[] = [
  {
    id: "1-to-1",
    title: { bn: "১-টু-১ প্রাইভেট মেন্টরশিপ সেশন (১ ঘণ্টা)", en: "1-to-1 Private Mentorship Session (1 Hour)" },
    price: 599,
    description: { 
      bn: "সরাসরি আপনার সমস্যাগুলো নিয়ে আলোচনা করুন।", 
      en: "Discuss your problems directly with me." 
    },
    features: {
      bn: ["n8n অটোমেশন", "এআই এজেন্ট", "ক্লায়েন্ট ডেলিভারি ইস্যু", "অটোমেশন স্ট্র্যাটেজি", "এআই এজেন্সি বিল্ডিং", "ক্যারিয়ার ডিরেকশন"],
      en: ["n8n automation", "AI agents", "Client delivery issues", "Automation strategy", "AI agency building", "Career direction"]
    },
    buttonText: { bn: "সেশন বুক করুন", en: "Book Session" }
  },
  {
    id: "client-acquisition",
    title: { bn: "ক্লায়েন্ট অ্যাকুইজিশন এবং এআই এজেন্সি বিল্ডিং (আদিত্য দ্বারা পরিচালিত)", en: "Client Acquisition & AI Agency Building (Taught by Aditya)" },
    price: 4999,
    description: { 
      bn: "কিভাবে ক্লায়েন্ট পাবেন এবং একটি সফল এজেন্সি গড়ে তুলবেন।", 
      en: "How to land clients and build a successful agency." 
    },
    features: {
      bn: ["ক্লায়েন্ট ল্যান্ডিং ফানেল", "১০+ ক্লায়েন্ট অ্যাকুইজিশন মেথড", "প্রফেশনাল প্রজেক্ট ডেলিভারি", "ক্লায়েন্ট মিটিং কমিউনিকেশন", "প্রপোজাল ক্রিয়েশন", "ক্লায়েন্ট এগ্রিমেন্ট", "কমপ্লিট অনবোর্ডিং সিস্টেম", "এজেন্সি বিল্ডিং রোডম্যাপ", "প্রথম পেইড ক্লায়েন্ট না পাওয়া পর্যন্ত সাপোর্ট"],
      en: ["Client landing funnels", "10+ client acquisition methods", "Professional project delivery", "Client meeting communication", "Proposal creation", "Client agreements", "Complete onboarding system", "Agency building roadmap", "Support until first paid client"]
    },
    buttonText: { bn: "প্রোগ্রামে জয়েন করুন", en: "Join Program" }
  },
  {
    id: "n8n-voice",
    title: { bn: "n8n এবং ভয়েস এজেন্ট অটোমেশন + লেটেস্ট এআই টুলস", en: "n8n & Voice Agent Automation + Latest AI Tools" },
    price: 2500, // Placeholder price as none was specified for this one in the prompt, but I'll add one.
    description: { 
      bn: "অটোমেশন এবং ভয়েস এআই এর মাস্টার হয়ে উঠুন।", 
      en: "Master automation and voice AI systems." 
    },
    features: {
      bn: ["n8n অটোমেশন সিস্টেম", "ভয়েস এআই এজেন্ট", "গো হাই লেভেল অটোমেশন ওয়ার্কফ্লো", "প্রম্পট ইঞ্জিনিয়ারিং মাস্টারি", "এআই দিয়ে অতিরিক্ত আয়", "আর্লি অ্যান্টি-গ্র্যাভিটি সিস্টেম", "ক্লড কোড", "ওপেনক্ল টুলস এবং ওয়ার্কফ্লো"],
      en: ["n8n automation systems", "Voice AI agents", "Go High Level automation workflows", "Mastery in Prompt Engineering", "How to generate extra income with AI", "Early Anti-Gravity systems", "Claude Code", "OpenClaw tools and workflows"]
    },
    buttonText: { bn: "এনরোল করুন", en: "Enroll Now" }
  }
];

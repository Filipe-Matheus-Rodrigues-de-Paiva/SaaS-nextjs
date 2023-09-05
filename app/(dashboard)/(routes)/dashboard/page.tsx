"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react"
import { useRouter } from 'next/navigation'

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
        bgColor: "bg-pink-700/10"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
        bgColor: "bg-orange-700/10"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
        bgColor: "bg-green-700/10"
    },
]

export default function Dashboard () {
    const router = useRouter()
    
    return (
        <div className="container">
            <div className="flex flex-col gap-4">
                <h2 className="text-center text-lg font-bold md:text-3xl">Explore the power of AI</h2>
                <p className="text-center">Chat with the smartest AI - Experience the power of AI</p>
            </div>
            <ul className="flex flex-col gap-4 mt-4">
                {tools.map((tool) => (
                    <li className="border-gray-400 border px-2 flex justify-between h-12 rounded-xl items-center hover:shadow-lg"
                    onClick={() => router.push(tool.href)}
                    >
                        <div className="flex gap-2 items-center">
                            <div className={cn("border-gray-600 border-2 flex rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8 relative left-1 rounded-lg mr-3", tool.color)} />
                            </div>
                            <h2 className="font-semibold">{tool.label}</h2>
                        </div>
                        <ArrowRight />
                    </li>
                ))}
            </ul>
        </div>
    )
}
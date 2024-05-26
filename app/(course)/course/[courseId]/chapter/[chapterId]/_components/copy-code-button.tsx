"use client"
import { Copy, Terminal } from "lucide-react";
import { toast } from "react-hot-toast";

interface CopyCodeButtonProps {
    code: string;
}

export const CopyCodeButton = ({
    code
}:CopyCodeButtonProps) => {
    const onClick = (codeExample:string) => {
        navigator.clipboard.writeText(codeExample)
        .then(() => {
            toast.success('Copied!');
        })
        .catch(err => toast.error('Failed to copy code'))
    }
    return (
        <div className="flex items-center justify-between">
            <div>
                <Terminal className='h-6 w-6 text-white/50'/>
            </div>
            <button onClick={() => onClick(code)}>
                <Copy className="h-5 w-5 hover:opacity-50 transition-opacity duration-200 text-white"/>
            </button>
        </div>
    )
}


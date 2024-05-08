"use client"
import { Copy } from "lucide-react";
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
        <div>
            <button onClick={() => onClick(code)}>
                <Copy className="h-5 w-5 mt-2 mr-2"/>
            </button>
        </div>
    )
}


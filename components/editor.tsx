"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css"

interface EditorProps {
    onChange: (value: string) => void
    value: string;
}

export const Editor = ({
    onChange,
    value
}: EditorProps) => {
    // disable SSR for react-quill as it doesnt work with SSR
    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

    return (
        <div>
            <ReactQuill 
                theme="snow" 
                value={value} 
                onChange={onChange}/>
        </div>
    )
}
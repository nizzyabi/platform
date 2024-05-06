'use client'

import { sendGAEvent } from "@next/third-parties/google"

export default function MyButton(){
    return (
        <button onClick={() => sendGAEvent({ event:'buttonClicked', value: "why"})} className="pt-20">
            Data
        </button>
    )
}
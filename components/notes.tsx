'use client'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
 
export default function Notes() {
  // Creates a new editor instance.

  const editor = useCreateBlockNote();
 
  // Renders the editor instance using a React component.
  return (
    <div className="mt-12 mb-40">
      <BlockNoteView editor={editor} data-theming-css-variables-demo/>
    </div>
  )
}
 
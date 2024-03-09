'use client'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
 
export default function Notes() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
 
  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
 
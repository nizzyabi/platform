'use client'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote, DragHandleButton, SideMenuController, SideMenu, DragHandleMenu, DragHandleMenuItem } from "@blocknote/react";
import "@blocknote/react/style.css";
 
export default function Notes() {
  // Creates a new editor instance.

  const editor = useCreateBlockNote();
 
  // Renders the editor instance using a React component.
  return (
    <div className="mt-5  ">
      <BlockNoteView editor={editor} data-theming-css-variables-demo formattingToolbar={true} className="rounded-xl border-2 border-slate-100/10" />
      
    </div>
  )
}
 
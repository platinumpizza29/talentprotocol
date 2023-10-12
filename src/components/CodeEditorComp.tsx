import { Editor } from "@monaco-editor/react";

export default function CodeEditorComp() {
  return (
    <div className="h-full w-full font-my-font">
      <Editor
        defaultLanguage="javascript"
        defaultValue="// some comment"
        width={"100%"}
      />
    </div>
  );
}

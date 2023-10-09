import { Editor } from "@monaco-editor/react";

export default function EditorPage() {
  return (
    <div className="">
      <h1>Editor Page</h1>
      {/* code editor begins here */}
      <div className="h-full w-full">
        <Editor
          height={"100vh"}
          width={"100vw"}
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </div>
    </div>
  );
}

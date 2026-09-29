function CodeEditor({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Paste your code here..."
      aria-label="Code editor"
      className="editor"
    />
  );
}

export default CodeEditor;
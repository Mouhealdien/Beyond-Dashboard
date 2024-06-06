"use client";
import React, { useEffect, useRef } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

type propsType = {
  originalHtml?: string | undefined | null;
  previewerRef: HTMLPreElement;
};

const FroalaEditorComponent = ({ originalHtml, previewerRef }: propsType) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    // Wait for the FroalaEditor library to be fully loaded
    if ((window as any).FroalaEditor) {
      const FroalaEditor = (window as any).FroalaEditor;

      // Ensure FroalaEditor is defined before accessing its methods
      FroalaEditor.DefineIcon("imageInfo", { NAME: "info", SVG_KEY: "help" });
      FroalaEditor.RegisterCommand("imageInfo", {
        title: "Info",
        focus: false,
        undo: false,
        refreshAfterCallback: false,
        callback: function () {
          const $img = this.image.get();
          alert($img.attr("src"));
        },
      });
    }
  }, []);

  const callback = () => {
    const editor = editorRef.current;

    if (editor && previewerRef.current) {
      const content = editor?.html?.get();
      const beautifiedContent = editor.codeBeautifier
        ? editor.codeBeautifier.run(content)
        : content;
      previewerRef.current.textContent = beautifiedContent;
      previewerRef.current.classList.remove("prettyprinted");
    }
  };

  return (
    <div>
      <FroalaEditor
        tag="textarea"
        config={{
          events: {
            initialized: function () {
              editorRef.current = this;
              this?.html?.set(originalHtml); // Set initial content here
              callback();
            },
            contentChanged: callback,
          },
          imageEditButtons: [
            "imageDisplay",
            "imageAlign",
            "imageInfo",
            "imageRemove",
          ],
          imageUploadURL: "http://127.0.0.1:8080/image-upload",
          imageUploadParams: {
            id: "my_editor",
          },
        }}
      />
      <pre className="hidden" id="eg-previewer" ref={previewerRef}></pre>
      {/* <FroalaEditorView /> */}
    </div>
  );
};

export default FroalaEditorComponent;

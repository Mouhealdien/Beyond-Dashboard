import React, { useRef, useEffect, useState } from "react";
import JoditEditor from "jodit-react";

type propsType = {
  editor: any;
  originalHtml?: string;
  ar: boolean;
};

const JoditEditorComponent = ({ editor, originalHtml, ar }: propsType) => {
  //const editor = useRef(null);
  const [dir, setDir] = useState(false);

  useEffect(() => {
    if (ar) setDir(true);
    else setDir(false);
  }, []);

  const config = {
    // uploader: {
    //   url: "http://127.0.0.1:8080/image-upload", // Your API endpoint for uploading images
    //   format: "json", // Format expected from server
    //   method: "POST", // HTTP method for the request
    //   headers: {
    //     Authorization: "Bearer <your-token>", // Add any custom headers here
    //   },
    //   isSuccess: (resp) => resp.success, // Function to check success response from server
    //   getMsg: (resp) => resp.message, // Function to get message from response
    //   process: (resp) => ({
    //     files: resp.files.map((file) => ({
    //       file: file.url,
    //       name: file.name,
    //       size: file.size,
    //     })),
    //   }),
    // },
    uploader: {
      insertImageAsBase64URI: true, // Optional: insert images as base64 data URI
    },

    buttons: [
      "source",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "ul",
      "ol",
      "outdent",
      "indent",
      "fontsize",
      "brush",
      "paragraph",
      "image",
      "table",
      "link",
      "align",
      "undo",
      "redo",
      "hr",
      "copyformat",
      "fullsize",
      "preview",
    ],
    image: {
      upload: true,
      toolbar: true,
      allowDragAndDropFileToEditor: true,
      defaultWidth: 300,
    },
    style: {
      direction: dir ? "rtl" : "ltr",
    },
    extraButtons: [
      {
        name: "right-to-left",
        iconURL: "https://img.icons8.com/ios-filled/50/000000/align-right.png",
        exec: (editor: any) => {
          setDir(true);
        },
        tooltip: "Left-to-Right",
      },
      {
        name: "rtl",
        iconURL: "https://img.icons8.com/ios-filled/50/000000/align-left.png",
        exec: (editor: any) => {
          setDir(false);
        },
        tooltip: "left-to-right",
      },
    ],

    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        config={config}
        value={originalHtml ? originalHtml : "<p>hello</p>"}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => console.log("newContent")} // preferred to use only this option to update the content for performance reasons
        // onChange={(newContent) => {
        //   console.log(editor?.current.value);
        // }}
      />
    </div>
  );
};

export default JoditEditorComponent;

{
  /* <JoditEditor
        ref={editor}
        value={"this.state.content"}
        config={{
          language: "zh_cn",
          toolbarButtonSize: "large",
          uploader: {
            url: "http://127.0.0.1:8080/image-upload", //your upload api url
            insertImageAsBase64URI: false,
            imagesExtensions: ["jpg", "png", "jpeg", "gif"],
            //headers: {"token":`${db.token}`},
            filesVariableName: function (t) {
              return "files[" + t + "]";
            }, //"files",
            withCredentials: false,
            pathVariableName: "path",
            format: "json",
            method: "POST",
            prepareData: function (formdata) {
              return formdata;
            },
            isSuccess: function (e) {
              debugger;
              return e.success;
            },
            getMessage: function (e) {
              return void 0 !== e.data.messages &&
                Array.isArray(e.data.messages)
                ? e.data.messages.join("")
                : "";
            },
            process: function (resp: any) {
              //success callback transfrom data to defaultHandlerSuccess use.it's up to you.
              let files = [];
              files.unshift(resp.data);
              return {
                files: resp.data,
                error: resp.msg,
                msg: resp.msg,
              };
            },
            error: function (this: any, e: Error) {
              this.j.e.fire("errorMessage", e.message, "error", 4000);
            },
            defaultHandlerSuccess: function (this, resp) {
              // `this` is the editor.
              const j = this;
              debugger;
              if (resp.files && resp.files.length) {
                const tagName = "img";
                resp.files.forEach((filename: string, index: number) => {
                  //edetor insertimg function
                  const elm = j.createInside.element(tagName);
                  elm.setAttribute("src", filename);
                  j.s.insertImage(
                    elm as HTMLImageElement,
                    null,
                    j.o.imageDefaultWidth
                  );
                });
              }
            },
            defaultHandlerError: function (this: any, e) {
              this.j.e.fire("errorMessage", e.message);
            },
            contentType: function (e) {
              return (
                (void 0 === this.jodit.ownerWindow.FormData ||
                  "string" == typeof e) &&
                "application/x-www-form-urlencoded; charset=UTF-8"
              );
            },
          },
        }}
      /> */
}

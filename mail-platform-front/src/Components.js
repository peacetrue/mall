import * as React from "react";
import {SaveButton, Toolbar} from "react-admin";

/** default to save and delete, this just save */
export const SaveToolbar = props => (
    <Toolbar {...props} >
        <SaveButton/>
    </Toolbar>
);

export const toolbarOptions = [
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

    // ['blockquote', 'code-block'],
    // [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    // [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent

    // [{'direction': 'rtl'}],                         // text direction
    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown

    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    // [{'font': []}],
    [{'align': []}],
    ['link', 'image',],//'video'

    ['clean']                                         // remove formatting button
];

export default toolbarOptions;
export const richTextInputOptions = {
    format(value) {
        console.info("format:", value);
        let start = richTextInputUtils.editorStart, end = richTextInputUtils.editorEnd;
        if (value && value.startsWith(start) && value.endsWith(end)) {
            return value;
        }
        return `${start}${value || ''}${end}`;
    },
    parse(value) {
        console.info("parse:", value);
        let start = richTextInputUtils.editorStart, end = richTextInputUtils.editorEnd;
        if (value && value.startsWith(start) && value.endsWith(end)) {
            return value.substr(start.length, value.length - end.length);
        }
        return value;
    },
    toolbar: toolbarOptions,
    /*
        options: {
            modules: {
                toolbar: {
                    container: toolbarOptions,
                    handlers: {
                        image() {
                            let range = this.quill.getSelection();
                            let value = prompt('请输入图片地址');
                            if (value) {
                                this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
                            }
                        }
                    }
                }
            },
            theme: "snow"
        }
    */
}

export const richTextInputUtils = {
    editorStart: '<div class="container"><div class="ql-editor">',
    editorEnd: '</div></div>',
    transformBuilder(name) {
        return (data) => {
            return {...data, [name]: richTextInputOptions.format(data[name])}
        };
    },
}

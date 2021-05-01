// import * as React from 'react';
// import {FileField, ImageField, Labeled} from "react-admin";
//
// export const formDataBuilder = (data) => {
//     let formData = new FormData();
//     Object.keys(data).forEach(key => {
//         let value = data[key];
//         //value=[{rawFile:File},{rawFile:File}]
//         if (value instanceof Array) {
//             value.forEach(item => {
//                 if (item.rawFile instanceof File) {
//                     formData.append(key, item.rawFile, item.rawFile.name);
//                 } else {
//                     formData.append(key, value);
//                 }
//             });
//         } else if (value.rawFile instanceof File) {
//             formData.append(key, value.rawFile, value.rawFile.name);
//         } else {
//             formData.append(key, value);
//         }
//     });
//
//     return formData;
// }
//
// export const fileParamBuilder = (fieldName, single, relativePath, fileName, baseIndex) => {
//     return {name: fieldName, type: single ? 'single' : 'multiple', single, relativePath, fileName, baseIndex};
// }
//
// export const fileFormDataBuilder = (fileParam) => {
//     console.info("fileFormDataBuilder.fileParam:", fileParam);
//     const {files, type = 'single', relativePath, fileName, baseIndex} = fileParam;
//     const name = "filePart";
//     let formData = new FormData();
//     relativePath && formData.append('relativePath', relativePath);
//     fileName && formData.append('fileName', fileName);
//     baseIndex !== undefined && formData.append('baseIndex', baseIndex);
//
//     if (type === 'single') {
//         formData.append(name, files, files.name);
//     } else {
//         files.forEach((item) => formData.append(name, item, item.name));
//     }
//     formData.append("_query", JSON.stringify({'type': type}));
//     return formData;
// }
//
// /** replaceFileName('a.png','b')='b.png' */
// /** replaceFileName('a.png','b',1)='b-1.png' */
// export const replaceFileName = (source, target, index) => {
//     if (!target) return source;
//     if (index) target = `${target}-${index}`;
//     return `${target}.${source.split('.').pop()}`
// }
//
// export const extractFiles = (data, fileParam) => {
//     console.info("extractFiles: ", data, fileParam);
//     let value = data[fileParam.name];
//     //nothing change: "teacher/pc-photo/865-手机(8).jpeg,teacher/pc-photo/976-手机(13).png"
//
//     if (!value) return null;
//     if (typeof value === 'string') return null;
//     return fileParam.single ? extractFile(value) : value.map(extractFile).filter(item => Boolean(item));
// }
//
// export const extractFile = (value) => {
//     return value.rawFile;
// }
//
// export const isEmpty = value => {
//     if (!value) return true;
//     if (value.length === 0) return true;
//     return false;
// }
//
// export const fileTransformBuilder = (dataProvider, fileParams) => {
//     return data => {
//         console.info("transform.data:", data);
//         console.info("fileParams: ", fileParams);
//         //一个表单，多个文件字段
//         fileParams = fileParams
//             .map(fileParam => extractFiles(data, fileParam))//可选的文件字段，可能返回空
//             .map((files, index) => ({...fileParams[index], files}))
//             .filter(fileParam => !isEmpty(fileParam.files))
//         ;
//         console.info("fileParams with file: ", fileParams);
//         //没有文件，无需上传
//         if (fileParams.length === 0) return data;
//
//         //多文件上传时，设置 baseIndex
//         fileParams
//             .filter(item => item.fileName)
//             .filter(item => item.type !== 'single')
//             //.forEach(item => item.baseIndex = data[item.name].findIndex(item => Boolean(extractFile(item))))
//             .forEach((item) => {
//                 let values = data[item.name];
//                 if (values.length === item.files.length) return;
//                 item.baseIndex = parseInt(values[values.length - item.files.length - 1].title.replace(/.*default-(\d+).*/, "$1")) + 1;
//             });
//         console.info("fileParams after set baseIndex: ", fileParams);
//         let promises = fileParams
//             .map(fileParam => fileFormDataBuilder(fileParam))
//             .map(formData => dataProvider.create('files', {data: formData}))
//         ;
//         console.info("promises: ", promises);
//         return Promise.all(promises)
//             .then(responses => {
//                 console.info("responses:", responses);
//                 if (!responses || !responses.length) return data;
//                 let transformedData = {...data};
//                 responses.forEach((response, index) => {
//                     if (!response) return;//会话超时，此时无结果
//                     let files = response.data, fileParam = fileParams[index];
//                     if (files instanceof Array) {
//                         let values = data[fileParam.name], newIndex = 0;
//                         //if (values.length > 0) newIndex = parseInt(values[values.length - responses.length - 1].title.replace(/.*default-(\d+).*/, "$1")) + 1;
//                         values.forEach((value, index) => {
//                             if (value.rawFile) values[index] = files[newIndex++].id;
//                             else values[index] = value.value;
//                         });
//                         transformedData[fileParam.name] = values.join(',');
//                     } else {
//                         transformedData[fileParam.name] = files.id;
//                     }
//                 });
//                 return transformedData;
//             })
//     };
// }
//
// export const buildUrl = (path, dispositionType) => {
//     if (path.startsWith('http')) return path;
//     return `${process.env.REACT_APP_BASE_URL}/files/${path}?dispositionType=${dispositionType}`;
// };
//
// export const buildPreviewUrl = path => buildUrl(path, 'inline');
// export const buildDownloadUrl = path => buildUrl(path, 'attachment');
//
// export const filePathFormatter = item => {
//     return {
//         value: item,
//         src: buildDownloadUrl(item),
//         title: item.substring(item.lastIndexOf('/') + 1)
//     };
// }
//
// export const singleInputFormatter = (data) => {
//     if (typeof data === 'string') {
//         //multiple path: teacher/photo1.png,teacher/photo2.png
//         return filePathFormatter(data);
//     }
//     //File(name=photo.png,path=photo.png)
//     return data;
// }
//
// export const multipleInputFormatter = (data) => {
//     if (typeof data === 'string') {
//         //multiple path: teacher/photo1.png,teacher/photo2.png
//         data = data.split(',');
//     }
//     data = data.map(item => filePathFormatter(item))
//     //File(name=photo.png,path=photo.png)
//     return data;
// }
//
//
//
//

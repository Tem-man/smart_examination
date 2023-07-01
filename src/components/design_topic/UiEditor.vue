
<script setup>
/* eslint-disable */
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { reactive, onMounted, ref, toRaw, watch, watchEffect } from 'vue'
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
// import { backsite } from '@/api'

const props = defineProps(['value', 'size', 'textVal', 'remind', 'qust'])

const content = ref(props.qust.inText);
const inputVal = ref(null);
watchEffect(() => {
    content.value = props.qust.inText;
    // console.log("watchEffect");
})

watch(content, () => {
    inputVal.value = content.value;
    dataExam.getData(props.qust, content.value);
    // content.value = null;
    // @input="$emit('get-text', props.qust, content)"
    // textValue.value = content.value.replace(/<[^<>]+>/g, "")
})
const myQuillEditor = ref()
// watch(() => props.value, (val) => {
//   console.log(toRaw(myQuillEditor.value))
//   toRaw(myQuillEditor.value).setHTML(val)
// }, { deep: true })
// const fileBtn = ref()
const data = reactive({
    content: '',
    editorOption: {
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'header': 1 }, { 'header': 2 }],
                ['image', 'link', 'video'],

            ]
        },
        placeholder: '请输入题干'
    }
})
// const imgHandler = (state) => {
//     if (state) {
//         fileBtn.value.click()
//     }
// }

// const setValue = () => {
//     const text = toRaw(myQuillEditor.value).getHTML()
//     emit('updateValue', text)
// }
// const handleUpload = (e) => {
//     const files = Array.prototype.slice.call(e.target.files)
//     // console.log(files, "files")
//     if (!files) {
//         return
//     }
//     const formdata = new FormData()
//     formdata.append('file', files[0])
//     // backsite.uploadFile(formdata)
//     //   .then(res => {
//     //     if (res.data.url) {
//     //       const quill = toRaw(myQuillEditor.value).getQuill()
//     //       const length = quill.getSelection().index
//     //       // 插入图片，res为服务器返回的图片链接地址
//     //       quill.insertEmbed(length, 'image', res.data.url)
//     //       // 调整光标到最后
//     //       quill.setSelection(length + 1)
//     //     }
//     //   })
// }
// onMounted(() => {
//     const quill = toRaw(myQuillEditor.value).getQuill()
//     if (myQuillEditor.value) {
//         quill.getModule('toolbar').addHandler('image', imgHandler)
//     }
//     toRaw(myQuillEditor.value).setHTML(props.value)
// })
</script>

<template>
    <div class="editor" :class="props.size">
        <QuillEditor class="ql-container ql-editor" ref="myQuillEditor" theme="snow" v-model:content="content"
            :options="data.editorOption" contentType="text" />
        <!-- <p>{{ textValue + 11 }}</p> -->
    </div>
</template>

<style lang="scss">
.editor {
    margin: 0 auto;
    max-height: 800rem;
    width: 800rem;
    overflow: hidden;
    outline: none;
    border: 1px solid#E1EAF4;
    border-radius: 4rem;

}



.min {
    width: 700rem !important;
    display: inline-block;
    margin: 0;
}
</style>


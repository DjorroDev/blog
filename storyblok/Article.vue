<template>
  <Head>
    <title>{{blok.title}} | Djorro Blog</title>
  </Head>  
    <div v-editable="blok">
      <div class="container w-4/6 mx-auto mb-12">
        <h1 class="text-6xl text-center md:text-start text-[#50b0ae] font-bold mt-12 mb-4">{{ blok.title }}</h1>
        <h2 class="text-2xl text-[#1d243d] font-bold mb-4">
          {{ blok.subtitle }}
        </h2>
      </div>
      <nuxt-img
        format="webp"
        :src="blok.image.filename"
        :alt="blok.image.alt"
        class="mx-auto my-5 w-full md:w-4/6 h-[360px] lg:h-[450px] object-cover"
      />
      <div class="container md:w-max mx-auto px-3 mb-12">
        <div v-html="resolvedRichText" class="prose"></div>
      </div>
    </div>
  </template>
   
<script setup>

const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.content))

// // console.log(props.blok.title)
// useHead({
//   title: `${props.blok.title} | Djorro blog`
// }
// )

</script>
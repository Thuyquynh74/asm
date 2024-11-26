<!-- src/views/Home.vue -->
<template>
  <div class="p-10">
    <div class="bg-[url('../img/background.png')] bg-center rounded-xl bg-cover bg-no-repeat">
      <div class="block lg:ml-14 pt-[21.5rem] lg:w-1/2 lg:h-max-[630px] sm:h-max-[400px] ">
        <div class="w-full p-6 rounded-lg shadow-xl xl:bg-white md:bg-white md:h-72 lg:h-72">
          <div class="gap-3">
            <div class="flex flex-col gap-4">
              <!-- Category Tag -->
              <div class="mt-4 py-1 px-4 text-white bg-[#4B6BFB] rounded-md text-sm w-max mx-auto lg:mx-0">
                Technology
              </div>

              <!-- Title -->
              <div
                class="px-6 font-bold leading-relaxed text-center md:text-2xl lg:text-2xl md:text-left lg:text-left xl:text-black md:text-black lg:px-0">
                The Impact of Technology on the Workplace: How Technology is Changing
              </div>

              <!-- Author Info -->
              <div class="flex items-center justify-center gap-4 mt-4 lg:justify-start">
                <img class="rounded-full w-9 h-9" src="https://via.placeholder.com/36x36" alt="Author's Avatar" />
                <div class="text-center lg:text-left">
                  <div class="text-sm font-medium text-white lg:text-black">Jason Francisco</div>
                  <div class="text-sm font-light text-white lg:text-black">August 20, 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-32 pt-3 px-14 lg:pt-12 lg:px-56 bg-opacity-95 lg:h-56">
    <div class="h-16 bg-gray-200 lg:h-24 rounded-xl ">
      <div class="pt-0.5 lg:pt-2  text-sm font-serif text-center text-gray-500">Advertisement</div>
      <div class="text-sm font-bold text-center text-gray-500 lg:text-xl">You can place ads</div>
      <div class="text-sm font-thin text-center text-gray-500">750x100</div>
    </div>
  </div>
  <div class="h-auto mb-4 ">
    <div class="text-xl font-bold">Latest Post</div>
    <div class="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <!-- Single Blog Post Card -->
      <div v-for="(post, key) in posts" :key="key"
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out ">

        <!-- Click vao Post Image and Title -->
        <router-link :to="`/blogpost/${key}`" class="block relative">
          <img v-if="post.image" :src="post.image" :alt="post.title"
            class="w-full h-56 object-fill transition-transform duration-300 ease-in-out transform hover:scale-105">
          <!-- object-cover   full man  hinh -->

        </router-link>

        <!-- Post Content card -->
        <div class="p-6">
          <p class="text-gray-600 mb-3 text-sm italic ">
            Danh mục : <span class="font-medium text-white bg-[#4B6BFB] rounded-md p-[4px]">{{ post.category }}</span>
          </p>
          <p class="text-gray-700 mb-3 text-sm">
            Tác giả: {{ username }}
          </p>
          <!-- Clickable Post Title -->
          <router-link :to="`/blogpost/${key}`" class="block">
            <h5 class="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition duration-200">
              {{ post.title }}
            </h5>
          </router-link>


          <!-- Content Preview -->
          <p class="text-gray-700 mb-6 text-sm">
            {{ truncateContent(post.content) }}...
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-between mt-6 space-y-2 sm:space-y-0">
            <router-link :to="`/blogpost/${key}`"
              class="flex-1 sm:flex-none text-center px-3 py-2 bg-cyan-400 font-bold text-white rounded-lg hover:bg-cyan-500 transition duration-300 ease-in-out">
              Xem Chi Tiết
            </router-link>

            <router-link :to="`/editpost/${key}`"
              class="flex-1 sm:flex-none text-center px-3 py-2 bg-yellow-500 font-bold text-white rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
              Chỉnh Sửa
            </router-link>

            <button @click="deletePost(key)"
              class="flex-1 sm:flex-none text-center px-3 py-2 bg-red-500 font-bold text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">
              Xóa
            </button>
          </div>



        </div>

      </div>
    </div>
  </div>
  <div
    class="pt-1 mb-2 lg:mb-16 border-solid border-2 text-center text-gray-500 font-medium h-9 mx-36 lg:mx-[500px] rounded-md">
    View All Post</div>
  <div class="h-32 pt-3 px-14 lg:pt-12 lg:px-56 bg-opacity-95 lg:h-56">
    <div class="h-16 bg-gray-200 lg:h-24 rounded-xl ">
      <div class="pt-0.5 lg:pt-2  text-sm font-serif text-center text-gray-500">Advertisement</div>
      <div class="text-sm font-bold text-center text-gray-500 lg:text-xl">You can place ads</div>
      <div class="text-sm font-thin text-center text-gray-500">750x100</div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      posts: {}
    }
  },
  created() {
    this.loadPosts();
    const username = localStorage.getItem('username');
    if (username) {
      this.isLoggedIn = true;
      this.username = username; // Set username
    }
  },
  methods: {
    loadPosts() {
      this.posts = Object.keys(localStorage)
        .filter(key => key.startsWith('post_'))
        .reduce((acc, key) => {
          try {
            acc[key] = JSON.parse(localStorage.getItem(key))
            return acc
          } catch (e) {
            console.error(`Error parsing post ${key}:`, e)
            return acc
          }
        }, {})
    },

    truncateContent(content) {
      // Loại bỏ thẻ HTML và cắt chuỗi xuống 100 ký tự
      const plainText = content.replace(/<[^>]*>/g, '')
      return plainText.length > 32
        ? plainText.substring(0, 32)
        : plainText
    },

    deletePost(key) {
      if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
        localStorage.removeItem(key)
        this.loadPosts()
      }
    }
  }
};
</script>
<template>
  <h2 class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-3xl font-bold mb-6 text-center text-gray-800">Chi Tiết Bài Viết</h2>

  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-3xl font-bold mb-3">{{ post.title }}</h2>
      <p class="text-blue-700 mb-4 text-xl">Người đăng: {{ username }}</p>
      <p class="text-gray-600 mb-4 italic">Danh mục: {{ post.category }}</p>

      <!-- Hiển thị số lượt xem -->
      <p class="text-gray-600 mb-4">Số lượt xem: {{ post.viewCount || 0 }}</p>

      <!-- Image -->
      <div v-if="post.image" class="mb-6">
        <img :src="post.image" :alt="post.title" class="w-full max-h-196 object-fill rounded-lg shadow-lg">
      </div>

      <!-- Content -->
      <div class="prose max-w-none mb-6" v-html="post.content"></div>

      <!-- Back Button -->
      <router-link 
        to="/home" 
        class="inline-block px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
      >
        Quay lại Trang Chính
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      username: '',
      post: null
    };
  },
  created() {
    const key = this.$route.params.key;
    try {
      const postData = localStorage.getItem(key);
      if (postData) {
        this.post = JSON.parse(postData);
        
        // Đảm bảo trường viewCount được khởi tạo nếu chưa có
        if (this.post.viewCount === undefined) {
          this.post.viewCount = 0; // Khởi tạo số lượt xem nếu chưa có
        }

        // Tăng số lượt xem
        this.post.viewCount += 1;

        // Lưu lại bài viết với số lượt xem đã cập nhật vào localStorage
        localStorage.setItem(key, JSON.stringify(this.post));
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu bài viết:', error);
      this.post = null;
    }

    const username = localStorage.getItem('username');
    if (username) {
      this.isLoggedIn = true;
      this.username = username; // Set username
    }
  },
  head() {
    return {
      title: this.post ? `${this.post.title} - MetaBlog` : 'Không tìm thấy bài viết'
    };
  }
};
</script>

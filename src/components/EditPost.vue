<!-- EditPost.vue -->
<template>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div class="p-4 border rounded-lg bg-gray-50">
      <h2 class="text-2xl font-bold mb-4">Chỉnh Sửa Bài Viết</h2>

      <form @submit.prevent="saveChanges">
        <!-- Tiêu đề -->
        <div class="mb-3">
          <label for="editTitle" class="block mb-2">Tiêu Đề</label>
          <input type="text" id="editTitle" v-model="post.title"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>

        <!-- Toolbar -->
        <div class="mb-3 space-x-2">
          <button v-for="(tool, index) in toolbar" :key="index" type="button" @click="formatText(tool.command)"
            class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            {{ tool.label }}
          </button>
        </div>

        <!-- Nội dung -->
        <div class="mb-3">
          <label for="editContent" class="block mb-2">Nội Dung</label>
          <div ref="contentEditable" contenteditable="true"
            class="w-full h-40 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-html="post.content"></div>
        </div>

        <!-- Upload ảnh -->
        <div class="mb-3">
          <label for="editpostImage" class="block mb-2">Thêm Ảnh</label>
          <input type="file" id="editpostImage" @change="handleImageUpload" accept="image/*"
            class="w-full px-3 py-2 border rounded-lg">
          <!-- Image Preview -->
          <div v-if="post.image" class="mt-3">
            <img :src="post.image" alt="Current Image" class="max-w-full h-auto rounded-lg">
          </div>
        </div>

        <!-- Danh mục -->
        <div class="mb-3">
          <label for="editCategory" class="block mb-2">Chọn Danh Mục</label>
          <select id="editCategory" v-model="post.category" class="w-full px-3 py-2 border rounded-lg">
            <option v-for="category in categories" :key="category.value" :value="category.value">
              {{ category.label }}
            </option>
          </select>
        </div>

        <!-- Buttons -->
        <div class="flex space-x-2">
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Lưu Thay Đổi
          </button>
          <router-link to="/" class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
            Quay lại
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPost',
  data() {
    return {
      post: {
        title: '',
        content: '',
        category: '',
        image: null
      },
      toolbar: [
        { label: 'In đậm', command: 'bold' },
        { label: 'In nghiêng', command: 'italic' },
        { label: 'Gạch chân', command: 'underline' },
        // { label: 'Danh sách', command: 'insertUnorderedList' },
        // { label: 'Danh sách số', command: 'insertOrderedList' }
      ],
      categories: [
        { value: 'Cong nghe', label: 'Danh mục cn' },
        { value: 'Giai tri', label: 'Danh mục gt' },
        { value: 'The gioi', label: 'Danh mục tg' }
      ]
    }
  },
  created() {
    // Lấy key từ route params
    const key = this.$route.params.key
    // Lấy dữ liệu bài viết từ localStorage
    const postData = localStorage.getItem(key)
    if (postData) {
      this.post = JSON.parse(postData)
    } else {
      // Nếu không tìm thấy bài viết, chuyển về trang chủ
      this.$router.push('/post')
    }
  },
  methods: {
    formatText(command) {
      document.execCommand(command, false, null)
    },

    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.post.image = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },

    saveChanges() {
      // Cập nhật nội dung từ contenteditable
      this.post.content = this.$refs.contentEditable.innerHTML

      // Validate dữ liệu
      if (!this.post.title.trim()) {
        alert('Vui lòng nhập tiêu đề!')
        return
      }

      if (!this.post.content.trim()) {
        alert('Vui lòng nhập nội dung!')
        return
      }

      try {
        // Lưu thay đổi vào localStorage
        const key = this.$route.params.key
        localStorage.setItem(key, JSON.stringify(this.post))

        // Hiển thị thông báo thành công
        alert('Thay đổi đã được lưu!')

        // Chuyển về trang chủ
        this.$router.push('/post')
      } catch (error) {
        console.error('Lỗi khi lưu bài viết:', error)
        alert('Có lỗi xảy ra khi lưu bài viết!')
      }
    }
  }
}
</script>

<style scoped>
[contenteditable="true"] {
  min-height: 150px;
  overflow-y: auto;
}

[contenteditable="true"]:empty:before {
  content: attr(placeholder);
  color: #9ca3af;
  font-style: italic;
}
</style>
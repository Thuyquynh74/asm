
export default {
  props: {
    author: {
      type: Object,
      default: () => ({ name: 'Trần Phú Quý', avatar: '' })
    }
  },
  data() {
    return {
      posts: {}
    }
  },
  created() {
    this.loadPosts()
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
}

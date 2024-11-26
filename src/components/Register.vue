<template>
  <div class="content-wrapper max-w-screen-2xl text-base mx-auto px-8 relative">
    <div class="flex items-center justify-center min-h-screen relative overflow-hidden">
      <!-- Bong bóng -->
      <div class="bubble bg-blue-400 w-40 h-40 opacity-50 absolute top-10 left-20"></div>
      <div class="bubble bg-pink-300 w-20 h-20 opacity-40 absolute top-32 right-10"></div>
      <div class="bubble bg-purple-400 w-60 h-60 opacity-30 absolute bottom-10 left-1/4"></div>
      <div class="bubble bg-blue-300 w-24 h-24 opacity-50 absolute bottom-1/4 right-20"></div>
      <div class="bubble bg-green-400 w-10 h-10 opacity-60 absolute top-1/3 left-10"></div>
      <div class="bubble bg-purple-400 w-60 h-60 opacity-30 absolute top-90 right-1/4"></div>

      <!-- Khối đăng nhập -->
      <div class="p-8 rounded-lg shadow-md w-96 bg-white relative z-10">
        <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="username" class="flex items-center mb-1 text-gray-700">
              <span class="material-icons mr-2"></span>
              Username
            </label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Username"
            />
            <p v-if="usernameError" class="text-red-500 text-sm mt-1">{{ usernameError }}</p>
          </div>
          <div class="mb-4">
            <label for="password" class="flex items-center mb-1 text-gray-700">
              <span class="material-icons mr-2"></span>
              Password
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Password"
            />
            <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
          </div>
          <div class="mb-4">
            <label for="confirmpassword" class="flex items-center mb-1 text-gray-700">
              <span class="material-icons mr-2"></span>
              Confirm password
            </label>
            <input
              type="password"
              id="confirmpassword"
              v-model="confirmpassword"
              class="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Confirm password"
            />
            <p v-if="confirmPasswordError" class="text-red-500 text-sm mt-1">{{ confirmPasswordError }}</p>
          </div>

          <button type="submit" class="w-full bg-gray-600 text-gray-900 py-2 rounded-lg hover:bg-gray-700">
            Register
          </button>
          <div class="flex items-center justify-between mb-4">
            <a href="#" class="text-gray hover:underline">Already a member?</a>
            <a href="/login" class="text-gray hover:underline">Login</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmpassword: '',
      usernameError: '',
      passwordError: '',
      confirmPasswordError: ''
    };
  },
  methods: {
    handleSubmit() {
      // Reset lỗi
      this.usernameError = '';
      this.passwordError = '';
      this.confirmPasswordError = '';

      let isValid = true;

      // Kiểm tra tên người dùng
      if (!this.username) {
        this.usernameError = 'Vui lòng nhập tên người dùng!';
        isValid = false;
      } else if (this.username.length < 3) {
        this.usernameError = 'Tên người dùng phải có ít nhất 3 ký tự!';
        isValid = false;
      }

      // Kiểm tra mật khẩu
      if (!this.password) {
        this.passwordError = 'Vui lòng nhập mật khẩu!';
        isValid = false;
      } else if (this.password.length < 6) {
        this.passwordError = 'Mật khẩu phải có ít nhất 6 ký tự!';
        isValid = false;
      }

      // Xác nhận mật khẩu
      if (this.password !== this.confirmpassword) {
        this.confirmPasswordError = 'Mật khẩu xác nhận không khớp!';
        isValid = false;
      }

      if (!isValid) return;

      // Lưu thông tin người dùng vào localStorage
      const user = {
        username: this.username,
        password: this.password
      };
      localStorage.setItem(`user_${Math.random().toString(36).substr(2, 9)}`, JSON.stringify(user));

      alert('Đăng ký thành công!');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Bong bóng */
.bubble {
  border-radius: 50%;
  position: absolute;
  animation: float 8s infinite ease-in-out;
}

/* Animation nổi */
@keyframes float {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

/* Bong bóng ngẫu nhiên */
.bubble:nth-child(1) {
  animation-duration: 7s;
  animation-delay: 0s;
}

.bubble:nth-child(2) {
  animation-duration: 9s;
  animation-delay: 2s;
}

.bubble:nth-child(3) {
  animation-duration: 11s;
  animation-delay: 4s;
}

.bubble:nth-child(4) {
  animation-duration: 10s;
  animation-delay: 3s;
}

.bubble:nth-child(5) {
  animation-duration: 12s;
  animation-delay: 5s;
}
</style>

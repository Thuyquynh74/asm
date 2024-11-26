<template>
    <div class="container mx-auto p-4 text-white">
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold mb-4">Cài đặt <font-awesome-icon icon="cog" class="mr-2" /></h1>
            <hr class="mb-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 class="text-xl font-semibold mb-4">Thông tin cơ bản</h2>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1" for="first-name">Họ và tên</label>
                        <input class="w-full lg:w-[350px] px-3 py-2 bg-gray-700 rounded" type="text" id="first-name" value="Phan Đoàn Thành Đạt">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1" for="last-name">Số điện thoại</label>
                        <input class="w-full lg:w-[350px] px-3 py-2 bg-gray-700 rounded" type="text" id="last-name" value="0862591757">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1" for="email">Email</label>
                        <input class="w-full lg:w-[350px] px-3 py-2 bg-gray-700 rounded" type="email" id="email"
                            value="Datpdtts00390@fpt.edu.vn">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1" for="username">Tên đăng nhập</label>
                        <input class="w-full lg:w-[350px] px-3 py-2 bg-gray-700 rounded" type="text" id="username" value="PhanDat">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-1" for="dashboard-preference">Dashboard
                            Preference</label>
                        <select class="w-full lg:w-[350px] px-3 py-2 bg-gray-700 rounded" id="dashboard-preference">
                            <option>New Dashboard</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold mb-16">Hình ảnh cá nhân</h2>
                    <div class="flex items-center justify-center mb-4">
                        <div class="form-group text-center mb-5">
                            <img src="../assets/images/logo.jpg" alt="Hình đại diện"
                                class="w-60 h-60 rounded-full mx-auto">
                        </div>
                    </div>
                    <div class="flex space-x-4 justify-center">
                        <button class="bg-gray-700 px-4 py-2 rounded">Tải lên</button>
                        <button class="bg-gray-700 px-4 py-2 rounded">Xóa bỏ</button>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <h2 class="text-xl font-semibold mb-4">Đổi mật khẩu</h2>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1" for="current-password">Mật khẩu hiện tại</label>
                    <input class="w-full px-3 py-2 bg-gray-700 rounded" type="password" id="current-password">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1" for="new-password">Mật khẩu mới</label>
                    <input class="w-full px-3 py-2 bg-gray-700 rounded" type="password" id="new-password">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-1" for="confirm-password">Xác nhận mật khẩu</label>
                    <input class="w-full px-3 py-2 bg-gray-700 rounded" type="password" id="confirm-password">
                </div>
                <button class="bg-blue-600 px-4 py-2 rounded">Lưu thay đổi</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettingsPage',
};
</script>

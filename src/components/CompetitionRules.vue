<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const tabs = ['QUYỀN LỢI & TRÁCH NHIỆM ĐỘI THI', 'CÁC HÌNH THỨC KỶ LUẬT']
const active = ref(0)

const benefits = [
  'Không được thay đổi thành viên đội thi trong suốt quá trình tham gia.',
  'Đội thi có quyền phản hồi và khiếu nại qua email chính thức của Ban Tổ chức.',
  'Ít nhất 50% thành viên phải tham gia các hoạt động do Ban Tổ chức tổ chức.',
  'Đội thi phải tuân thủ nội quy, thời hạn nộp hồ sơ và hướng dẫn tham gia sự kiện trực tuyến.',
  'Mọi thông tin nộp cho Ban Tổ chức phải trung thực, sai lệch sẽ bị xử lý trách nhiệm.',
  'Nghiêm cấm gian lận, vi phạm đạo đức, pháp luật hoặc xúc phạm cuộc thi và các bên liên quan.',
  'Đội thi tự chịu trách nhiệm về bản quyền và bảo mật hồ sơ dự thi cùng tài liệu từ Ban Tổ chức.',
  'Mọi buổi kết nối với cố vấn, nhà tài trợ, nhà đầu tư phải được hẹn trước và báo cho Ban Tổ chức ít nhất 24 giờ.'
];

const sanctions = [
  {
    title: 'Nhắc nhở',
    detail: 'Áp dụng với lỗi nhẹ, lần đầu vi phạm, chưa ảnh hưởng nghiêm trọng đến cuộc thi. Ban Tổ chức sẽ gửi thông báo và yêu cầu khắc phục ngay.'
  },
  {
    title: 'Cảnh cáo',
    detail: 'Áp dụng với lỗi tái phạm hoặc vi phạm có mức độ, ảnh hưởng đến hình ảnh cuộc thi. Cảnh cáo được công bố nội bộ.'
  },
  {
    title: 'Trừ điểm',
    detail: 'Áp dụng khi vi phạm trong nộp hồ sơ, thuyết trình hoặc triển khai dự án. Mức trừ điểm do Ban Tổ chức quyết định theo mức độ vi phạm.'
  },
  {
    title: 'Loại khỏi cuộc thi',
    detail: 'Áp dụng với vi phạm nghiêm trọng như sao chép ý tưởng, gian lận, cung cấp thông tin sai, vi phạm đạo đức/pháp luật hoặc gây mất an toàn. Quyết định loại trừ có thể được công bố rộng rãi.'
  }
];

</script>

<template>
  <section id="quy-che" class="container py-12 sm:py-16">
    <div class="text-center mb-4 px-4 md:px-32">
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-2 text-primary">
        QUY CHẾ CUỘC THI
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      <h3 class="md:w-2/3 lg:w-1/2 mx-auto text-xl text-center text-muted-foreground my-4">
        Các quy định dưới đây áp dụng cho tất cả đội tham gia hackathon. Vui lòng đọc kỹ và tuân thủ.
      </h3>
    </div>

    <div class="max-w-5xl mx-auto mt-12">
      <Card
        :class="['bg-card', active !== null ? 'ring-1 ring-primary-500 ring-offset-2 ring-offset-background shadow-xl shadow-primary/30' : '']">
        <CardHeader class="py-0">
          <div class="p-0 flex flex-col items-center mt-[-20px]">
            <div
              class="flex flex-wrap justify-center gap-2 mb-4 bg-background ring-1 rounded-sm ring-primary-500 ring-offset-2 ring-offset-background p-0">
              <button v-for="(t, i) in tabs" :key="t" @click="active = i" :aria-pressed="active === i" :class="[
                'px-3 py-2 rounded-md text-xs sm:text-sm md:text-sm font-medium text-destructive text-center whitespace-normal',
                active === i
                  ? 'bg-gradient-to-r from-[#D247BF] to-primary shadow-md text-white'
                  : 'bg-transparent text-muted-foreground hover:text-primary'
              ]">
                {{ t }}
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent class="p-6 pt-0">
          <div class="flex flex-col md:flex-row items-center gap-2 relative" v-if="active === 0">
            <div :class="[
              'flex-1',
              'bg-background/5 dark:bg-background/10 p-4 rounded-lg'
            ]">
              <div>
                <ul
                  class="list-disc pl-5 space-y-3 text-justify text-sm md:text-[16px] leading-relaxed text-foreground marker:text-primary">
                  <li v-for="(item, idx) in benefits" :key="idx">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="flex-shrink-0">
              <img :src="`roboto.png`" :alt="`Image describing benefits `"
                className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 animate-floating" />
            </div>
            <div
              class="z-100 absolute right-20 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl">
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center gap-2 relative" v-else>
            <div class="flex-shrink-0">
              <img :src="`runner.png`" alt="Hình minh họa hình thức kỷ luật"
                class="w-[120px] md:w-[220px] lg:w-[280px] mx-auto -scale-x-100 animate-floating" />

            </div>
            <div :class="[
              'flex-1',
              'bg-background/5 dark:bg-background/10 p-4 rounded-lg'
            ]">
              <div>
                <ul class="space-y-4 text-justify">
                  <li v-for="(item, idx) in sanctions" :key="idx" class="flex items-start gap-4">
                    <div class="flex-none mt-1">
                      <span
                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-500 shadow-md text-white font-semibold">
                        {{ idx + 1 }}
                      </span>
                    </div>
                    <div class="flex-1">
                      <div class="font-semibold text-primary">{{ item.title }}</div>
                      <div class="text-sm md:text-[16px] mt-1">{{ item.detail }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="z-100 absolute left-22 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl">
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
}

.animate-floating {
  animation: floating 3s ease-in-out infinite;
}
</style>
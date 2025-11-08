<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TrackIcon from '@/components/TrackIcon.vue'

const obj = {
    title: 'Đối tượng dự thi',
    text: 'Một đội từ hai (02) đến năm (05) người, thỏa mãn một trong các điều kiện sau:',
    bullets: [
        {
            title: 'Sinh viên',
            icon: 'student',
            text: 'Từ mọi ngành học, có kiến thức cơ bản về blockchain hoặc AI, có tinh thần học hỏi sáng tạo',
        },
        {
            title: 'Startup',
            icon: 'startup',
            text: 'Các đội nhóm đã có ý tưởng khởi nghiệp, mong muốn hiện thức hóa giải pháp thuộc lĩnh vực blockchain, AI, tài sản số, công nghệ số,...',
        },
        {
            title: 'Nhà nghiên cứu trẻ',
            icon: 'researcher',
            text: 'Chuyên gia trẻ đam mê nghiên cứu AI, blockchain, tài sản số, công nghệ số,...',
        },
        {
            title: 'Doanh nghiệp',
            icon: 'business',
            text: 'Đang hoạt động kinh doanh mảng blockchain, AI, công nghệ số, tài sản số,...',
        },
    ],
}

const rules = [
    {
        title: 'Vòng Hồ sơ',
        bullets: [
            '<strong>Hình thức:</strong> Nộp hồ sơ + pitching dự án online',
            'Chọn top 50 dự án mỗi bảng thi, sau đó Pitching để chọn top 30 mỗi bảng thi vào Bán kết.',
        ]
    },
    {
        title: 'Vòng Bán kết',
        bullets: [
            '<strong>Hình thức:</strong> Pitching dự án online',
            'Sau khi tham gia đào tạo, các đội thi pitching để chọn top 15 mỗi bảng thi vào Chung kết.'
        ]
    },
    {
        title: 'Vòng Chung kết',
        bullets: [
            '<strong>Hình thức:</strong> Pitching online (Bảng nhánh) + thi offline tại Đà Nẵng (Chung kết)',
            'Sau đào tạo chuyên sâu, chọn top 10 mỗi bảng thi xuất sắc nhất tiến vào vòng Chung kết, pitching trực tiếp để tìm ra đội chiến thắng.',
            'Đội xuất sắc nhất của mỗi bảng sẽ được chọn để tham gia hoạt động trải nghiệm.',
            'Ban Tổ chức công bố và trao giải thưởng, bế mạc và chụp hình lưu niệm.'
        ]
    },
    {
        title: 'Tiêu chí chấm điểm',
        bullets: [
            'Tính độc đáo, sáng tạo mới lạ của ý tưởng.',
            'Tính khả thi, hợp lý ban đầu.',
            'Giá trị thực tiễn',
            'Tính bền vững – khả năng mở rộng',
            'Một số tiêu chí phụ khác: độ hoàn thiện của dự án, độ nhận diện thương hiệu của dự án, cách thuyết trình, giải thích và phản biện.'
        ]
    }
]

</script>

<template>
    <section id="co-cau" class="container py-12 sm:py-16 relative rounded-2xl bg-secondary/10">
        <h2 class="text-[30px] md:text-[40px] text-center font-bold mb-2 text-primary">
            CƠ CẤU CUỘC THI
        </h2>
        <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        <h3 class="md:w-2/3 lg:w-1/2 mx-auto text-lg md:text-[24px] text-center text-muted-foreground my-4">
            Lộ trình từ vòng Hồ sơ đến Chung kết, cùng bộ tiêu chí chấm điểm rõ ràng
            để đội thi định vị chiến lược.
        </h3>

        <div class="px-1 md:px-28 pt-6">
            <div class="px-2">
                <h2 class="text-[24px] md:text-[28px] font-bold mb-2">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary">{{ obj.title
                    }}</span>
                </h2>
                <p class="text-[16px] text-muted-foreground mt-4">{{ obj.text }}</p>
            </div>
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <template v-for="(b, idx) in obj.bullets" :key="idx">
                    <div :class="[
                        'col-span-1',
                        (Math.floor(idx / 2) % 2 === 0
                            ? idx % 2 === 0
                                ? 'sm:col-span-1'
                                : 'sm:col-span-2'
                            : idx % 2 === 0
                                ? 'sm:col-span-2'
                                : 'sm:col-span-1')
                    ]">
                        <Card
                            class="h-full bg-muted/40 dark:bg-card transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50">
                            <CardHeader class="p-6 pb-3">
                                <div class="flex flex-col gap-3">
                                    <div>
                                        <TrackIcon :variant="b.icon" :size="52" />
                                    </div>
                                    <div class="w-full">
                                        <CardTitle class="text-[18px] font-semibold text-primary leading-tight">
                                            <span class="block font-bold text-primary uppercase">{{ b.title }}</span>
                                        </CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent class="text-muted-foreground px-6 pt-0 pb-6 text-sm md:text-[16px]">{{ b.text
                            }}</CardContent>
                        </Card>
                    </div>
                </template>
            </div>
        </div>

        <div class="px-1 md:px-28 pt-6">
            <template v-for="r in rules" :key="r.title">
                <div class="mb-8">
                    <div class="p-2">
                        <h2 class="text-[24px] md:text-[28px] font-bold mb-2">
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary">{{
                                r.title }}</span>
                        </h2>
                    </div>

                    <div class="gap-6 px-2">
                        <Card
                            class="px-2 transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50">
                            <CardContent class="text-muted-foreground p-6">
                                <ul
                                    class="list-disc pl-5 space-y-2 leading-relaxed text-foreground marker:text-primary text-sm md:text-[16px]">
                                    <li v-for="(b, bi) in r.bullets" :key="bi" v-html="b"></li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>
<script setup lang="ts">
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Users,
    ClipboardList,
    Rocket,
    Trophy,
    CheckCircle2,
} from "lucide-vue-next";

type Section = {
    title: string;
    bullets: string[];
    icon: any;
};

const sections: Section[] = [
    {
        title: "Đối tượng dự thi",
        bullets: [
            "Đội từ <strong>02–05</strong> thành viên, thỏa một trong hai điều kiện:",
            "Học sinh/sinh viên, công dân Việt Nam (trong & ngoài nước) <strong>18–30 tuổi</strong>; hoặc doanh nghiệp đang hoạt động trong <strong>blockchain & tài sản số</strong>.",
            "Người nước ngoài <strong>18–30 tuổi</strong> đang sinh sống/làm việc tại Việt Nam, tuân thủ pháp luật hiện hành.",
        ],
        icon: Users,
    },
    {
        title: "Vòng Hồ sơ",
        bullets: [
            "<strong>Hình thức:</strong> Nộp hồ sơ trực tuyến + <em>Pitching</em> dự án online.",
            "Kết thúc nộp hồ sơ, <strong>Top 50 dự án/bảng</strong> được BGK chọn vào vòng Pitching.",
            "Đội thi trình bày trực tiếp ý tưởng & sản phẩm trước Hội đồng Giám khảo.",
            "Sau vòng này, chọn <strong>Top 30 dự án/bảng</strong> vào Vòng Bán kết.",
        ],
        icon: ClipboardList,
    },
    {
        title: "Vòng Bán kết",
        bullets: [
            "<strong>Hình thức:</strong> <em>Pitching</em> dự án online.",
            "Sau chuỗi khóa học/đào tạo trực tuyến, đội thi hoàn thiện dự án và trình bày.",
            "Chọn <strong>Top 15 dự án/bảng</strong> vào Vòng Chung kết.",
        ],
        icon: Rocket,
    },
    {
        title: "Vòng Chung kết",
        bullets: [
            "<strong>Hình thức:</strong> Pitching online (Chung kết bảng nhánh) + Thi <strong>offline tại Đà Nẵng</strong> (Lễ chung kết).",
            "Tiếp tục <strong>Mentoring</strong>, hoàn thiện dự án.",
            "Từ Top 15 mỗi bảng, chọn <strong>Top 10</strong> xuất sắc nhất (gồm TOP 1 mỗi bảng + 7 đội từ bảng bất kỳ).",
            "<strong>Top 10</strong> pitching trực tiếp & phản biện trước Hội đồng Giám khảo.",
            "Công bố/quyết định giải Nhất/Bảng/Khu vực, <strong>trao giải & bế mạc</strong>.",
        ],
        icon: Trophy,
    },
    {
        title: "Tiêu chí chấm điểm",
        bullets: [
            "<strong>Tính độc đáo, sáng tạo</strong> của ý tưởng.",
            "<strong>Tính khả thi</strong>, hợp lý ban đầu.",
            "<strong>Giá trị thực tiễn</strong>.",
            "<strong>Tính bền vững – khả năng mở rộng</strong>.",
            "Tiêu chí phụ: mức độ hoàn thiện, <em>branding</em>, kỹ năng trình bày/giải thích/phản biện.",
        ],
        icon: CheckCircle2,
    },
];
</script>

<template>
    <section id="services" class="container py-24 sm:py-32 relative">
        <!-- background blobs -->
        <div
            class="pointer-events-none absolute -z-10 left-[-10%] top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div
            class="pointer-events-none absolute -z-10 right-[-8%] bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
            Cơ cấu cuộc thi
        </h2>

        <h3 class="md:w-2/3 lg:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10">
            Lộ trình từ vòng Hồ sơ đến Chung kết, cùng bộ tiêu chí chấm điểm rõ ràng
            để đội thi định vị chiến lược.
        </h3>

        <!-- Grid of cards -->
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Card v-for="sec in sections" :key="sec.title"
                class="group relative h-full overflow-hidden border border-border/60 bg-muted/60 dark:bg-card rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px] hover:shadow-primary/25">
                <!-- gradient top line -->
                <div
                    class="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#D247BF] via-primary to-[#6EA8FE]" />

                <CardHeader class="space-y-3">
                    <div class="flex items-center gap-3">
                        <component :is="sec.icon" class="h-6 w-6 text-primary" />
                        <CardTitle
                            class="text-base md:text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                            {{ sec.title }}
                        </CardTitle>
                    </div>

                    <CardDescription class="mt-1">
                        <ul
                            class="mt-2 space-y-2 text-sm md:text-[15px] leading-relaxed marker:text-primary list-disc pl-5">
                            <li v-for="(b, i) in sec.bullets" :key="i" v-html="b" />
                        </ul>
                    </CardDescription>
                </CardHeader>

                <!-- subtle gradient glow on hover -->
                <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true">
                    <div class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"></div>
                    <div class="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-2xl"></div>
                </div>
            </Card>
        </div>
    </section>
</template>

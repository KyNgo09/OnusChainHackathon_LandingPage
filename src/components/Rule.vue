<script setup lang="ts">
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Section = {
    title: string;
    bullets: string[]; // dùng v-html để hỗ trợ <strong>, <em>...
};

const sections: Section[] = [
    {
        title: "Đối tượng dự thi",
        bullets: [
            "Đội từ <strong>02–05</strong> thành viên, thỏa một trong hai điều kiện:",
            "• Học sinh/sinh viên, công dân Việt Nam (trong & ngoài nước) <strong>18–30 tuổi</strong>; hoặc doanh nghiệp đang hoạt động trong <strong>blockchain & tài sản số</strong>.",
            "• Người nước ngoài <strong>18–30 tuổi</strong> đang sinh sống/làm việc tại Việt Nam, tuân thủ pháp luật hiện hành.",
        ],
    },
    {
        title: "Vòng Hồ sơ",
        bullets: [
            "<strong>Hình thức:</strong> Nộp hồ sơ trực tuyến + <em>Pitching</em> dự án online.",
            "Kết thúc nộp hồ sơ, <strong>Top 50 dự án/bảng</strong> được BGK chọn vào vòng Pitching.",
            "Đội thi trình bày trực tiếp ý tưởng & sản phẩm trước Hội đồng Giám khảo.",
            "Sau vòng này, chọn <strong>Top 30 dự án/bảng</strong> vào Vòng Bán kết.",
        ],
    },
    {
        title: "Vòng Bán kết",
        bullets: [
            "<strong>Hình thức:</strong> <em>Pitching</em> dự án online.",
            "Sau chuỗi khóa học/đào tạo trực tuyến, đội thi hoàn thiện dự án và trình bày.",
            "Chọn <strong>Top 15 dự án/bảng</strong> vào Vòng Chung kết.",
        ],
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
    },
    {
        title: "Tiêu chí chấm điểm",
        bullets: [
            "• <strong>Tính độc đáo, sáng tạo</strong> của ý tưởng.",
            "• <strong>Tính khả thi</strong>, hợp lý ban đầu.",
            "• <strong>Giá trị thực tiễn</strong>.",
            "• <strong>Tính bền vững – khả năng mở rộng</strong>.",
            "• Tiêu chí phụ: mức độ hoàn thiện, <em>branding</em>, kỹ năng trình bày/giải thích/phản biện.",
        ],
    },
];
</script>

<template>
    <section id="services" class="container py-24 sm:py-32">
        <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
            Cơ cấu cuộc thi
        </h2>

        <h3 class="md:w-2/3 lg:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10">
            Lộ trình từ vòng Hồ sơ đến Chung kết, cùng bộ tiêu chí chấm điểm rõ ràng
            để đội thi định vị chiến lược.
        </h3>

        <!-- Grid 5 card: 2 cột (sm), 3 cột (lg), 5 cột (xl) -->
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Card v-for="sec in sections" :key="sec.title"
                class="bg-muted/60 dark:bg-card h-full border border-transparent hover:border-primary/40 hover:bg-background dark:hover:bg-background hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out rounded-xl">
                <CardHeader>
                    <CardTitle class="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                        {{ sec.title }}
                    </CardTitle>

                    <CardDescription class="mt-3 space-y-2">
                        <ul class="list-disc pl-5 space-y-2">
                            <li v-for="(b, i) in sec.bullets" :key="i" v-html="b" />
                        </ul>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    </section>
</template>

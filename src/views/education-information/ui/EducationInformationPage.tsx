import { Container, PageHero } from "@/shared/ui";
import { EducationNavigation } from "./EducationNavigation";
import { BasicInformation } from "../sections/BasicInformation";
import { ManagementStructure } from "../sections/ManagementStructure";
import { Documents } from "../sections/Documents";
import { Education } from "../sections/Education";
import { Management } from "../sections/Management";
import { TeachingStaff } from "../sections/TeachingStaff";
import { Facilities } from "../sections/Facilities";
import { PaidServices } from "../sections/PaidServices";
import { FinancialActivity } from "../sections/FinancialActivity";
import { Vacancies } from "../sections/Vacancies";
import { Scholarships } from "../sections/Scholarships";
import { InternationalCooperation } from "../sections/InternationalCooperation";
import { Catering } from "../sections/Catering";

export function EducationInformationPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: "Главная", href: "/" },
                    { label: "Сведения об образовательной организации" },
                ]}
                title="Сведения об образовательной организации"
                description="Официальные сведения об ООО «УСТА»: основные данные, документы, образовательные программы, руководство и условия обучения."
            />

            <div className="bg-surface">
                <Container>
                    <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
                        {/* Sticky-навигация — как на главной в Programs */}
                        <aside className="lg:col-span-3">
                            <div className="lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
                                <EducationNavigation />
                            </div>
                        </aside>

                        <main className="flex flex-col gap-16 lg:col-span-9">
                            <BasicInformation />
                            <ManagementStructure />
                            <Documents />
                            <Education />
                            <Management />
                            <TeachingStaff />
                            <Facilities />
                            <PaidServices />
                            <FinancialActivity />
                            <Vacancies />
                            <Scholarships />
                            <InternationalCooperation />
                            <Catering />
                        </main>
                    </div>
                </Container>
            </div>
        </>
    );
}
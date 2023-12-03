import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiNestjs,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { useResponsiveBreakpoint } from "@/hooks/useResponsiveBreakpoint.ts";
import { SkillCardSm } from "@components/ui/SkillCardSm.tsx";
import { SkillCardLg } from "@components/ui/SkillCardLg.tsx";

export function AboutmeWrapper() {
  const isLarge = useResponsiveBreakpoint();
  return (
    <section className="flex h-full w-full flex-col items-center justify-start overflow-scroll p-3 md:overflow-auto lg:overflow-auto">
      <div className="flex w-full flex-col justify-start space-y-2">
        <div className="flex items-end space-x-3">
          <label className="font-light lg:text-xl">I'm</label>
          <h2 className="text-3xl font-semibold lg:text-4xl">하태경,</h2>
        </div>
        <h3 className="text-3xl font-thin lg:py-3">Web / App Developer</h3>
      </div>
      <article className="py-4">
        <span className="text-sm">
          클라이언트의 요구사항을 프로젝트에 효과적으로 통합하며, 문제 해결
          능력이 탁월합니다. 새로운 기술을 검증하고 도입하는 것을 즐기며, 이를
          통해 완성도 높은 프로젝트 개발을 목표로 합니다. 주요 업무는 React를
          이용한 웹 및 앱 개발과 Nest.js를 활용한 빠른 REST API 구축입니다.
        </span>
      </article>
      <h3 className="my-1 w-full text-3xl lg:mt-3">What I Do?</h3>
      {!isLarge ? (
        <div>
          <article className="w-full p-2">
            <SkillCardSm paragraph="React 기반 framework로 프론트엔드 App을 구축합니다.">
              <FaReact className="text-4xl" />
            </SkillCardSm>
            <SkillCardSm paragraph="tailwind와 styled-component로 반응형 App을 구축합니다.">
              <SiTailwindcss className="text-4xl" />
              <SiStyledcomponents className="text-4xl" />
            </SkillCardSm>
            <SkillCardSm paragraph="Nest.js와 Graphql을 활용한 API Server App을 구축합니다.">
              <SiNestjs className="text-4xl" />
              <GrGraphQl className="text-4xl" />
            </SkillCardSm>
            <SkillCardSm paragraph="MongoDB와 Postgresql을 활용하여 DB 설계 및 구축을 합니다.">
              <SiMongodb className="text-4xl" />
              <BiLogoPostgresql className="text-4xl" />
            </SkillCardSm>
          </article>
        </div>
      ) : (
        <div className="mt-5 grid w-full grid-cols-2 gap-2">
          <SkillCardLg paragraph="React 기반 framework로 프론트엔드 App을 구축합니다.">
            <FaReact className="text-5xl" />
          </SkillCardLg>
          <SkillCardLg paragraph="tailwind와 styled-component로 반응형 App을 구축합니다.">
            <SiTailwindcss className="text-5xl" />
            <SiStyledcomponents className="text-5xl" />
          </SkillCardLg>
          <SkillCardLg paragraph="Nest.js와 Graphql을 활용한 API Server App을 구축합니다.">
            <SiNestjs className="text-5xl" />
            <GrGraphQl className="text-5xl" />
          </SkillCardLg>
          <SkillCardLg paragraph="MongoDB와 Postgresql을 활용하여 DB 설계 및 구축을 합니다.">
            <SiMongodb className="text-5xl" />
            <BiLogoPostgresql className="text-5xl" />
          </SkillCardLg>
        </div>
      )}
    </section>
  );
}

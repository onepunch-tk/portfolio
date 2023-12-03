/*
 * education
 * 2017-06~2017-11 6개월 비트캠프 강남점 32살
 *
 * experience
 * 2018-03~2020-08 키스톤 소프트
 * 2020-08~2022-08 앤스시스템
 * 2022-11~2023-02 프리랜서
 * */

import { ResumeCard } from "@components/ui/ResumeCard.tsx";

export function ResumeWrapper() {
  return (
    <section className="h-full grid-rows-2 overflow-auto p-3">
      <div className="h-1/2 border-b border-dashed border-neutral-900">
        <h3 className="py-2 text-xl font-semibold lg:py-5 lg:text-2xl">
          EDUCATION
        </h3>
        <div className="grid grid-rows-3 lg:grid-cols-3">
          <ResumeCard
            date={"2017-06~2017-11"}
            title={"비트캠프"}
            contents={[
              "AR / VR 양성과정 - C/C++ 및 C#을 활용한 Unity / Unreal 개발",
            ]}
          />
        </div>
      </div>
      <div className="h-1/2 ">
        <h3 className="py-2 text-xl font-semibold lg:py-5 lg:text-2xl">
          EXPERIENCE
        </h3>
        <div className="grid grid-rows-3 gap-y-10 lg:grid-cols-3 lg:grid-rows-none">
          <ResumeCard
            date={"2018-03~2020-08"}
            title={"키스톤 소프트"}
            contents={[
              "-react & electron.js",
              "-socket.IO를 활용한 시스템 제어.",
              "-현대 중공업 스마트 크레인",
              "-작업자의 안전 보호를 위해, 크레인 전면,후면부에 설치된 센서를 통해 크레인 작업자의 pc로 상태 감지",
            ]}
          />
          <ResumeCard
            date={"2020-08~2022-08"}
            title={"비트캠프"}
            contents={[
              "-.net5 & nest.js",
              "-blockchain REST API 개발",
              "-legacy code migration",
            ]}
          />
          <ResumeCard
            date={"2022-11~2023-02"}
            title={"프리랜서"}
            contents={[
              "-react & electron.js",
              "-LG 헬로비전에서 서비스되는 치매예방 프로그램 개발",
              "-Software Update Launcher 개발",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

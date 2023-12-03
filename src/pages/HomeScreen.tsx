import { useSelectMenu } from "@/hooks/useSelectMenu.ts";
import { Link } from "react-router-dom";
import { ROOT_ROUTES } from "@route/constants.ts";
import { useTypingAnimation } from "@/hooks/useTypingAnimation.ts";

const paragraphs = [
  "클라이언트 분들에게 신뢰와 완성된 소프트웨어",
  "제공을 약속한다는 마인드로 개발에 임합니다.",
  "비록 프로그래머로써 경력은 짧지만,",
  "단독 수행한 프로젝트가 대부분을 차지하는 만큼",
  "문제를 두려워하기 보다는 해결에 앞장서며,",
  "완성된 결과물에서 보람을 얻는 개발자 입니다.",
];

export function HomeScreen() {
  useSelectMenu();
  const [visiblePCount, isLastPVisible] = useTypingAnimation(paragraphs.length);
  return (
    <section className="grow lg:grid lg:grid-cols-2">
      <div className="flex h-full flex-col items-center justify-center px-10 py-3">
        <span className="fade-up text-lg font-semibold">도전을 좋아하고,</span>
        <span className="fade-up text-lg font-semibold">
          하루 하루 발전 목표로하는,
        </span>
        <h2 className="mt-2 bg-amber-400 text-2xl font-semibold">
          Web / App Developer
        </h2>
        <article className="my-4 flex items-end">
          <h1 className="mr-2 border-b-2 border-amber-400 text-5xl font-bold">
            하태경
          </h1>
          <span>입니다.</span>
        </article>
        <article className="mt-2 max-w-[230px] space-y-2 text-xs lg:min-w-max lg:text-sm">
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className={`typing-animation ${
                index <= (visiblePCount as number) ? "" : "hidden"
              } ${
                isLastPVisible && index === paragraphs.length - 1
                  ? "blink-cursor"
                  : ""
              }`}
            >
              {text}
            </p>
          ))}
        </article>
        <Link
          to={`/${ROOT_ROUTES.ABOUT_ME}`}
          className="mt-10 rounded-3xl bg-amber-400 p-3 font-semibold text-white transition-[transform] duration-300 hover:scale-110"
        >
          MORE ABOUT ME
        </Link>
      </div>
      <div className="my-img invisible rounded-r-lg bg-amber-400 lg:visible"></div>
    </section>
  );
}

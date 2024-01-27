import { memo } from "react";

const FrameMain = memo(() => {
  return (
    <header className="self-stretch h-[63px] flex flex-row items-end justify-between text-center text-xs text-black1 font-label-small">
      <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
        <div className="w-[31px] h-[34px] relative">
          <div className="absolute h-[94.12%] w-[112.9%] top-[51.47%] right-[-64.52%] bottom-[-45.59%] left-[51.61%] rounded-[50%] bg-white box-border [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black1" />
          <img
            className="absolute h-[37.35%] w-[41.94%] top-[30%] right-[25.81%] bottom-[32.65%] left-[32.26%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
            loading="eager"
            alt=""
            src="/group-36@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1">
        <div className="rounded-lg bg-grey-01 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.1)_inset] flex flex-row items-center justify-center p-1 gap-[4px]">
          <button className="cursor-pointer [border:none] py-[7px] pr-4 pl-5 bg-black1 rounded-lg flex flex-row items-center justify-center">
            <div className="relative text-xs leading-[14px] font-semibold font-label-small text-white text-center">
              New Upload
            </div>
          </button>
          <div className="rounded-21xl bg-grey-01 h-7 hidden flex-row items-center justify-end py-[7px] px-5 box-border">
            <div className="self-stretch relative leading-[14px] font-semibold">
              Recent
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[41.8px] w-[41.6px] relative"
        loading="eager"
        alt=""
        src="/vuesaxoutlineclosecircle.svg"
      />
    </header>
  );
});

export default FrameMain;

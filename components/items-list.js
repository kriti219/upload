import { memo } from "react";

const ItemsList = memo(
  ({
    iconsregularplus,
    iconsregularplus1,
    iconsregularchevronDownS,
    iconsregularplus2,
    iconsregularchevronDownS1,
    iconsregularplus3,
    iconsregularchevronDownS2,
    iconsregularplus4,
    iconsregularchevronDownS3,
  }) => {
    return (
      <div className="self-stretch rounded-t-none rounded-b-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0 text-left text-xs text-black font-drop-menu-menu">
        <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
          <img
            className="h-5 w-5 relative hidden min-h-[20px]"
            alt=""
            src={iconsregularplus}
          />
          <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-0">
            <div className="h-[18px] w-6 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
              CSE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              ECE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Physics
            </div>
          </div>
          <div className="h-[18px] w-[50px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 4
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 5
            </div>
          </div>
          <input
            className="m-0 h-5 w-5 relative min-h-[20px]"
            type="checkbox"
          />
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
          <img
            className="h-5 w-5 relative hidden min-h-[20px]"
            alt=""
            src={iconsregularplus1}
          />
          <div className="h-[18px] w-[45px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              CSE
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-[26px] pl-0">
            <div className="h-[18px] w-[23px] relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
              ECE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Physics
            </div>
          </div>
          <div className="h-[18px] w-[50px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 4
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 5
            </div>
          </div>
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src={iconsregularchevronDownS}
          />
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
          <img
            className="h-5 w-5 relative hidden min-h-[20px]"
            alt=""
            src={iconsregularplus2}
          />
          <div className="h-[18px] w-[45px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              CSE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              ECE
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-0 pr-px pl-0">
            <div className="h-[18px] w-12 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Physics
            </div>
          </div>
          <div className="h-[18px] w-[50px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 4
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 5
            </div>
          </div>
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src={iconsregularchevronDownS1}
          />
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
          <img
            className="h-5 w-5 relative hidden min-h-[20px]"
            alt=""
            src={iconsregularplus3}
          />
          <div className="h-[18px] w-[45px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              CSE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              ECE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Physics
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-0">
            <div className="h-[18px] w-[55px] relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 4
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 5
            </div>
          </div>
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src={iconsregularchevronDownS2}
          />
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
          <img
            className="h-5 w-5 relative hidden min-h-[20px]"
            alt=""
            src={iconsregularplus4}
          />
          <div className="h-[18px] w-[45px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              CSE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              ECE
            </div>
          </div>
          <div className="h-[18px] w-[49px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Physics
            </div>
          </div>
          <div className="h-[18px] w-[50px] relative hidden">
            <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 4
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-0">
            <div className="h-[18px] w-[55px] relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
              Option 5
            </div>
          </div>
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src={iconsregularchevronDownS3}
          />
        </div>
      </div>
    );
  }
);

export default ItemsList;

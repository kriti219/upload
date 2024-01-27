import Head from "next/head";
import FrameMain from "../components/frame-main";
import ItemsList from "../components/items-list";
import OptionLabel from "../components/option-label";

const Upload = () => {
  return (
    <div className="w-full relative rounded-lg bg-white overflow-hidden flex flex-col items-center justify-start pt-8 pb-[72px] pr-8 pl-[35px] box-border gap-[25px] text-left text-xs text-black font-drop-menu-menu">
      <FrameMain />
      <div className="w-[824px] flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[23px]">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between py-[11px] pr-[19px] pl-[17px] border-[1.3px] border-solid border-blues-gray2">
              <img className="h-5 w-5 relative hidden min-h-[20px]" alt="" />
              <div className="flex flex-row items-center justify-center">
                <div className="relative tracking-[0.03em] leading-[18px] font-medium">
                  Branch
                </div>
              </div>
              <div className="h-[18px] w-[45px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  CSE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  ECE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Physics
                </div>
              </div>
              <div className="h-[18px] w-[50px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 4
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 5
                </div>
              </div>
              <div className="h-5 w-5 relative">
                <img
                  className="absolute h-[33.5%] w-[58.5%] top-[37.5%] right-[20.5%] bottom-[29%] left-[21%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-px px-0 pb-0">
              <div className="h-0 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="self-stretch rounded-t-none rounded-b-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] pr-[25px] pl-6">
                    <input
                      className="m-0 h-5 w-5 relative min-h-[20px]"
                      type="checkbox"
                    />
                    <div className="h-[18px] w-[45px] flex flex-row items-center justify-start py-0 pr-[21px] pl-0 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        CSE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        ECE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Physics
                      </div>
                    </div>
                    <input
                      className="w-[50px] [border:none] [outline:none] bg-[transparent] h-[18px] flex flex-row items-start justify-start py-0 px-0 box-border font-drop-menu-menu font-medium text-xs text-black"
                      placeholder="Option 4"
                      type="text"
                    />
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
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
                    />
                    <div className="h-[18px] w-[45px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        CSE
                      </div>
                    </div>
                    <input
                      className="w-[49px] [border:none] [outline:none] bg-[transparent] h-[18px] flex flex-row items-center justify-start font-drop-menu-menu font-medium text-xs text-black"
                      placeholder="ECE"
                      type="text"
                    />
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Physics
                      </div>
                    </div>
                    <div className="h-[18px] w-[50px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Option 4
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Option 5
                      </div>
                    </div>
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                  </div>
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
                    />
                    <div className="h-[18px] w-[45px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        CSE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        ECE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] flex flex-row items-center justify-center py-0 pr-px pl-0 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        Physics
                      </div>
                    </div>
                    <div className="h-[18px] w-[50px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Option 4
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Option 5
                      </div>
                    </div>
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                  </div>
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
                    />
                    <div className="h-[18px] w-[45px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        CSE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        ECE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Physics
                      </div>
                    </div>
                    <div className="h-[18px] w-[50px] flex flex-row items-start justify-start py-0 px-0 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        Option 4
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Option 5
                      </div>
                    </div>
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                  </div>
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
                    />
                    <div className="h-[18px] w-[45px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        CSE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        ECE
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Physics
                      </div>
                    </div>
                    <div className="h-[18px] w-[50px] relative hidden">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                        Option 4
                      </div>
                    </div>
                    <div className="h-[18px] w-[49px] flex flex-row items-start justify-start py-0 px-0 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        Option 5
                      </div>
                    </div>
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between py-[11px] pr-[19px] pl-[17px] border-[1.3px] border-solid border-blues-gray2">
              <img className="h-5 w-5 relative hidden min-h-[20px]" alt="" />
              <div className="flex flex-row items-center justify-center">
                <div className="relative tracking-[0.03em] leading-[18px] font-medium">
                  Semester
                </div>
              </div>
              <div className="h-[18px] w-[45px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  CSE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  ECE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Physics
                </div>
              </div>
              <div className="h-[18px] w-[50px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 4
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 5
                </div>
              </div>
              <div className="h-5 w-5 relative">
                <img
                  className="absolute h-[33.5%] w-[58.5%] top-[37.5%] right-[20.5%] bottom-[29%] left-[21%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-px px-0 pb-0">
              <div className="h-0 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="self-stretch rounded-t-none rounded-b-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
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
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                  </div>
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
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
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                  </div>
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
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
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                  </div>
                  <div className="self-stretch bg-white flex flex-row items-center justify-between py-[11px] px-6">
                    <img className="h-5 w-5 relative min-h-[20px]" alt="" />
                    <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-0 z-[1]">
                      <div className="h-[18px] w-6 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        CSE
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 pr-[26px] pl-0 z-[2]">
                      <div className="h-[18px] w-[23px] relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        ECE
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center py-0 pr-px pl-0 z-[3]">
                      <div className="h-[18px] w-12 relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        Physics
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-0 z-[4]">
                      <div className="h-[18px] w-[55px] relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        Option 4
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-0 z-[5]">
                      <div className="h-[18px] w-[55px] relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                        Option 5
                      </div>
                    </div>
                    <img
                      className="h-5 w-5 relative min-h-[20px] z-[6]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between py-[11px] pr-[19px] pl-[17px] border-[1.3px] border-solid border-blues-gray2">
              <img
                className="h-5 w-5 relative min-h-[20px]"
                alt=""
                src="/iconsregularplus-2.svg"
              />
              <div className="flex-1 flex flex-row items-center justify-center">
                <div className="relative tracking-[0.03em] leading-[18px] font-medium">
                  Subject
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[21px] pl-0">
                <div className="relative tracking-[0.03em] leading-[18px] font-medium">
                  CSE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  ECE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Physics
                </div>
              </div>
              <div className="h-[18px] w-[50px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 4
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 5
                </div>
              </div>
              <div className="h-5 w-5 relative">
                <img
                  className="absolute h-[33.5%] w-[58.5%] top-[37.5%] right-[20.5%] bottom-[29%] left-[21%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-px px-0 pb-0">
              <div className="h-0 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <ItemsList
                  iconsregularplus="pending_I396:19323;303:1360;207:283;207:177"
                  iconsregularplus1="pending_I396:19323;303:1360;207:284;207:177"
                  iconsregularchevronDownS="pending_I396:19323;303:1360;207:284;207:183"
                  iconsregularplus2="pending_I396:19323;303:1360;207:285;207:177"
                  iconsregularchevronDownS1="pending_I396:19323;303:1360;207:285;207:183"
                  iconsregularplus3="pending_I396:19323;303:1360;207:286;207:177"
                  iconsregularchevronDownS2="pending_I396:19323;303:1360;207:286;207:183"
                  iconsregularplus4="pending_I396:19323;303:1360;207:287;207:177"
                  iconsregularchevronDownS3="pending_I396:19323;303:1360;207:287;207:183"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[310px] flex flex-row items-start justify-end">
          <div className="w-[260px] flex flex-row items-center justify-center">
            <div className="h-[45px] w-[262.6px] rounded-lg bg-white box-border hidden flex-row items-center justify-between py-[11px] px-[18px] z-[1] border-[1.3px] border-solid border-blues-gray2">
              <img className="h-5 w-5 relative hidden z-[1]" alt="" />
              <div className="h-[18px] flex flex-row items-center justify-center z-[2]">
                <div className="self-stretch relative tracking-[0.03em] leading-[18px] font-medium flex items-center">
                  Branch
                </div>
              </div>
              <div className="h-[18px] w-[45px] relative hidden z-[3]">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  CSE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden z-[4]">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  ECE
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden z-[5]">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Physics
                </div>
              </div>
              <div className="h-[18px] w-[50px] relative hidden z-[6]">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 4
                </div>
              </div>
              <div className="h-[18px] w-[49px] relative hidden z-[7]">
                <div className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[18px] font-medium">
                  Option 5
                </div>
              </div>
              <img className="h-5 w-5 relative z-[8]" alt="" />
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center pt-px px-0 pb-0">
              <div className="h-0 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <ItemsList
                  iconsregularplus="pending_I396:19128;303:1360;207:283;207:177"
                  iconsregularplus1="pending_I396:19128;303:1360;207:284;207:177"
                  iconsregularchevronDownS="pending_I396:19128;303:1360;207:284;207:183"
                  iconsregularplus2="pending_I396:19128;303:1360;207:285;207:177"
                  iconsregularchevronDownS1="pending_I396:19128;303:1360;207:285;207:183"
                  iconsregularplus3="pending_I396:19128;303:1360;207:286;207:177"
                  iconsregularchevronDownS2="pending_I396:19128;303:1360;207:286;207:183"
                  iconsregularplus4="pending_I396:19128;303:1360;207:287;207:177"
                  iconsregularchevronDownS3="pending_I396:19128;303:1360;207:287;207:183"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25px] h-[3px] relative rounded-[50%] bg-gainsboro hidden" />
      <OptionLabel />
    </div>
  );
};

export default Upload;

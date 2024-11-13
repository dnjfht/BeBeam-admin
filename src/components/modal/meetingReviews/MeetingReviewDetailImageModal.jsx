import BasicModal from "../BasicModal";
import NextArrow from "../../slider/arrow/NextArrow";
import PrevArrow from "../../slider/arrow/PrevArrow";

export default function MeetingReviewDetailImageModal({
  isModalOpen,
  setIsModalOpen,
  selectedImages,
  selectedImageIndex,
  setSelectedImageIndex,
}) {
  return (
    <BasicModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      isMoreMenu={false}
    >
      <PrevArrow
        onClick={() => {
          setSelectedImageIndex((prev) => prev - 1);
        }}
        disabled={selectedImageIndex === 0}
        fontSize="text-[2rem]"
        location="top-[48%] 2sm:left-5 3sm:left-0"
      />
      <img
        src={selectedImages?.[selectedImageIndex]}
        alt="meetingReviewImage"
        className="w-full max-w-[300px] mt-10 m-auto aspect-square object-cover rounded-lg"
      />
      <NextArrow
        onClick={() => {
          setSelectedImageIndex((prev) => prev + 1);
        }}
        disabled={selectedImageIndex === selectedImages?.length - 1}
        fontSize="text-[2rem]"
        location="top-[48%] 2sm:right-5 3sm:right-0"
      />
    </BasicModal>
  );
}

import { useQuery } from "@tanstack/react-query";
import { getSpecificMeetingDetailDataFetch } from "../../../api/meeting";
import { handleConsoleError } from "../../../common";

import BasicModal from "../BasicModal";

export default function EditMeetingDetailsModal({
  accessToken,
  isModalOpen,
  setIsModalOpen,
  selectedId,
}) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["meetingDetailDatas", isModalOpen],
    queryFn: async () => {
      const result = await getSpecificMeetingDetailDataFetch(
        accessToken,
        selectedId
      );
      return result;
    },
  });

  const comment = handleConsoleError(isLoading, error, data);

  console.log(data);

  return (
    <BasicModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      isMoreMenu={false}
    >
      {comment}
      모임 수정
    </BasicModal>
  );
}

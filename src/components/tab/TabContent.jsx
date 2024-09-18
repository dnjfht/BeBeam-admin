import { TabPanel } from "@mui/lab";

export default function TabContent({ value, datas }) {
  return (
    <TabPanel value={value}>
      <ul className="grid grid-cols-1 lg:grid-cols-3 2sm:grid-cols-2 gap-x-4">
        {datas.map((data) => {
          return (
            <li className="box-border p-2 mb-4 bg-[#e2e6ea] hover:bg-transparent border-[1px] border-solid hover:border-[#abb4c6] rounded-2xl shadow-[0_15px_16px_0_#abb4c6] text-[0.75rem] transition-all duration-700 cursor-pointer">
              <img
                className="object-cover mb-2 aspect-square rounded-xl"
                src={data.img}
                alt="meeting_img"
              />
              <h1 className="mb-1 font-bold text-[0.875rem]">{data.title}</h1>
              <p className="inline-block px-3 py-1 text-white bg-black rounded-full">
                {data.type}
              </p>
            </li>
          );
        })}
      </ul>
    </TabPanel>
  );
}

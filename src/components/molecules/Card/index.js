import React from "react";
import { Card1 } from "../../../assets";
import { colors } from "../../../utils";

const CardComponent = ({
  badge,
  imgCard,
  titleCard,
  terkumpul,
  siswaWaktu,
}) => {
  const badgeColor = () => {
    if (badge === "Umum") {
      return colors.badgeUmum;
    }
    if (badge === "Ramadhan") {
      return colors.badgeRamadhan;
    }
    if (badge === "Pembangunan") {
      return colors.badgePembangunan;
    }
    if (badge === "Pendidikan") {
      return colors.badgePendidikan;
    }
    if (badge === "Kesehatan") {
      return colors.badgeKesehatan;
    }
    return colors.badgeUmum;
  };
  return (
    <div className="flex my-3 ">
      <img src={imgCard} alt="" width={185} className="mr-1 rounded-md " />
      <div>
        <h1 className="text-sm font-semibold ">{titleCard}</h1>
        <span
          className={` bg-[${badgeColor()}] text-xs px-2 rounded-full py-[1px]`}
        >
          {badge}
        </span>
        <hr className="w-1/2 p-1 my-1 bg-yellow-400 rounded-full" />
        <div className="flex justify-between mt-1 text-sm">
          <div>
            <h1 className="text-xs text-gray-400 ">Terkumpul</h1>
            <span className="">Rp {terkumpul}</span>
          </div>
          <div className="text-right ">
            <h1 className="text-xs text-gray-400">Siswa Waktu</h1>
            <span className="">{siswaWaktu} hari</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

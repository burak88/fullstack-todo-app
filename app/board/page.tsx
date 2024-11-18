"use client";

import React, { useState } from "react";
import Breadcrumb from "../components/breadCrumb";
import { useSearchParams } from "next/navigation";
import { CiStar } from "react-icons/ci";
import { PiLightningLight } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import KanbanBoard from "../components/kanbanBoard";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Modal } from "../components/modal";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function BoardPage() {
  const params = useSearchParams();

  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.app);

  console.log(login);

  const breadcrumbItems = [
    { label: "Workspace", path: "/" },
    { label: "Board", path: "/board" },
    { label: `${params.get("workspace")}` },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex items-end justify-between">
        <p className="font-bold text-4xl mt-4">{params.get("workspace")}</p>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-lg border-[#E2E8F0] border-2 flex justify-center items-center">
            <PiLightningLight size={20} color="#1E293B" />{" "}
          </button>
          <button className="w-10 h-10 rounded-lg border-[#E2E8F0] border-2 flex justify-center items-center">
            <CiStar size={20} color="#1E293B" />{" "}
          </button>
          <button className="w-[97px] h-10 rounded-lg border-[#E2E8F0] border-2 flex justify-evenly items-center">
            <HiOutlineUsers size={20} color="#1E293B" /> Share
          </button>
        </div>
      </div>
      <KanbanBoard />
      <div className="sticky bottom-10 right-[106px] float-right">
        <button
          className="bg-[#306BFF] text-white font-bold text-[14px] rounded-full flex items-center p-4 justify-evenly w-[131px]"
          onClick={handleOpen}
        >
          {" "}
          <IoIosAddCircleOutline size={18} color="#FFFFFF" /> New Task
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        title="Create New Task"
        actionName="Save"
        onAction={() => console.log("first")}
      >
        <p>This is creating task modal</p>
      </Modal>
    </>
  );
}

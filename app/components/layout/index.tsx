"use client";

import { IoIosSearch } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiCaretDoubleLeftThin } from "react-icons/pi";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { useState } from "react";
import classNames from "classnames";
import { IPublicLayout } from "./index.type";
import { useRouter } from "next/navigation";
import { topbarMenuItem } from "@/app/constants/topbarMenuItem";
import { sidebarMenuItem } from "@/app/constants/sidebarMenuItem";
import { Divider } from "../divider";
import { Modal } from "../modal";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_WORKSPACE } from "@/graphql/mutations";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { GET_WORKSPACES } from "@/graphql/queries";

export default function PublicLayout({ children }: IPublicLayout) {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<string>("");
  const [workspaceModal, setWorkspaceModal] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };
  const currentPage = (pageName: string) => {
    setActivePage(pageName);
  };

  const { data: session } = useSession();

  const [createWorkspace] = useMutation(CREATE_WORKSPACE);
  const { loading, error, data, refetch } = useQuery(GET_WORKSPACES);

  const handleWorkspace = async () => {
    await createWorkspace({
      variables: {
        name: formData.name,
        description: formData.description,
        userId: session?.user.id,
      },
    })
      .then((res) => toast.success("Workspace create is succesfully"))
      .catch((err) => toast.error(err))
      .finally(() => {
        refetch();
        setWorkspaceModal(false);
      });
  };

  return (
    <>
      <main>
        <aside
          className={classNames(
            "bg-white top-0 bottom-0 fixed shadow-md left-0 flex flex-col items-center pt-8 transition-width duration-300",
            { "w-[60px]": menuOpen, "w-[250px]": !menuOpen }
          )}
        >
          <div className="flex items-center justify-between w-full px-4">
            <p
              className={classNames(
                "text-[26px] font-semibold hover: cursor-pointer",
                {
                  hidden: menuOpen,
                }
              )}
              onClick={() => {
                router.push("/");
                currentPage("");
              }}
            >
              Hiro
            </p>
            <button onClick={toggleMenu}>
              <PiCaretDoubleLeftThin
                className={classNames(
                  "text-[#94A3B8] transition-transform duration-300",
                  {
                    "rotate-180": menuOpen,
                    "rotate-0": !menuOpen,
                  }
                )}
                size={16}
              />
            </button>
          </div>
          <Divider className="mt-4" />
          {/* <div className="w-full border-b border-gray-200 mt-4"></div> */}
          <div className="mt-8 w-full px-4">
            {sidebarMenuItem.map((item, index) => (
              <button
                className="flex items-center text-[#94A3B8] text-base gap-4 pb-5"
                key={index}
              >
                <item.icon size={20} /> {!menuOpen && item.text}
              </button>
            ))}
          </div>
          <Divider className="mt-6" />
          <div className="w-full pt-6 px-4">
            <div className="flex items-center justify-between">
              <p className="text-[#94A3B8] text-xs font-bold">
                {!menuOpen && "WORKSPACE"}
              </p>
              <button onClick={() => setWorkspaceModal(true)}>
                <MdOutlineAddToPhotos size={16} className="text-[#94A3B8]" />
              </button>
            </div>
            {error && <p>something goes wrong.</p>}
            {loading && <p>loading ...</p>}
            {!menuOpen && !loading && (
              <div className="flex flex-col">
                {data.workspaces.map((item) => (
                  <div
                    className="flex items-center mt-8 gap-6 hover:cursor-pointer"
                    onClick={() => {
                      router.replace(`/board?workspace=${item.name}`);
                      setActivePage("Board");
                    }}
                    key={item.id}
                  >
                    <span className="block h-2 w-2 rounded-full bg-[#FFB580] ring-2 ring-white"></span>
                    <p className="font-medium text-base">{item.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        <div
          className={classNames("flex-1 transition-margin duration-300", {
            "ml-[60px]": menuOpen,
            "ml-[250px]": !menuOpen,
          })}
        >
          <header
            className={classNames(
              "bg-white top-0 right-0 h-[88px] shadow-md flex justify-between items-center fixed pl-10 pr-10",
              { "left-[60px] ": menuOpen, "left-[250px] ": !menuOpen }
            )}
          >
            <div className="flex items-center gap-8">
              {topbarMenuItem.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <button
                    className={classNames(
                      "flex justify-between items-center  text-base gap-1",
                      {
                        "text-[#94A3B8]": activePage !== item.text,
                        "text-[#306BFF]": activePage === item.text,
                      }
                    )}
                    onClick={() => {
                      currentPage(item.text);
                      router.push(`${item.text.toLowerCase()}`);
                    }}
                  >
                    <item.icon size={18} /> {item.text}
                  </button>
                  {activePage === item.text && (
                    <div
                      className={classNames(
                        "w-full border-b border-[1px]  border-[#306BFF]  b-0 "
                      )}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-8">
              <div className="relative w-full">
                <input
                  type="text"
                  className="border-2 rounded-2xl h-10 pl-10 w-full focus:border-gray-400 focus:outline-none"
                  placeholder="Search..."
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <IoIosSearch size={20} color="#306BFF" />
                </span>
              </div>
              <div className="relative">
                <IoChatbubbleEllipsesOutline size={22} color="#94A3B8" />
                <span className="absolute top-0 right-0 block h-[6px] w-[6px] rounded-full bg-red-500 ring-2 ring-white"></span>
              </div>
              <div className="relative">
                <IoIosNotificationsOutline size={22} color="#94A3B8" />
                <span className="absolute top-0 right-0 block h-[6px] w-[6px] rounded-full bg-red-500 ring-2 ring-white"></span>
              </div>
              <div className="bg-[#FFE1CC] rounded-full w-20 h-12"></div>
            </div>
          </header>
          <div className="mt-[88px] p-10">{children}</div>
        </div>
      </main>
      <Modal
        open={workspaceModal}
        title="Create Workspace"
        onClose={() => setWorkspaceModal(false)}
        actionName="Create"
        onAction={() => handleWorkspace()}
      >
        <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                placeholder="Name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                type="text"
                placeholder="Description..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";

interface Course {
  title?: string;
}

interface SidebarProps {
  sidebar: {
    course?: Course;
  };
  courseId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar, courseId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-3/12 h-screen bg-[#333A46] transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <div className={`text-black px-5 py-3`}>
          <div
            className={"ml-auto flex items-center justify-between text-white"}
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <>
                <Link
                  to={"/mybatch"}
                  className={"flex items-center justify-center gap-2 text-sm"}
                >
                  <ArrowLeft size={20} />
                  Back to dashboard
                </Link>
                <CaretDoubleLeft size={25} />
              </>
            ) : (
              <CaretDoubleRight size={25} />
            )}
          </div>
          <div className={"mt-5 text-2xl text-white"}>
            {sidebar?.course?.title}
          </div>
        </div>
        <div className={"bg-white h-full w-full overflow-scroll"}>
          {courseId}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

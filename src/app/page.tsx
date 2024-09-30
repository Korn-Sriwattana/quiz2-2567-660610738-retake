import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner
          PostTitle="Korn Sriwattana 660610738"
          content="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #26120"
          profilePic="/profileImages/87731386_616989628848933_2892013583061745664_n.jpg"
          likes={100}
        ></PostOwnner>

        {/* Comment Example */}
        

        {/* Reply Example */}
        

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}

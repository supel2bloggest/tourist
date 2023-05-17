import FooterItem from "./FooterItem";
import FooterTitle from "./FooterTitle";

export default function Footer() {
  return (
    <footer className="bg-primary p-5 grid grid-cols-1 sm:grid-cols-3 w-full">
      <div className="">
        <FooterTitle title={"ฟีเจอร์"} />
        <ul>
          <FooterItem title={"ค้นหาสถานที่ท่องเที่ยว"} />
          <FooterItem title={"บุคมาร์ค"} />
          <FooterItem title={"สุ่มที่เที่ยว"} />
          <FooterItem title={"จุดท่องเที่ยวหลัก"} />
        </ul>
      </div>
      <div className="">
        <FooterTitle title={"คอมมิวนิตี้"} />
        <ul>
          <FooterItem title={"Facebook"} />
          <FooterItem title={"Instagram"} />
          <FooterItem title={"Tiktok"} />
        </ul>
      </div>
      <div className="">
        <FooterTitle title={"บริษัท"} />
        <ul>
          <FooterItem title={"เกี่ยวกับเรา"} />
          <FooterItem title={"ร่วมงานกับเรา"} />
        </ul>
      </div>
    </footer>
  );
}

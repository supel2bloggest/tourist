import PlaceCard from "@/components/PlaceCard";
import clsx from "clsx";
import { Key } from "react";
import places from "@/data/place.json";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout isAuth={false}>
      <div className="text-text_primary">
        <h1 className="mt-12 text-center font-bold text-3xl">PHUKET</h1>
        <div className="grid place-content-center mt-3">
          <p className="max-w-3xl p-3">
            ภาพภูเก็ตในจินตนาการของนักท่องเที่ยว คือ แสงแดดอุ่นๆ เครื่องดื่ม
            Pina Colada ในมือ เด็กเล่นทรายสีขาวอย่างสนุกสนาน
            เกาะภูเก็ตเป็นเกาะที่โดดเด่นมากที่สุดเกาะหนึ่งในประเทศไทย
            มีทุกสิ่งสำหรับนักท่องเที่ยว
            ทั้งรีสอร์ทสำหรับการพักผ่อนอย่างสงบเงียบ ปาร์ตี้สุดมันส์ตลอดทั้งคืน
            แหล่งช็อปปิ้ง และ สวรรค์ของอาหารอร่อยๆ นอกจากนี้
            ยังมีจุดหมายปลายทางที่เป็นชายหาดในฝันสำหรับคู่รัก
            หรือครอบครัวที่กำลังมองหาประสบการณ์ในการพักผ่อนท่ามกลางทะเลที่สวยงามในเขตร้อนที่คอยมอบบริการสุดหรูหราอย่างน่าประทับใจ
          </p>
        </div>
      </div>

      <div
        className={clsx(
          "flex min-h-screen flex-col items-center justify-between p-20"
        )}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
          {places.map((place, i: number) => {
            return (
              <div key={i as Key}>
                <PlaceCard
                  image={place.image}
                  title={place.title}
                  subtitle={place.subtitle}
                  content={place.content}
                  updated_at={place.updated_at}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

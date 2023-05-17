import Input from "@/components/Input";
import Layout from "@/components/Layout";
import clsx from "clsx";
import Link from "next/link";
import { useFormik } from "formik";
import Modal from "@/components/Modal";
import { useModal } from "@/components/Modal/hook";

interface Values {
  username?: string;
  password?: string;
}

const validate = (values: Values) => {
  const errors: Values = {};

  if (!values.username) {
    errors.username = "กรุณากรอกชื่อผู้ใช้";
  } else if (values.username.length !== 10) {
    errors.username = "ชื่อผู้ชื่อจะต้องกรอกตัวเลข 10 หลัก";
  } else if (!/^0{1}(6|8|9){1}\d{8}$/i.test(values.username)) {
    errors.username = "รูปแบบเบอร์โทรไม่ถูกต้อง";
  }

  if (!values.password) {
    errors.password = "กรุณากรอกรหัสผ่าน";
  } else if (!/^[A-Z]{1}[A-Za-z0-9]+$/i.test(values.password)) {
    errors.password = "รูปแบบรหัสผ่านไม่ถูกต้อง";
  }

  return errors;
};

export default function LoginPage() {
  const { modal, closeModal, openModal } = useModal();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      openModal({
        title: "Success",
        content: (
          <>
            <div>username: {values.username}</div>
            <div>password: {values.password}</div>
          </>
        ),
      });
    },
  });

  console.log(modal);

  return (
    <Layout isAuth={true}>
      <div
        className={clsx(
          "flex min-h-screen flex-col items-center justify-between p-24"
        )}
      >
        <section className="p-5 min-w-[300px] border border-solid border-primary rounded-lg">
          <form onSubmit={formik.handleSubmit}>
            <div className="text-text_primary font-bold flex justify-center mb-3">
              ล๊อคอิน เพื่อเข้าใช้งาน
            </div>
            <Input
              id="username"
              type="text"
              label="ชื่อผู้ใช้"
              placeholder="กรอกเบอร์โทร 10 หลัก"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="mt-2 text-[#FF0000] text-sm">
                {formik.errors.username}
              </div>
            ) : null}
            <div className="my-3" />
            <Input
              id="password"
              type="password"
              label="รหัสผ่าน"
              placeholder="xxxxx"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="mt-2 text-[#FF0000] text-sm">
                {formik.errors.password}
              </div>
            ) : null}

            <div className="grid grid-cols-2 mt-6">
              <Link
                href="/auth/register"
                className="px-3 py-2 text-text_primary"
              >
                สมัครสมาชิก
              </Link>
              <button type="submit" className="bg-primary px-3 py-2">
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </section>
      </div>
      <Modal isOpen={!!modal} closeModal={closeModal} modal={modal} />
    </Layout>
  );
}

import Input from "@/components/Input";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { useModal } from "@/components/Modal/hook";
import clsx from "clsx";
import { useFormik } from "formik";
import Link from "next/link";

interface Values {
  firstname?: string;
  lastname?: string;
  bank?: string;
  bank_account?: string;
  username?: string;
  password?: string;
}

const validate = (values: Values) => {
  const errors: Values = {};

  if (!values.firstname) {
    errors.firstname = "กรุณากรอกชื่อ";
  } else if (!/(^[\u0E00-\u0E4D]+$|^[A-Za-z]+$)/i.test(values.firstname)) {
    errors.firstname = "รูปแบบชื่อไม่ถูกต้อง";
  }

  if (!values.lastname) {
    errors.lastname = "กรุณากรอกชื่อนามสกุล";
  } else if (!/(^[\u0E00-\u0E4D]+$|^[A-Za-z]+$)/i.test(values.lastname)) {
    errors.lastname = "รูปแบบชื่อไม่ถูกต้อง";
  }

  if (!values.bank) {
    errors.bank = "กรุณากรอกธนาคาร";
  }

  if (!values.bank_account) {
    errors.bank_account = "กรุณากรอกเลขบัญชี";
  } else if (!/^\d{10}$/i.test(values.bank_account)) {
    errors.bank_account = "รูปแบบเลขบัญชีไม่ถูกต้อง";
  }

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

export default function RegisterPage() {
  const { modal, closeModal, openModal } = useModal();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      bank: "",
      bank_account: "",
      firstname: "",
      lastname: "",
    },
    validate,
    onSubmit: (values) => {
      openModal({
        title: "Success",
        content: (
          <>
            <div>firstname: {values.firstname}</div>
            <div>lastname: {values.lastname}</div>
            <div>bank: {values.bank}</div>
            <div>bank_account: {values.bank_account}</div>
            <div>username: {values.username}</div>
            <div>password: {values.password}</div>
          </>
        ),
      });
    },
  });

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
              สมัครสมาชิก เพื่อเข้าใช้งาน
            </div>
            <Input
              id="firstname"
              type="text"
              label="ชื่อ"
              placeholder="ชื่อ"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="mt-2 text-[#FF0000] text-sm">
                {formik.errors.firstname}
              </div>
            ) : null}
            <div className="my-3" />
            <Input
              id="lastname"
              type="text"
              label="นามสกุล"
              placeholder="ชื่อนามสกุล"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="mt-2 text-[#FF0000] text-sm">
                {formik.errors.lastname}
              </div>
            ) : null}
            <div className="my-3" />
            <div>
              <div className="text-text_primary">Bank</div>
              <select
                className="border w-full rounded p-1"
                id="bank"
                placeholder="เลือกธนาคาร"
                onChange={formik.handleChange}
                value={formik.values.bank}
              >
                <option value="">ไม่ระบุ</option>
                <option value="กรุงเทพ">กรุงเทพ</option>
                <option value="กสิกร">กสิกร</option>
                <option value="ไทยพาณิชย์">ไทยพาณิชย์</option>
              </select>
            </div>
            {formik.touched.bank && formik.errors.bank ? (
              <div className="mt-2 text-[#FF0000] text-sm">
                {formik.errors.bank}
              </div>
            ) : null}
            <div className="my-3" />
            <Input
              id="bank_account"
              type="text"
              label="เลขบัญชี"
              placeholder="เลขบัญชี 10 หลัก"
              onChange={formik.handleChange}
              value={formik.values.bank_account}
            />
            {formik.touched.bank_account && formik.errors.bank_account ? (
              <div className="mt-2 text-[#FF0000] text-sm">
                {formik.errors.bank_account}
              </div>
            ) : null}
            <div className="my-3" />
            <Input
              id="username"
              type="text"
              label="ชื่อผู้ใช้"
              placeholder="เบอร์โทร 10 หลัก"
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
              <Link href="/auth/login" className="px-3 py-2 text-text_primary">
                ล๊อคอิน
              </Link>
              <button type="submit" className="bg-primary px-3 py-2">
                สมัคร
              </button>
            </div>
          </form>
        </section>
      </div>
      <Modal modal={modal} isOpen={!!modal} closeModal={closeModal} />
    </Layout>
  );
}

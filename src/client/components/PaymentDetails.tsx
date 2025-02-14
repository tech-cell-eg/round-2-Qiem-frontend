import PayOfferImg from "../../assets/payOfferImg.png";
import CardPaymentForm from "./PaymentForm";
function PaymentDetails() {
  return (
    <div className="flex flex-col gap-20 lg:flex-row py-10 justify-between " dir="rtl">
      <div className="flex flex-col justify-between gap-20">
        <h2 id="pay-offer-header">
          عروض - تفاصيل العرض- المدفوعات - بيانات بطاقة الدفع
        </h2>
        <img
          src={PayOfferImg}
          alt="payment imge"
          className="w-[300px] h-[250px]"
        />
      </div>
      <CardPaymentForm />
    </div>
  );
}

export default PaymentDetails;

import OrderSidebar from "@/app/components/order/OrderSidebar";
import OrderSummary from "@/app/components/order/OrderSummary";

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar />
        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
        <OrderSummary/>
      </div>
    </>
  );
}

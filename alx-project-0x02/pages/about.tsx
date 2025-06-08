import Button from "@/components/common/Button";
import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <>
    <Header />{/*render the header */}
    <main className="min-h-screen flex items-center justify-center bg-blue-100 text-black">
      <h1 className="text-3xl font-bold">About Us</h1>

      {/* Three buttons with different sizes and shapes */}
        <Button label="Small Rounded" size="small" shape="rounded-sm" />
        <Button label="Medium Pill" size="medium" shape="rounded-full" />
        <Button label="Large Rounded" size="large" shape="rounded-md" />
    </main>
    </>
  );
}

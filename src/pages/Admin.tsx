import { AdminProductForm } from "@/components/AdminProductForm";

const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Admin Panel</h1>
      <AdminProductForm />
    </div>
  );
};

export default Admin;
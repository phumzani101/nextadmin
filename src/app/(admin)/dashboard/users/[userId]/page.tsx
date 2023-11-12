import UserForm from "@/app/(admin)/components/users/UserForm";
import { getUserById } from "@/server/actions/userActions";
import React from "react";

const AdminUserPage = async ({ params }: { params: { userId: string } }) => {
  const user = await getUserById({ userId: params?.userId });
  console.log(user);
  return (
    <div className="admin-users">
      <UserForm user={user} />
    </div>
  );
};

export default AdminUserPage;

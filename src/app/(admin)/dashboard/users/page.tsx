import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UsersSearch from "../../components/UsersSearch";
import Link from "next/link";
import { listUsers } from "@/server/actions/userActions";
import { Eye, EyeIcon, Trash2Icon } from "lucide-react";

const AdminUsersPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  const users = (await listUsers({ searchQuery: searchParams?.q })) || [];

  return (
    <div className="my-10">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between py-4">
            <CardTitle>Users</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
            <Link href="/dashboard/users/create">
              <Button>Add Users</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <UsersSearch />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => {
                const imgUrl = user?.image ? user?.image : "/noavatar.png";
                return (
                  <TableRow key={user?._id}>
                    <TableCell className="font-medium">
                      <div className="flex gap-2">
                        <Image
                          src={imgUrl}
                          alt="Img"
                          width={20}
                          height={20}
                          className="rounded-md object-cover"
                        />
                        {user?.name}
                      </div>
                    </TableCell>
                    <TableCell>{user?.email}</TableCell>
                    <TableCell>
                      {user?.createdAt?.toString().slice(4, 16)}
                    </TableCell>
                    <TableCell>
                      <Badge>{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user?.isActive ? "secondary" : "outline"}>
                        {user?.isActive ? "Active" : "Passive"}
                      </Badge>
                    </TableCell>

                    <TableCell className="flex gap-2">
                      <Link href={`/dashboard/users/${user._id}`}>
                        <Button variant="outline" size="sm">
                          <EyeIcon size={16} />
                        </Button>
                      </Link>
                      <Button variant="destructive" size="sm">
                        <Trash2Icon size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-end space-x-2 py-4 w-full">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminUsersPage;

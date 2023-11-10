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

const AdminUsersPage = () => {
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
                <TableHead>Action</TableHead>
                <TableHead>#</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex gap-2">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md object-cover"
                    />
                    John Doe
                  </div>
                </TableCell>
                <TableCell>major@gmail.com</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>user</TableCell>
                <TableCell>active</TableCell>

                <TableCell>view Delete</TableCell>
              </TableRow>
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

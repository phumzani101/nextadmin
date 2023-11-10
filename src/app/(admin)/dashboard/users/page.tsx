import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdminUsersPage = () => {
  return (
    <div className="my-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
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
              <TableCell>
                <Badge variant="default">Pending</Badge>
              </TableCell>
              <TableCell>14.02.2024</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
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
              <TableCell>
                <span className="">Pending</span>
              </TableCell>
              <TableCell>14.02.2024</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
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
              <TableCell>
                <span className="">Pending</span>
              </TableCell>
              <TableCell>14.02.2024</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
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
              <TableCell>
                <span className="">Pending</span>
              </TableCell>
              <TableCell>14.02.2024</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={20}
                    height={20}
                    className="rounded-md object-cover border-1"
                  />
                  John Doe
                </div>
              </TableCell>
              <TableCell>
                <span className="">Pending</span>
              </TableCell>
              <TableCell>14.02.2024</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminUsersPage;

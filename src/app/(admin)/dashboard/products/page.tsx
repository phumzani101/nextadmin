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
import ProductsSearch from "../../components/Products/ProductsSearch";
import Link from "next/link";

const AdminProductsPage = () => {
  return (
    <div className="my-10">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between py-4">
            <CardTitle>Products</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
            <Link href="/dashboard/products/create">
              <Button>Create Products</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <ProductsSearch />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Action</TableHead>
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
                <TableCell>$599</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>1</TableCell>
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
                <TableCell>$599</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>1</TableCell>
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
                <TableCell>$599</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>1</TableCell>
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
                <TableCell>$599</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>1</TableCell>
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
                <TableCell>$599</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>1</TableCell>
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
                <TableCell>$599</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>1</TableCell>
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
                <TableCell>$599</TableCell>
                <TableCell>Oct 02 2024</TableCell>
                <TableCell>1</TableCell>
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

export default AdminProductsPage;
